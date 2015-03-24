(function() {
    'use strict';

    angular
        .module('TaskManager')
        .controller('TaskFormCtrl', TaskFormCtrl);

    TaskFormCtrl.$inject = ['TaskFactory'];
    
    function TaskFormCtrl(TaskFactory) {
        var vm = this;

        vm.tasks = TaskFactory.tasks;
        vm.task = TaskFactory.task;

        vm.upsertTask = function(task) {
            TaskFactory.upsertTask(task).then(function() {
                resetForm();
            }, function(response) {
                vm.serverErrors = true;
                vm.serverErrorMsg = handleErrors(response.data);
            });
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