angular
    .module('portfolioApp')
    .factory('projectsFactory', projectsFactory);

projectsFactory.$inject = [];

function projectsFactory() {
    return {
        all: all
    };

    function all() {
        return [{
            id: 1,
            title: 'a',
            body: 'a'
        }, {
            id: 2,
            title: 'b',
            body: 'b'
        }, {
            id: 3,
            title: 'c',
            body: 'c'
        }];
    }
}
