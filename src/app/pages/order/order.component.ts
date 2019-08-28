/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-05 10:53:20
 * @LastEditTime: 2019-08-26 15:59:15
 * @LastEditors: Please set LastEditors
 */
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../_services/order.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  displayedColumns: string[] = ['id', 'status', 'customer', 'payment', 'total', 'delivery', 'deliveryStatus', 'createAt'];
  dataSource = [];
  sortedData = [];

  constructor(
    private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.orderService.getAllOrders().subscribe(res => {
      this.dataSource = [...res].sort((a, b) => (new Date(b.createAt) as any) - (new Date(a.createAt) as any));
      this.sortedData = this.dataSource;

    });
  }

  onKeyPress(event) {
    if (event.charCode === 13) {
      this.sortedData = this.dataSource.filter(o =>
        Object.keys(o).some(k => {
          return o[k].toString().toLowerCase().includes(event.target.value.toLowerCase());
        })
      );
    } else {
      this.sortedData = this.dataSource;
    }
  }

  filterByUser(attributes) {
    this.dataSource.forEach((each, index) => {
      console.log(index, each.total);
    });
    const sortData = this.dataSource.sort((a, b) => {
      if (a[attributes] < b[attributes]) { return 1; }
      if (a[attributes] > b[attributes]) { return -1; }
      return 0;
    });
    sortData.forEach((each, index) => {
      console.log(index, each.total);
    });
    this.sortedData = sortData.filter(o => {
      return o;
    });
  }

  openOrderInfo(orderId) {
    this.router.navigate(['./', orderId], { relativeTo: this.route });
  }

}
