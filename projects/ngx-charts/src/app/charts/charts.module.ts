import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [PieChartComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgxChartsModule,
  ],
  exports: [
    PieChartComponent
  ]
})
export class ChartsModule { }
