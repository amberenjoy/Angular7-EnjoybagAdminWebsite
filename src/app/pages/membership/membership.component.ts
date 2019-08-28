/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-05 10:49:42
 * @LastEditTime: 2019-08-27 16:49:18
 * @LastEditors: Please set LastEditors
 */
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MembershipService } from './../../_services/membership.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})

export class MembershipComponent implements OnInit {

  displayedColumns: string[] = ['username', 'email', 'areaCode', 'phone', 'level', 'orders', 'createdAt'];
  dataSource = [];
  sortedData = [];
  uploadModal: boolean;
  loadingData: boolean;

  @ViewChild('jsonArea', { static: false }) jsonArea: ElementRef;

  constructor(
    private membershipService: MembershipService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.membershipService.getUsersList().subscribe(res => {
      this.dataSource = [...res].sort((a, b) => (new Date(b.createAt) as any) - (new Date(a.createAt) as any));
      this.sortedData = this.dataSource;
    });
  }

  openUserInfo(userId) {
    this.router.navigate(['./', userId], { relativeTo: this.route });
  }

  onKeyPress(event) {
    if (event.charCode === 13) {
      this.sortedData = this.dataSource.filter(o =>
        Object.keys(o).some(k => {
          if (o[k]) {
            return o[k].toString().toLowerCase().includes(event.target.value.toLowerCase());
          } else {
            return;
          }
        })
      );
      console.log(this.sortedData);
    } else {
      this.sortedData = this.dataSource;
    }
  }

  filterByUser(attributes) {
    const sortData = this.dataSource.sort((a, b) => {
      if (a[attributes] < b[attributes]) { return 1; }
      if (a[attributes] > b[attributes]) { return -1; }
      return 0;
    });

    this.sortedData = sortData.filter(o => {
      return o;
    });
  }

  uploadData(data) {
    this.loadingData = true;
    this.membershipService.uploadData(data).subscribe(
      res => {
        console.log(res);
        if (res.message) {
          this.loadingData = false;
          this.uploadModal = false;
        }
      }
    );
  }

}
