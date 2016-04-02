angular
    .module('portfolioApp')
    .directive('activeMenu', activeMenuDirective);

activeMenuDirective.$inject = ['$location'];

function activeMenuDirective($location) {
    return {
        link: function(scope, element, attrs) {
            scope.$on('$routeChangeStart', function() {
                var activeClass = attrs.activeMenu,
                    links = element.find('li'),
                    path = $location.path();

                for (var i = 0, len = links.length; i < len; i++) {
                    var listItem = angular.element(links[i]),
                        listItemLink = listItem.find('a').attr('href').replace(/#/g, '');

                    listItem.removeClass(activeClass);

                    if (listItemLink == path) {
                        listItem.addClass(activeClass);
                    }
                }
            });
        }
    };
}
