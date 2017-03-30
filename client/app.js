import angular from 'angular';
import uiRouter           from 'angular-ui-router';
import MenuComponent from './component/menu/menu';
import AdminComponent from './component/admin/admin';


import 'bootstrap/dist/css/bootstrap.css';

const app = angular.module('app',[
  uiRouter,
  MenuComponent.name,
  AdminComponent.name



])

app.config(($stateProvider) => {
  $stateProvider

  .state('menu', {
    url: '/',
    template: '<menu><menu>'
  })
  .state('admin', {
    url:'/admin',
    template:'<admin></admin>'
  })


});