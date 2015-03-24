(function() {
    'use strict';

    angular
        .module('TaskManager')
        .factory('TaskFactory', TaskFactory);

    TaskFactory.$inject = ['$http', 'ServerUrl'];

    function TaskFactory($http, ServerUrl) {
        var tasks = [];

        function getTasks() {
            return $http.get(ServerUrl + '/tasks')
                .then(function(response) {
                    angular.copy(response.data, tasks);
                });
        }

        function upsertTask(task) {
            var params = {
                task: task
            };
            
            if (task.id) {
                return $http.put(ServerUrl + '/tasks/' + task.id, params);
            } else {
                return $http.post(ServerUrl + '/tasks', params)
                    .then(function(response) {
                        tasks.push(response.data);
                    });
            }
        }

        function deleteTask(task) {
            return $http.delete(ServerUrl + '/tasks/' + task.id)
                .then(function(response) {
                    tasks.splice(findTaskIndexById(task.id), 1);
                });
        }

        function findTaskIndexById(id) {
            for (var i = 0; i < tasks.length; i++) {
                if (tasks[i].id === id) {
                    return i;
                }
            }
        }

        return {
            tasks: tasks,
            getTasks: getTasks,
            upsertTask: upsertTask,
            deleteTask: deleteTask
        };
    }

})();