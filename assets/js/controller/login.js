define([
	"underscore",
	"backbone",
	"router",
	"view/login/form"
], function(_, Backbone, AppRouter, LoginFormView) {
	var LoginController = function() {
		this.initialize = function() {
			console.log("initializing login controller");
			console.log(AppRouter);
			this.listenTo(AppRouter, "router.route_changed", this.onRouteChanged)
		};

		this.onRouteChanged = function(route) {
			console.log("login controller: route change detected");
			console.log(route);
			if(route === "login") {
				this.view = new LoginFormView();
				this.listenTo(this.view, "view.login.form.submitted", this.viewHandler.submitted);
			} else {
				this.view.remove();
			}
		};

		this.viewHandler = {
			submitted: function() {
				//submit form logic

				//trigger form submitted event including results
				this.trigger("controller.login.submitted", result);
			}
		}
	};

	_.extend(LoginController.prototype, Backbone.Events, {
		remove: function() {
			this.stopListening();
		}
	});

	var login_controller = new LoginController();
	login_controller.initialize();

	return login_controller;

});