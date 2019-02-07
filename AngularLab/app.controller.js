"use strict";
function ToDoController(){
    const vm = this;
    vm.tasks = [
        { task: "Walk the dog", completed: false},
        { task: "Take out garbage", completed: true},
        { task: "Wash the windows", completed: false},
        { task: "Clean the fridge", completed: true}
    ]

    vm.add = function(){

    }
    vm.remove = function(){

    }
    vm.completed = function(){
        
    }
};

angular
.module("todoApp")
.controller("ToDoController", ToDoController);
