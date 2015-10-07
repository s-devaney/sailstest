define([
	"underscore",
	"backbone",
	"view/login/form"
], function(_, Backbone, AppRouter, LoginFormView) {
	var LoginController = function() {
		this.initialize = function() {
			console.log("initializing login controller");
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
		//destroys controller, associated views and unbinds events
		remove: function() {
			this.view.remove();
			this.stopListening();
		}
	});

	return LoginController;
});