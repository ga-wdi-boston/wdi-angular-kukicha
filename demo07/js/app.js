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

        $http.get('http://localhost:3000/tasks').success(function(response) {
            vm.tasks = response;
        });

        vm.upsertTask = function(task) {
            var params = {
                task: task
            };
            
            if (task.id) {
                $http.put('http://localhost:3000/tasks/' + task.id, params);
            } else {
                $http.post('http://localhost:3000/tasks', params).success(function(response) {
                    vm.tasks.push(response);
                });
            }

            vm.task = {};
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
    }

})();