/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-06 10:26:16
 * @LastEditTime: 2019-08-27 14:41:33
 * @LastEditors: Please set LastEditors
 */
import { Component, OnInit } from '@angular/core';
import { MembershipService } from './../../_services/membership.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-membership-info',
  templateUrl: './membership-info.component.html',
  styleUrls: ['./membership-info.component.scss']
})
export class MembershipInfoComponent implements OnInit {

  user: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private membershipService: MembershipService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.initMembershipInfo(params.id);
    });
  }
  initMembershipInfo(uid) {
    this.membershipService.getUserInfo(uid).subscribe(res => {
      this.user = res;
    });
  }
}
