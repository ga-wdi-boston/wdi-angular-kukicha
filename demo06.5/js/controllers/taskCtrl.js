(function() {
    'use strict';

    angular
        .module('TaskManager')
        .controller('TaskCtrl', TaskCtrl);

    TaskCtrl.$inject = ['$http', 'TaskFactory'];
    
    function TaskCtrl($http, TaskFactory) {
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
            TaskFactory.upsertTask(task).then(function(response) {
                resetTask();
            }, function(response) {
                console.log(handleErrors(response));
            });
        };

        vm.editTask = function(task) {
            vm.task = task;
        };

        vm.deleteTask = function(task) {
            TaskFactory.deleteTask(task);
        };

        resetTask();

        vm.tasks = TaskFactory.tasks;
    }

})();