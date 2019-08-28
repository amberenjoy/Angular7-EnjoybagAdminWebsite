/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-26 10:25:05
 * @LastEditTime: 2019-08-21 12:44:23
 * @LastEditors: Please set LastEditors
 */
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StockService } from './../../_services/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  product = {
    productcode: '',
    StockQty: '',
    HKStockQty: '',
    HKLOCATION: '',
    FtyStockQty: ''
  };

  @ViewChild('skuInput', { static: false }) skuInput: ElementRef;

  constructor(
    private stockService: StockService
  ) { }

  ngOnInit() { }

  checkStock() {
    const sku = this.skuInput.nativeElement.value;
    this.stockService.getSKUStock(sku).subscribe(res => {
      console.log(res);
      this.product = res;
    });
  }
}
