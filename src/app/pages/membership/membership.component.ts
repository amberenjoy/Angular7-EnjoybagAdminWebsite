/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-05 10:49:42
 * @LastEditTime: 2019-10-04 12:59:30
 * @LastEditors: Please set LastEditors
 */
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MembershipService } from './../../_services/membership.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../../shared/models/user';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {
  displayedColumns: string[] = [
    'username',
    'email',
    'areaCode',
    'phone',
    'level',
    'orders',
    'createAt'
  ];
  dataSource: User[] = [];
  defaultSource: User[] = [];
  uploadModal: boolean;
  loadingData: boolean;
  membersTotalCount = 0;
  condition: string;
  page = 1;

  @ViewChild('jsonArea', { static: false }) jsonArea: ElementRef;

  constructor(
    private membershipService: MembershipService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.membershipService.getUsersQTY().subscribe(res => {
      this.membersTotalCount = res.totalCount;
    });
    this.membershipService.getUsersList(1, 50, 'createAt').subscribe(res => {
      this.defaultSource = [...res];
      this.dataSource = [...res];
    });
  }

  loadUsersByPage(page) {
    this.membershipService.getUsersList(page, 50, 'createAt').subscribe(res => {
      this.dataSource = [...res];
    });
  }

  openUserInfo(userId) {
    this.router.navigate(['./', userId], { relativeTo: this.route });
  }

  onKeyPress(event) {
    if (event.charCode === 13) {
      const queryString = event.target.value.toLowerCase();
      if (queryString !== '') {
        this.membershipService.searchUsers(queryString).subscribe(res => {
          this.dataSource = [...res];
        });
      } else {
        this.dataSource = this.defaultSource;
      }
    }
  }
  onKeyPressPage(event) {
    if (event.charCode === 13) {
      const queryPage = event.target.value.toLowerCase();
      if (
        queryPage !== '' &&
        queryPage <=
          this.membersTotalCount / 50 - (this.membersTotalCount % 50) / 50 + 1
      ) {
        this.page = queryPage;
        this.loadUsersByPage(queryPage);
      } else {
        this.dataSource = this.defaultSource;
      }
    }
  }
  filterByOrdersQty(con) {
    this.condition = con;
    this.membershipService.getUsersList(1, 50, con).subscribe(res => {
      this.dataSource = [...res];
    });
  }

  uploadData(data) {
    this.loadingData = true;
    this.membershipService.uploadData(data).subscribe(res => {
      console.log(res);
      if (res.message) {
        this.loadingData = false;
        this.uploadModal = false;
      }
    });
  }
}
