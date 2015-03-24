(function() {
    'use strict';

    angular
        .module('TaskManager', [])
        .run(function(TaskFactory) {
            TaskFactory.getTasks();
        });

})();