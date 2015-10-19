import angular from 'angular';
import Func1 from 'listing/message';
import Config from 'config/config';

let app = angular.module('app', [
  Func1.name,
  Config.name
]);

angular.element(document).ready(() =>  angular.bootstrap(document.body, [ app.name ], { strictDi: true }));
