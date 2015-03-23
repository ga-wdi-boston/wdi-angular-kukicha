(function() {
    'use strict';

    angular
        .module('Demo', []);

    angular
        .module('Demo')
        .controller('MainCtrl', MainCtrl)
        .filter('capitalize', capitalize);

    function MainCtrl() {
        var vm = this;

        vm.users = [{
            firstName: 'dan',
            lastName: 'johnson'
        }, {
            firstName: 'ella',
            lastName: 'johnson'
        }, {
            firstName: 'ava',
            lastName: 'johnson'
        }];

        vm.lowercase = 'this is all lowercase to start';
    }

    function capitalize() {
        return function(param) {
            if (param) {
                return param.split(' ').map(function(word) {
                    return word[0].toUpperCase() + word.slice(1);
                }).join(' ');
            }
        };
    }

})();