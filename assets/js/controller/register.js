define([
	"underscore",
	"backbone",
	"router",
	"view/register/form"
], function(_, Backbone, AppRouter, RegisterFormView) {
	var RegisterController = function() {
		var initialize = function() {
			this.listenTo(AppRouter, "router.route_changed", this.onRouteChanged)
		};

		var onRouteChanged = function(route) {
			if(route === "register") {
				this.view = new RegisterFormView();
				this.listenTo(this.view, "view.register.form.submitted", this.viewHandler.submitted);
			} else {
				this.view.remove();
			}
		};

		viewHandler = {
			submitted: function() {
				//submit form logic

				//trigger form submitted event including results
				this.trigger("controller.register.submitted", result);
			}
		}
	};

	var register_controller = new RegisterController();

	return register_controller;
});