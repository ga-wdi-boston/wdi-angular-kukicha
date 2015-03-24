(function() {
    'use strict';

    angular
        .module('Demo', []);

    angular
        .module('Demo')
        .directive('gaLorem', gaLorem);

    function gaLorem() {
        return {
            restrict: 'EA',

            templateUrl: 'templates/lorem.html'
        };
    }

})();