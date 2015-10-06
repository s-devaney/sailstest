define([
	"underscore",
	"backbone",
	"model/user",
	"controller/login",
	"controller/register"
], function(_, Backbone, UserModel, LoginController, RegisterController) {
	var UserController = function() {
		var model = null,
		var controller = null,

		var initialize = function() {
			//initialize model
			this.model = new UserModel();

			//subscribe to initial events
			this.listenTo(this.model, "change:loggedIn", this.onLoggedInChange);

			//get initial login state
			if(localStorage.getItem("user-token")) {
				//this won't fire the onTokenChange event as we haven't subscribed to it yet
				this.model.set({token: token, loggedIn: true});
			} else {
				this.model.set({loggedIn: false});
			}

			//subscribe to other events
			this.listenTo(this.model, "change:token", this.onTokenChange);
			this.listenTo(LoginController, "controller.login.submitted", this.contorllerHandler.login_controller.submitted);
			this.listenTo(RegisterController, "controller.register.submitted", this.contorllerHandler.register_controller.submitted);
		};

		var controllerHandler = {
			login_controller: {
				submitted: function(result) {
					//handle login form result
					if(result.success) {
						//user is now logged in...
						this.model.set({token: result.data.token, loggedIn: true});
					}
				}
			},

			register_controller: {
				submitted: function(result) {
					//handle register form result
					if(result.success) {
						//user is now registered + logged in
						this.model.set({token: result.data.token, loggedIn: true});
					}
				}
			}
		}

		var isLoggedIn = function() {
			return this.model.get("loggedIn");
		};

		var onTokenChange: function(newToken) {
			//update localStorage
			localStorage.setItem("user_token", newToken);
		};

		var onLoggedInChange: function(loggedIn) {
			this.trigger("controller.user.logged_in_change", loggedIn)
		};
	};

	_.extend(UserController.prototype, Backbone.Events, {
		remove: function() {
			this.stopListening();
		}
	});

	var user_controller = new UserController();

	return user_controller;
});