import angular from 'angular';
import adminComponent  from './admin.component';

let adminModule = angular.module('admin', [])

.component('admin', adminComponent);

export default adminModule;
