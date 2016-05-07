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
        return $http.get('https://angularjs-recipes.com/demo/projects');
    }

    function get(id) {
        return $http.get('https://angularjs-recipes.com/demo/projects/' + id);
    }
}
