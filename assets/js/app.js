define([
	"jquery",
	"underscore",
	"backbone",
	"controller/user"
	"router"
], function($, _, Backbone, UserController, Router) {
	var App = function() {
		var initialize = function() {
			//initialize user controller
			UserController.initialize();
		};
	}

	var app = new App();

	return app;
});