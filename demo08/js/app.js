(function() {
    'use strict';

    angular
        .module('Demo', []);

    angular
        .module('Demo')
        .controller('MainCtrl', MainCtrl)
        .directive('gaGreeting', gaGreeting)
        .directive('gaButton', gaButton)
        .directive('gaAnotherButton', gaAnotherButton);

    function MainCtrl() {
        var vm = this;

        vm.person = {
            name: 'Dan'
        };

        vm.clickAction = function(foo) {
            alert(foo);
        };
    }

    function gaGreeting() {
        return {
            restrict: 'EA',

            templateUrl: 'templates/greeting.html',

            scope: {
                greeting: '@', // one way property, outside in
                person: '=' // two way binding for property
            }
        };
    }

    function gaButton() {
        return {
            restrict: 'EA',

            templateUrl: 'templates/button.html',

            scope: {
                value: '@', // one way property, outside in
            },

            link: function(scope, element, attr) {
                element.on('click', function(event) {
                    event.preventDefault();

                    alert('clicked');
                });
            }
        };
    }

    function gaAnotherButton() {
        return {
            restrict: 'EA',

            templateUrl: 'templates/anotherButton.html',

            scope: {
                value: '@', // one way property, outside in
                clickAction: '&' // one way behavior, inside out, uses parent scope to execute
            }
        };
    }

})();