angular
    .module('portfolioApp')
    .factory('projectsFactory', projectsFactory);

projectsFactory.$inject = ['$http'];

function projectsFactory($http) {
    return {
        all: all,
        get: get
    };

    function all() {
        return $http.get('http://angularjs-recipes.com/demo/projects');
    }

    function get(id) {
        return $http.get('http://angularjs-recipes.com/demo/projects/' + id);
    }
}
