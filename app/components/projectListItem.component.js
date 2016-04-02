(function() {
    'use strict';
    angular
        .module('portfolioApp')
        .component('projectListItem', {
            bindings: {
                project: '<'
            },
            templateUrl: 'app/views/projectListItem.template.html'
        });
})();
