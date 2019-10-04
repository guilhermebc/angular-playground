import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ChartsModule } from './charts/charts.module';

import { PoChartsModule } from './po-charts/po-charts.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    PoChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
