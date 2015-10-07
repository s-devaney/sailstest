define([
	"jquery",
	"underscore",
	"backbone",
	"router",
	"controller/user",
	"controller/login"
], function($, _, Backbone, Router, UserController, LoginController) {
	var initialize = function() {
		console.log("app init");
		UserController.setInitialLoggedInState();
	};

	return {
		initialize: initialize
	};
});