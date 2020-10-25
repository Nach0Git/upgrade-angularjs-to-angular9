'use strict'
const homeComponent = {
    template:`
      <div class="row">
          <h1>Demo upgrade</h1>
      </div>`,
    bindings: {},
    controller: homeComponentController
};

function homeComponentController(){
    var vm = this;
    vm.title = 'Demo for TFP';
}

export default homeComponent;
