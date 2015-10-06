define([
	"jquery",
	"underscore",
	"backbone",
	"controller/user"
], function($, _, Backbone, UserController) {
	var initialize = function() {
		console.log(UserController);
		//initialize user controller
		UserController.initialize();
	};

	return {
		initialize: initialize
	};
});