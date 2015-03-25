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

        vm.cancel = function() {
            resetForm();
        };

        function handleErrors(errObj) {
            var errString = '';

            angular.forEach(errObj, function(value, key) {
                errString += key + ': ' + value;
            });

            return errString;
        }

        function resetForm() {
            TaskFactory.setTask({name: ''});

            vm.serverErrors = false;
        }
        
        resetForm();
    }

})();