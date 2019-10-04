import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutComponent } from './donut/donut.component';
import { PoModule } from '@portinari/portinari-ui';

@NgModule({
  declarations: [DonutComponent],
  imports: [
    CommonModule,
    PoModule
  ],
  exports: [
    DonutComponent
  ]
})
export class PoChartsModule { }
