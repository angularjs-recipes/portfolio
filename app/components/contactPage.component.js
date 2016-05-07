(function() {
    'use strict';
    angular
        .module('portfolioApp')
        .component('contactPage', {
            templateUrl: 'app/views/contactPage.template.html',
            controller: contactPageController
        });

	contactPageController.$inject = ['contactFactory'];

    function contactPageController(contactFactory) {
        var self = this;
		self.user = {
			name: '',
			email: '',
			message: ''
		};
        self.isSubmitted = false;
        self.submit = function(isValid) {
            if (isValid) {
				self.isSubmitted = true;
				console.log('valid data');
				contactFactory
					.send(self.user)
					.then(function() {

					}, function() {

					});
            } else {
				console.log('invalid data');
            }
        };
    }
})();
