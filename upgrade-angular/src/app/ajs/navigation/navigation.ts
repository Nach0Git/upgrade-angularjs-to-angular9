const navigationComponent = {
  template: `
            <nav class="navbar navbar-default">
              <div class="container-fluid">
                <div class="navbar-header">
                  <a class="navbar-brand" href="#/">Home</a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav">
                    <li><a href="#/orders">Orders</a></li>
                    <li><a href="#/products">Product</a></li>
                    <!-- <li><a href="#/orders">Orders</a></li>-->
                  </ul>
                </div>
              </div>
            </nav>`,
  bindings: {},
  controller: navigationComponentController
};

function navigationComponentController() {
  var vm = this;
  vm.companyName = 'Lala lolo';
}

export default navigationComponent;
