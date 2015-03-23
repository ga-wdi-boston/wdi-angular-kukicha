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

        $http.get('http://localhost:3000/users').success(function(response) {
            vm.users = response;
        });

        vm.upsertUser = function(user) {
            var params = {
                user: user
            };
            
            if (user.id) {
                $http.put('http://localhost:3000/users/' + user.id, params);
            } else {
                $http.post('http://localhost:3000/users', params).success(function(response) {
                    vm.users.push(response);
                });
            }

            vm.user = {};
        };

        vm.editUser = function(user) {
            vm.user = user;
        };

        vm.deleteUser = function(user) {
            $http.delete('http://localhost:3000/users/' + user.id).success(function(response) {
                // remove from users array by id
                for (var i = 0; i < vm.users.length; i++){
                    if (vm.users[i].id === user.id) {
                        vm.users.splice(i, 1);

                        break;
                    }
                }
            });
        };
    }

})();