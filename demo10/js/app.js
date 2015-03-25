(function() {
    'use strict';

    angular.module('Demo', ['ngRoute']);

    angular
        .module('Demo')
        .config(demoConfig)
        .controller('NavbarCtrl', NavbarCtrl)
        .controller('FooterCtrl', FooterCtrl);

    function demoConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html'
            })
            .when('/about', {
                templateUrl: 'templates/about.html'
            })
            .when('/contact', {
                templateUrl: 'templates/contact.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

    NavbarCtrl.$inject = ['$location'];

    function NavbarCtrl($location) {
        var vm = this;

        vm.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };
    }

    FooterCtrl.$inject = ['$location'];

    function FooterCtrl($location) {
        var vm = this;

        vm.isContactPage = function() {
            return '/contact' === $location.path();
        };
    }

})();