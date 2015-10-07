define([
	"underscore",
	"backbone",
	"model/user",
	"controller/login",
	"controller/register"
], function(_, Backbone, UserModel, LoginController, RegisterController) {
	var UserController = function() {
		this.initialize = function() {
			//initialize model
			this.model = new UserModel();

			//subscribe to initial events
			this.listenTo(this.model, "change:loggedIn", this.onLoggedInChange);

			//subscribe to other events
			this.listenTo(this.model, "change:token", this.onTokenChange);
			this.listenTo(LoginController, "controller.login.submitted", this.controllerHandler.login_controller.submitted);
			this.listenTo(RegisterController, "controller.register.submitted", this.controllerHandler.register_controller.submitted);
		};

		this.setInitialLoggedInState = function() {
			if(localStorage.getItem("user-token")) {
				console.log("user is logged in");
				//this won't fire the onTokenChange event as we haven't subscribed to it yet
				this.model.set({token: token, loggedIn: true});
			} else {
				console.log("user is not logged in");
				this.model.set({loggedIn: false});
			}
		};

		this.controllerHandler = {
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
		};

		this.isLoggedIn = function() {
			return this.model.get("loggedIn");
		};

		this.onTokenChange = function(event) {
			//update localStorage
			localStorage.setItem("user_token", event.changed.token);
		};

		this.onLoggedInChange = function(event) {
			console.log("logged in state change");
			this.trigger("controller.user.logged_in_change", event.changed.loggedIn)
		};
	};

	_.extend(UserController.prototype, Backbone.Events, {
		remove: function() {
			this.stopListening();
		}
	});

	var user_controller = new UserController();
	user_controller.initialize();

	return user_controller;
});