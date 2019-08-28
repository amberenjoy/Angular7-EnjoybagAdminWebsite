/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-26 10:25:06
 * @LastEditTime: 2019-08-19 15:38:09
 * @LastEditors: Please set LastEditors
 */
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Category } from './../../shared/models/category';
import { Level } from './../../shared/models/level';
import { Coupon } from './../../shared/models/coupon';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../../_services/categories.service';
import { LevelsService } from '../../_services/levels.service';
import { CouponsService } from './../../_services/coupons.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {

  categories: Category[];
  levels: Level[];
  coupons: Coupon[];
  categoryForm: FormGroup;
  levelForm: FormGroup;
  deleteThisCategory: Category;
  addThisCategory: Category;
  addCategoryModal: boolean;
  editCategoryModal: boolean;
  deleteCategoryModal: boolean;
  error: string;

  displayedColumns: string[] = ['code', 'type', 'amount', 'Usage/limit', 'expiry date'];
  dataSource = [];
  sortedData = [];

  @ViewChild('promotionInfo', { static: false }) promotionInfo: ElementRef;

  constructor(
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder,
    private levelsService: LevelsService,
    private couponService: CouponsService
  ) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe(res => {
      if (res.length) {
        this.categories = res;
      } else {
        this.categoriesService.getBagCategories().subscribe(data => {
          this.categories = data;
        });
      }
    });

    this.levelsService.getLevels().subscribe(res => {
      this.levels = res;
      if (res.length) {
        this.levels = res;
      } else {
        this.levelsService.getLevelsApi().subscribe(data => {
          this.levels = data;
        });
      }
      this.levels.forEach(e => {
        e.edit = false;
      });
    });

    this.couponService.getCoupons().subscribe(res => {
      this.coupons = res.sort((a, b) => {
        if (a.updateAt < b.updateAt) { return 1; }
        if (a.updateAt > b.updateAt) { return -1; }
        return 0;
      });
    });
  }

  filterByAlphabet() {
    this.categories.sort((a, b) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });
  }

  editACategory(item) {
    this.editCategoryModal = true;
    this.categoryForm = this.formBuilder.group({
      id: item.id,
      class: [item.class, Validators.required],
      name: [item.name, Validators.required],
      chineseName: [item.chineseName, Validators.required]
    });
  }

  editLevelInformation(levelItem) {
    console.log(this.promotionInfo.nativeElement.value);
    levelItem.promotion = this.promotionInfo.nativeElement.value;
    // this.levelsService.updateLevelById(levelItem).subscribe(res => {
    //   console.log(res);
    // });
  }

  addNewCategory() {
    this.addCategoryModal = true;
    this.categoryForm = this.formBuilder.group({
      class: ['', Validators.required],
      name: ['', Validators.required],
      chineseName: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.addCategoryModal, this.editCategoryModal);
    if (this.addCategoryModal) {
      this.categoriesService.addNewCategory(this.categoryForm.value).subscribe(res => {
        this.addThisCategory = this.categoryForm.value;
        this.addThisCategory.id = res.id;
        this.addCategoryModal = false;
        this.categories.push(this.addThisCategory);
      }, err => {
        this.error = err.message;
      });
    } else if (this.editCategoryModal) {
      this.categoriesService.updateACategoryById(this.categoryForm.value).subscribe(() => {
        this.editCategoryModal = false;
        this.categories = this.categories.filter(e => {
          return e.id !== this.categoryForm.value.id;
        });
        this.categories.push(this.categoryForm.value);
      });
    }
  }

  deleteACategory(category) {
    this.deleteCategoryModal = true;
    this.deleteThisCategory = category;
  }

  deleteCategory() {
    this.categoriesService.deleteACategoryById(this.deleteThisCategory.id).subscribe(() => {
      this.deleteCategoryModal = false;
      this.categories = this.categories.filter(e => {
        return e.id !== this.deleteThisCategory.id;
      });
    }, err => {
      this.error = err.message;
    });
  }
}
