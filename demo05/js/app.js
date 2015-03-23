(function() {
    'use strict';

    angular
        .module('Demo', []);

    angular
        .module('Demo')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$http'];
    
    function MainCtrl($http) {
        var vm = this;

        $http.get('http://localhost:3000/tasks').success(function(response) {
            vm.tasks = response;
        });
    }

})();