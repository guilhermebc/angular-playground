import { Component, OnInit } from '@angular/core';
import { PoChartType } from '@portinari/portinari-ui';

@Component({
  selector: 'ngx-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutComponent implements OnInit {

  poChartType = PoChartType.Donut;

  constructor() { }

  ngOnInit() {
  }

}
