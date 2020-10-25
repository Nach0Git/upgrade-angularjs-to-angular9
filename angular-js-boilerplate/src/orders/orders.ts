
const template = require('./orders.html');

const ordersComponent = {
    template: template,
    bindings: {},
    controller: ordersComponentController
};

ordersComponentController.$inject = ['$q'];
function ordersComponentController($q) {
    var vm = this;
    vm.title = 'template view 1';

    vm.$onInit = function() {

    };
}

export default ordersComponent;
