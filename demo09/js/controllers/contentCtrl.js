(function() {
    'use strict';

    angular
        .module('TaskManager')
        .controller('ContentCtrl', ContentCtrl);

    ContentCtrl.$inject = ['TaskFactory'];

    function ContentCtrl(TaskFactory) {
        var vm = this;

        vm.tasks = TaskFactory.tasks;
    }

})();