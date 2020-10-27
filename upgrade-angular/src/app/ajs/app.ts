import * as angular from 'angular';
import 'angular-route';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css'

import hashPrefixConfig from './config.hashprefix';
import routeProviderConfig from './config.routes';
import homeController from './home/home';
import navigationComponent from './navigation/navigation';
import ordersController from './orders/orders';
import productsController from './products/products';
import ProductService from './products/productService'
import {downgradeComponent} from "@angular/upgrade/static";


const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ngRoute'])
  .config(hashPrefixConfig)
  .config(routeProviderConfig)
  .component('navigation', navigationComponent)
  .component('home', homeController)
  .component('orders', ordersController)
  .component('products', productsController)
  .service('productService', ProductService)


export default MODULE_NAME;
