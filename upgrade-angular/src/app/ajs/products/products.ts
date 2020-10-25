
const productsComponent = {
    template:`
    <div class="row">
        <div class="col-md-12">
            <h1>{{$ctrl.title}}</h1>
            <h4> {{$ctrl.serviceOutput}}</h4>
        </div>
    </div>`,
    bindings: {},
    controller: productsComponentController,
    controllerAs: '$ctrl'
};

productsComponentController.$inject = ['productService'];
function productsComponentController(productService){
  var vm = this;
  vm.title = 'Template view 2';
  vm.serviceOutput = '';

  vm.$onInit = function(){
    vm.serviceOutput = productService.getProducts();
  };
}

export default productsComponent;
