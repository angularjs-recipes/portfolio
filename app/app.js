var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

portfolioApp
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController as homeCtl',
                templateUrl: 'app/views/home.html'
            })
            .when('/about', {
                controller: 'AboutController as aboutCtl',
                templateUrl: 'app/views/about.html'
            })
            .when('/projects', {
                controller: 'ProjectsController as projectsCtl',
                templateUrl: 'app/views/projects.html'
            })
            .when('/projects/:id/:slug', {
                controller: 'ProjectController as projectCtl',
                templateUrl: 'app/views/project.html'
            })
            .when('/contact', {
                controller: 'ContactController as contactCtl',
                templateUrl: 'app/views/contact.html'
            })
            .when('/error', {
                controller: 'ErrorController as errorCtl',
                templateUrl: 'app/views/error.html'
            })
            .otherwise({
                redirectTo: '/error'
            });
    });
