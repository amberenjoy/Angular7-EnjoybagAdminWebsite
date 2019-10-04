/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-26 10:25:05
 * @LastEditTime: 2019-09-19 12:09:31
 * @LastEditors: Please set LastEditors
 */
import { Component, OnInit } from '@angular/core';
import { SampleOrderService } from './../../_services/sample-order.service';

@Component({
  selector: 'app-design-development',
  templateUrl: './design-development.component.html',
  styleUrls: ['./design-development.component.scss']
})
export class DesignDevelopmentComponent implements OnInit {

  sampleArray = [];
  dataSource = [];
  resData: any;

  constructor(private sampleOrderService: SampleOrderService) { }

  ngOnInit() {
    this.sampleOrderService.getSampleOrder().subscribe(res => {
      if (!res['viewentry'.toString()]) {
        this.sampleOrderService.getSampleFromApi().subscribe(resApi => {
          this.resData = resApi;
          this.initializeData();
        });
      } else {
        this.resData = res;
        this.initializeData();
      }
    });
  }

  initializeData() {
    this.resData['viewentry'.toString()].forEach(element => {
      const sample = {
        label: null,
        issueDate: null,
        dueDate: null,
        staff: null,
        order: null,
        sampleQty: null,
        styleQty: null,
        status: null,
        class: null,
        cost: null,
        styles: null,
        materials: null
      };
      sample.issueDate = element.entrydata[0].text[0];
      if (element.entrydata[1].datetime) {
        sample.dueDate = element.entrydata[1].datetime[0].slice(0, 8);
      } else {
        sample.dueDate = '';
      }
      sample.order = element.entrydata[2].text[0];
      sample.label = element.entrydata[3].text[0];
      sample.staff = element.entrydata[4].text[0];
      sample.class = element.entrydata[5].text[0];
      sample.styleQty = element.entrydata[6].text[0];
      sample.sampleQty = element.entrydata[7].text[0];
      sample.cost = element.entrydata[8].text[0];
      sample.status = element.entrydata[9].text[0];
      sample.materials = element.entrydata[10].text[0].split('/d');
      sample.styles = element.entrydata[11].text[0].split('/n');
      this.dataSource.push(sample);
    });
    const sortData = this.dataSource.sort((a, b) => {
      if (a.dueDate < b.dueDate) { return 1; }
      if (a.dueDate > b.dueDate) { return -1; }
      return 0;
    });
    this.sampleArray = sortData.filter(o => {
      return o;
    });
  }
}
