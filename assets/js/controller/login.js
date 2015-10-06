define([
	"underscore",
	"backbone",
	"router",
	"view/login/form"
], function(_, Backbone, AppRouter, LoginFormView) {
	var LoginController = function() {
		var initialize = function() {
			this.listenTo(AppRouter, "router.route_changed", this.onRouteChanged)
		};

		var onRouteChanged = function(route) {
			if(route === "login") {
				this.view = new LoginFormView();
				this.listenTo(this.view, "view.login.form.submitted", this.viewHandler.submitted);
			} else {
				this.view.remove();
			}
		};

		viewHandler = {
			submitted: function() {
				//submit form logic

				//trigger form submitted event including results
				this.trigger("controller.login.submitted", result);
			}
		}
	};

	var login_controller = new LoginController();

	return login_controller;
});