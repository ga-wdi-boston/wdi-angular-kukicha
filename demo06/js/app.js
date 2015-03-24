(function() {
    'use strict';

    angular
        .module('TaskManager', []);

    angular
        .module('TaskManager')
        .controller('TaskCtrl', TaskCtrl);

    TaskCtrl.$inject = ['$http'];
    
    function TaskCtrl($http) {
        var vm = this;

        function handleErrors(errObj) {
            var errString = '';

            angular.forEach(errObj, function(value, key) {
                errString += key + ': ' + value;
            });

            return errString;
        }

        function resetTask() {
            vm.task = {
                name: ''
            };
        }

        vm.upsertTask = function(task) {
            var params = {
                task: task
            };
            
            if (task.id) {
                $http.put('http://localhost:3000/tasks/' + task.id, params)
                    .error(function(response) {
                        console.log(handleErrors(response));
                    });
            } else {
                $http.post('http://localhost:3000/tasks', params)
                    .success(function(response) {
                        vm.tasks.push(response);
                    }).error(function(response) {
                        console.log(handleErrors(response));
                    });
            }

            resetTask();
        };

        vm.editTask = function(task) {
            vm.task = task;
        };

        vm.deleteTask = function(task) {
            $http.delete('http://localhost:3000/tasks/' + task.id).success(function(response) {
                // remove from tasks array by id
                for (var i = 0; i < vm.tasks.length; i++){
                    if (vm.tasks[i].id === task.id) {
                        vm.tasks.splice(i, 1);

                        break;
                    }
                }
            });
        };

        resetTask();

        $http.get('http://localhost:3000/tasks').success(function(response) {
            vm.tasks = response;
        });
    }

})();