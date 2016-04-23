(function() {
    'use strict';
    angular
        .module('portfolioApp')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                resolve: {
                    projects: projectsPrepFactory
                },
                template: '<home-page projects=$resolve.projects></home-page>'
            })
            .when('/about', {
                template: '<about-page></about-page>'
            })
            .when('/projects/:id/:slug', {
                resolve: {
                    project: projectPrepFactory
                },
                template: '<project-page project=$resolve.project></project-page>'
            })
            .when('/contact', {
                template: '<contact-page></contact-page>'
            })
            .when('/error', {
                template: '<error-page></error-page>'
            })
            .otherwise({
                redirectTo: '/error'
            });
    }

    projectsPrepFactory.$inject = ['projectsFactory'];

    function projectsPrepFactory(projectsFactory) {
        return projectsFactory
            .all()
            .then(function(response) {
                return response.data;
            });
    }

    projectPrepFactory.$inject = ['projectsFactory', '$route'];

    function projectPrepFactory(projectsFactory, $route) {
        return projectsFactory
            .get($route.current.params.id)
            .then(function(response) {
                return response.data;
            });
    }
})();
