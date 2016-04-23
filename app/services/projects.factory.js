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
        return $http.get('/api/projects');
    }

    function get(id) {
        return $http.get('/api/projects/' + id);
    }
}
