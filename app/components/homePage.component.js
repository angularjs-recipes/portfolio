(function() {
    'use strict';
    angular
        .module('portfolioApp')
        .component('homePage', {
            bindings: {
                projects: '<'
            },
            templateUrl: 'app/views/homePage.template.html'
        });
})();
