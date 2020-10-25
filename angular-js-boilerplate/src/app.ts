import * as angular from 'angular';
import 'angular-route';

import 'jquery';
import 'lodash';

import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles/app.scss";

import hashPrefixConfig from './config.hashprefix';
import routeProviderConfig from './config.routes';
import homeComponent from './home/home';
import navigationComponent from './navigation/navigation';
import ordersComponent from './orders/orders';
import productsComponent from './products/products';

import ProductService from './products/productService'

angular.module('app', ['ngRoute'])
  .config(hashPrefixConfig)
  .config(routeProviderConfig)
  .component('home', homeComponent)
  .component('navigation', navigationComponent)
  .component('orders', ordersComponent)
  .component('products', productsComponent)
  .service('productService', ProductService);
