import gaTaskList from './components/gaTaskList';

angular
    .module('TaskManager', []);

angular
    .module('TaskManager')
    .directive('gaTaskList', () => new gaTaskList());