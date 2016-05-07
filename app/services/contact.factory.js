angular
	.module('portfolioApp')
	.service('contactFactory', contactFactory);

contactFactory.$inject = ['$http'];

function contactFactory($http) {
	return {
		send: send
	};

	function send(data) {
		return $http.post('/some-url', data);
	}
}
