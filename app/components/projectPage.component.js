(function() {
    'use strict';
    angular
        .module('portfolioApp')
        .component('projectPage', {
            bindings: {
                project: '<'
            },
            templateUrl: 'app/views/projectPage.template.html'
        });
})();
