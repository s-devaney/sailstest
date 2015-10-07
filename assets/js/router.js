define([
	"jquery",
	"underscore",
	"backbone",
	"controller/user"
], function($, _, Backbone, UserController) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			"*action": "route_changed"
		},

		initialize: function() {
			console.log("initializing router");
			this.listenTo(UserController, "controller.user.logged_in_change", this.handleLoggedInChange)
			Backbone.history.start();
		},

		handleLoggedInChange: function(isLoggedIn) {
			console.log("logged in state change event received");
			if(isLoggedIn) {
				console.log("routing to employees");
				this.navigate("employees", {trigger: true});
			} else {
				console.log("routing to login");
				this.navigate("login", {trigger: true});
			}
		},

		route_changed: function(page) {
			console.log("route changed, triggering event");
			this.trigger("router.route_changed", page);
		}
	});

	return new AppRouter();
});