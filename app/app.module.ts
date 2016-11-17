// APPLICATION ENTRY POINT
// Since the QuickStart application is a web application that runs in a browser, your root module needs to import the BrowserModule from @angular/platform-browser to the imports array.

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  // browser support

import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
