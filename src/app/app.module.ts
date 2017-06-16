import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Master } from './master.component'; 
import { Detail } from './detail.component'; 

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, Master, Detail],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
