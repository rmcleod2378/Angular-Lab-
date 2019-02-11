"use strict";
// Used in a constructor to build the controller
function ToDoController(){
    // this references the object that the constructor returns
    const vm = this;
    // tasks is a property of the controller
    vm.tasks = [
        { task: "Create Angular ToDoApp", completed: true},
        { task: "Input Angular Tasks", completed: true},
        { task: "Make ToDoApp Functional", completed: false},
        { task: "Turn in Lab", completed: false}
    ]
    // add is a method that pushes a piece of data (the parameter) into the tasks array
    // clears inputs by resetting the object called newTasks
    vm.add = function(newTasks){
        newTasks.completed = false
        vm.newTasks.push(angular.copy(newTasks))
        vm.newTasks = {}
    }
    // removes the tasks from the array
    // takes the index (parameter) and passes it to the splice
    //method to remove an element from tasks
    vm.remove = function(index){
        vm.tasks.splice(index, 1);
    }
    // sets the property completed to true
    vm.completed = function(index){
        vm.tasks[index].completed = true
    }
}
// getter syntax to retrieve the module called todoApp
angular
// links module
.module("todoApp")
//builds controller, the 1st argument is the name of the controller. the 2nd argument is the function reference
.controller("ToDoController", ToDoController);
