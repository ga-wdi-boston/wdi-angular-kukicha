(function() {
    'use strict';

    angular
        .module('TaskManager', [])
        .run(function(TaskFactory) {
            TaskFactory.getTasks();
        });

    angular.module('TaskManager')
        .constant('ServerUrl', 'http://localhost:3000');

})();