(function() {
    'use strict';

    angular
        .module('TaskManager')
        .controller('TaskCtrl', TaskCtrl);

    TaskCtrl.$inject = ['TaskFactory'];
    
    function TaskCtrl(TaskFactory) {
        var vm = this;

        vm.tasks = TaskFactory.tasks;

        vm.editTask = function(task) {
            vm.task = task;
        };

        vm.upsertTask = function(task) {
            TaskFactory.upsertTask(task).then(function() {
                resetForm();
            }, function(response) {
                vm.serverErrors = true;
                vm.serverErrorMsg = handleErrors(response.data);
            });
        };

        vm.deleteTask = function(task) {
            TaskFactory.deleteTask(task);
        };

        function handleErrors(errObj) {
            var errString = '';

            angular.forEach(errObj, function(value, key) {
                errString += key + ': ' + value;
            });

            return errString;
        }

        function resetForm() {
            vm.task = {
                name: ''
            };

            vm.serverErrors = false;
        }

        resetForm();
    }

})();