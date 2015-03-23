(function() {
    'use strict';

    // initialize the app
    angular
        .module('Demo', []);

    // main controller
    angular
        .module('Demo')
        .controller('MainCtrl', MainCtrl);

    function MainCtrl() {
        var vm = this;

        // basic controller properties
        vm.greeting = 'Hello';

        vm.person = {
            firstName: 'Dan',
            lastName: 'Johnson'
        };

        vm.fruits = ['apple', 'cherry', 'strawberry'];
    }

})();