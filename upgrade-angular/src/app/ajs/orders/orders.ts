const ordersComponent = {
  template: `
     <div class="row">
        <h1>{{$ctrl.title}}</h1>
      </div>
`,
  bindings: {},
  controller: ordersComponentController
};

ordersComponentController.$inject = [];

function ordersComponentController() {
  var vm = this;
  vm.title = 'template view 1';

  vm.$onInit = function () {
    console.log('AngularJs code')
  };
}

export default ordersComponent;
