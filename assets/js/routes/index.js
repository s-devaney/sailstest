router = Backbone.Router.extend({
	routes: {
		"login": "handleLogin",
		"employees": "handleEmployees",
		"employee/:id": "handleEmployee",
		"*path": "defaultRoute"
	},

	/*
	*	Route for app root ("/")
	*	Checks user state and redirects (to login or employee controllers)
	*	and fires the relevant routing function
	*/
	defaultRoute: function() {
		if(model.user.is.loggedIn()) {
			this.navigate("employees", {trigger: true});
		} else {
			this.navigate("login", {trigger: true});
		}
	}

	handleLogin: function() {
		
	},

	handleEmployees: function() {

	},

	handleEmployee: function(id) {

	}
});