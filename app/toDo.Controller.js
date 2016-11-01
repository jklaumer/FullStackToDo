(function() {
    'use strict';

    angular
        .module('app')
        .controller('ToDoController', ToDoController);

    ToDoController.$inject = ['$http', 'ToDoFactory','toastr'];

    /* @ngInject */
    function ToDoController($http, ToDoFactory, toastr) {
        var vm = this;
        vm.title = 'ToDoController';
        
        activate();

        ////////////////

        function activate() {

            ToDoFactory.getToDo().then(
                function(response){

                    vm.getToDo = response.data;
                    toastr.success('We have great success!!');

                },    
                function(error){
                    toastr.error('There was a problem: ' + error.data);
                }
            )
        }
    }
})(); 
    
