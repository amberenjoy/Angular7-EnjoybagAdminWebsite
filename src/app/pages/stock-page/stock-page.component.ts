import { StockService } from './../../_services/stock.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-page',
  templateUrl: './stock-page.component.html',
  styleUrls: ['./stock-page.component.scss']
})
export class StockPageComponent implements OnInit {

  data = [
    { name: 'women', array: [], loaded: false },
    { name: 'slg', array: [], loaded: false },
    { name: 'men', array: [], loaded: false },
    { name: 'new', array: [], loaded: null },
    { name: 'discount', array: [], loaded: null },
    { name: 'EJ', array: [], loaded: null },
    { name: 'ZHU', array: [], loaded: null }
  ];

  constructor(
    private stockService: StockService
  ) { }

  ngOnInit() {
    this.stockService.getWomenList().subscribe(res => {
      if (!res.count) {
        this.getBaglist('women');
      } else {
        this.data.forEach(each => {
          if (each.name === 'women') {
            each.array = res;
            each.loaded = true;
          }
        });
      }
    });
    this.stockService.getSLGList().subscribe(res => {
      if (!res.count) {
        this.getBaglist('slg');
      } else {
        this.data.forEach(each => {
          if (each.name === 'slg') {
            each.array = res;
            each.loaded = true;
          }
        });
      }
    });
    this.stockService.getMenList().subscribe(res => {
      if (!res.count) {
        this.getBaglist('men');
      } else {
        this.data.forEach(each => {
          if (each.name === 'men') {
            each.array = res;
            each.loaded = true;
          }
        });
      }
    });
  }

  getBaglist(key) {
    this.stockService.getBaglist(key).subscribe(res => {
      this.data.forEach(each => {
        if (each.name === key) {
          each.array = res;
          each.loaded = true;
        }
      });
    });
  }
  openCategory(key) {
    this.data.forEach(ele => {
      if (ele.name === key) {
        ele.loaded = false;
        this.getBaglist(key);
      }
    });
  }
  calculateQty(a) {
    let stock = 0;
    this.data[a].array['collection'.toString()].forEach(element => {
      stock = stock + this.calculateCollectionQty(element.product);
    });
    return stock;
  }
  calculateCollectionQty(product) {
    let productArray = [];
    if (!product.length) {

      productArray.push(product);
    } else {
      productArray = product;
    }
    let stock = 0;
    productArray.forEach(each => {
      stock = stock + Number(each.stock);
    });
    return stock;
  }

}
