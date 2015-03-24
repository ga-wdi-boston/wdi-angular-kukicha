(function() {
    'use strict';

    angular
        .module('Demo', []);

    angular
        .module('Demo')
        .controller('MainCtrl', MainCtrl)
        .directive('gaLorem', gaLorem)
        .directive('gaButton', gaButton)
        .directive('gaAnotherButton', gaAnotherButton);

    function MainCtrl() {
        var vm = this;

        vm.person = {
            name: 'Dan'
        };

        vm.clickAction = function(value) {
            alert(value);
        };
    }

    function gaLorem() {
        return {
            restrict: 'EA',

            templateUrl: 'templates/lorem.html',

            scope: {
                greeting: '@', // one way, outside in
                person: '='
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