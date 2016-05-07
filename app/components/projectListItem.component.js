(function() {
    'use strict';
    angular
        .module('portfolioApp')
        .component('projectListItem', {
            bindings: {
                project: '<'
            },
            templateUrl: 'app/views/projectListItem.template.html',
            controller: projectListItemController
        });

    function projectListItemController() {
        var self = this;
		self.projectLink = 'https://portfolio-url.com/#/projects/' + self.project.id + '/' + self.project.slug;
        self.shareLink = function(network) {
            if (network == 'facebook') {
				return 'https://www.facebook.com/sharer.php?u=' + encodeURIComponent(self.projectLink);
            }

			if (network == 'twitter') {
				return 'https://twitter.com/share?url=' + encodeURIComponent(self.projectLink);
			}

			if (network == 'linkedin') {
				return 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(self.projectLink);
			}
        }
    }
})();
