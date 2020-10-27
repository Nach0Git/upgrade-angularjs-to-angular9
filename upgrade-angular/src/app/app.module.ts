import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {UpgradeModule} from "@angular/upgrade/static";
import MODULE_NAME from "./ajs/app";

import ProductService from "./ajs/products/productService";

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule
  ],
  providers: [ProductService],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }

  ngDoBootstrap(){
    this.upgrade.bootstrap(document.body, [MODULE_NAME], {strictDi: true});
  }
}
