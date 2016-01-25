var todoApp = angular.module('todoApp', []);

todoApp.controller('todoController', ['$scope', function($scope) {
  $scope.todoList = [];

  $scope.todoAdd = function() {
  	var newTodo = {
    	text: $scope.todoInput,
      date: $scope.dateInput,
      done: false
    };

  	$scope.todoList.push(newTodo);
    $scope.todoInput = "";
  };

  $scope.todoRemove = function() {
    var oldtodoList = $scope.todoList;
    $scope.todoList = [];
    angular.forEach(oldtodoList, function(elements) {
      if (!elements.done) $scope.todoList.push(elements);
    });
  };
}]);
