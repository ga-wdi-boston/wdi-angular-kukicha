(function() {
    'use strict';

    angular
        .module('TaskManager')
        .factory('TaskFactory', TaskFactory);

    TaskFactory.$inject = ['$http'];

    function TaskFactory($http) {
        var tasks = [];

        function getTasks() {
            $http.get('http://localhost:3000/tasks').success(function(response) {
                angular.copy(response, tasks);
            });
        }

        function upsertTask(task) {
            var params = {
                task: task
            };
            
            if (task.id) {
                return $http.put('http://localhost:3000/tasks/' + task.id, params);
            } else {
                return $http.post('http://localhost:3000/tasks', params)
                    .then(function(response) {
                        tasks.push(response.data);
                    });
            }
        }

        function deleteTask(task) {
            $http.delete('http://localhost:3000/tasks/' + task.id).success(function(response) {
                // remove from tasks array by id
                for (var i = 0; i < tasks.length; i++){
                    if (tasks[i].id === task.id) {
                        tasks.splice(i, 1);

                        break;
                    }
                }
            });
        }

        return {
            tasks: tasks,
            getTasks: getTasks,
            upsertTask: upsertTask,
            deleteTask: deleteTask
        };
    }

})();