(function() {
    'use strict';

    angular
        .module('TaskManager')
        .directive('gaTaskList', gaTaskList);

    gaTaskListCtrl.$inject = ['TaskFactory'];

    function gaTaskListCtrl(TaskFactory) {
        var vm = this;

        vm.editTask = function(task) {
            TaskFactory.setTask(task);
        };

        vm.deleteTask = function(task) {
            TaskFactory.deleteTask(task);
        };
    }

    function gaTaskList() {
        return {
            restrict: 'E',
            templateUrl: 'templates/gaTaskList.html',
            scope: {
                tasks: '='
            },
            controller: gaTaskListCtrl,
            controllerAs: 'gaTaskListCtrl',
            bindToController: true
        };
    }

})();