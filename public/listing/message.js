import angular from 'angular';

class MyController {
  constructor () {
    this.pageName = "An Angular Seed Project :D";
    this.messages = [];
  }

  populate() {
    this.messages.push({ id : 1, text : 'The first message'});
    this.messages.push({ id : 2, text : 'The second message'});
    this.messages.push({ id : 3, text : 'The third message'});
    this.messages.push({ id : 4, text : 'The fourth message'});
  }
}

export default angular
  .module('app.func1', [])
    .controller('MyController', MyController);
