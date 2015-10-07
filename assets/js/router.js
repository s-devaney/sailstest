define([
	"underscore",
	"backbone",
	"controller/user"
], function(_, Backbone, UserController) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			"login": "handleRoute",
			"register": "handleRoute",
			"employee": "handleRoute",
			"employee/:employee": "handleRoute"
		},

		initialize: function() {
			console.log("initializing router");

			//subscribe to events
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

		handleRoute: function(route) {
			this.trigger("router.route_changed", route);
		}
	});

	return new AppRouter();
});