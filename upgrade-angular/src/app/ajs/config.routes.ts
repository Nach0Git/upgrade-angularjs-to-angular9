routeProviderConfig.$inject = ['$routeProvider'];
function routeProviderConfig($routeProvider){
    $routeProvider.when('/', {
        template: '<home></home>'
    }).when('/orders', {
        template: '<orders></orders>'
    }).when('/products', {
        template: '<products></products>'
    }).when('/newcomponent', {
      template: '<newcomponent></newcomponent>'
    })
}

export default routeProviderConfig;
