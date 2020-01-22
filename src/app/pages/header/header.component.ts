/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-26 10:25:05
 * @LastEditTime: 2019-10-30 14:22:46
 * @LastEditors: Please set LastEditors
 */
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authenticationService.currentUserValue().subscribe(user => {
      this.username = user.username;
    });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['./login']);
  }
}
