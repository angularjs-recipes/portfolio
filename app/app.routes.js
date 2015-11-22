(function() {
	'use strict';
	angular
		.module('portfolioApp')
		.config(function($routeProvider) {
			$routeProvider
				.when('/', {
					controller: 'HomeController',
					controllerAs: 'homeCtl',
					templateUrl: 'app/views/home.html'
				})
				.when('/about', {
					controller: 'AboutController',
					controllerAs: 'aboutCtl',
					templateUrl: 'app/views/about.html'
				})
				.when('/projects', {
					controller: 'ProjectsController',
					controllerAs: 'projectsCtl',
					templateUrl: 'app/views/projects.html'
				})
				.when('/projects/:id/:slug', {
					controller: 'ProjectController',
					controllerAs: 'projectCtl',
					templateUrl: 'app/views/project.html'
				})
				.when('/contact', {
					controller: 'ContactController',
					controllerAs: 'contactCtl',
					templateUrl: 'app/views/contact.html'
				})
				.when('/error', {
					controller: 'ErrorController',
					controllerAs: 'errorCtl',
					templateUrl: 'app/views/error.html'
				})
				.otherwise({
					redirectTo: '/error'
				});
		});
})();
