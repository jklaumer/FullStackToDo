(function() {
	'use strict';

	angular
	  .module('app')
	  .factory('ToDoFactory', ToDoFactory);

	ToDoFactory.$inject = ['$http', '$q', 'apiUrl'];

	function ToDoFactory($http, $q, apiUrl) {
		//content
		var service = {
			getToDo: getToDo,
			postToDo: postToDo,
			putToDo: putToDo,
			deleteToDo: deleteToDo
		};
		return service;

		//////////////

		function getToDo() {

			var defer = $q.defer();

			$http({
				method: 'GET',
				url: 'apiUrl'
			}).then(function(response) {
				
				if(typeof response.data === 'object'){
					defer.resolve(response);
				} else {
					defer.reject('unable to perform get method');
				}
			},
			function(error){
				defer.reject(error);
			});

			return defer.promise;
		}

		function postToDo() {
			$http({
				method: 'POST',
				url: 'apiUrl'
				
			}).then(function(response) {
				
				if(typeof response.data === 'object'){
					defer.resolve(response);
				} else {
					defer.reject('unable to perform post method');
				}
			},
			function(error){
				defer.reject(error);
			});

			return defer.promise;
		}

		function putToDo() {
			$http({
				method: 'PUT',
				crossdomain: true,
				url: 'http://http://localhost:50105/api/todoentries' + '/' + id
				
			}).then(function(response) {
				
				if(typeof response.data === 'object'){
					defer.resolve(response);
				} else {
					defer.reject('unable to perform put method');
				}
			},
			function(error){
				defer.reject(error);
			});

			return defer.promise;
		}

		function deleteToDo() {
			$http({
				method: 'DELETE',
				crossdomain: true,
				url: 'http://http://localhost:50105/api/todoentries' + '/' + id
			}).then(function(response) {
				
				if(typeof response.data === 'object'){
					defer.resolve(response);
				} else {
					defer.reject('unable to perfrom delete method');
				}
			},
			function(error){
				defer.reject(error);
			});

			return defer.promise;
		}

	}
})();


