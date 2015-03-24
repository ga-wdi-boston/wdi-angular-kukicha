(function() {
    'use strict';

    angular
        .module('TaskManager')
        .controller('TaskListCtrl', TaskListCtrl);

    TaskListCtrl.$inject = ['TaskFactory'];
    
    function TaskListCtrl(TaskFactory) {
        var vm = this;

        vm.tasks = TaskFactory.tasks;

        vm.editTask = function(task) {
            TaskFactory.setTask(task);
        };

        vm.deleteTask = function(task) {
            TaskFactory.deleteTask(task);
        };
    }

})();