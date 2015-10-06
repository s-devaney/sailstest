define([
	"jquery",
	"underscore",
	"backbone",
	"controller/user"
], function($, _, Backbone, UserController) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			"*action": "router.route_changed"
		},

		initialize: function() {
			this.listenTo(UserController, "controller.user.logged_in_change", app_router.handleLoggedInChange)
			Backbone.history.start();
		},

		handleLoggedInChange: function(isLoggedIn) {
			if(isLoggedIn) {
				this.navigate("employees", {trigger: true});
			} else {
				this.navigate("login", {trigger: true});
			}
		}
	});

	var app_router = new AppRouter();

	return app_router;
});