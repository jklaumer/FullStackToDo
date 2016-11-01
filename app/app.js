(function() {
	'use strict';

	angular
	  .module('app', ['toastr'])
	  .value ('apiUrl', 'http://localhost:50105/api/todoentries');
})();




