const template = require('./products.html');

const productsComponent = {
    template: template,
    bindings: {},
    controller: productsComponentController
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
