/*
*	App controller
*/

define([
	"jquery",
	"underscore",
	"backbone",
	"router",
	"controller/user",
	"controller/login"
], function($, _, Backbone, Router, UserController, LoginController) {
	var App = function() {
		this.initialize = function() {
			console.log("initializing app");

			this.listenTo(Router, "router.route_changed", this.routing.onRouteChange);

			//initalize user controller
			var user_controller = this.controllers.user.set(this.controllers.create.user(), this);
			user_controller.initialize();
		};

		this.controllers = {
			user: {
				_controller: null,

				set: function(controller, that) {
					//there can only ever be 1 user controller, if it exists then don't overwrite
					if(that.controllers.user._controller) return false;

					that.controllers.user._controller = controller;

					return that.controllers.user._controller;
				},

				get: function(that) {
					return that.controllers.user._controller;
				}
			},
			login: null,
			register: null,
			employee: null,

			create: {
				user: function() {
					console.log("creating new user controller");
					return new UserController();
				},

				login: function() {
					console.log("creating new login controller");
					return new LoginController();
				},

				register: function() {
					console.log("creating new register controller");
					//return new RegisterController();
				},

				employee: function() {
					console.log("creating new employee controller");
					return new EmployeeController();
				}				
			},

			destroy: function(controllers) {
				_.each(controllers, function() {

				});
			}
		};

		this.routing = {
			onRouteChange: function(route) {
				//destroy all other controllers
				var routeRoot = route.split("/")[0];
				this.controllers.destory(_.omit(this._routes, routeRoot));

				//call router function for new active page
				this.routing.routes[routeRoot]();
				switch(routeRoot) {
					case "login":
						this.routing.onLogin();
						break;
					case "register":
						this.routing.onRegister();
						break;
					case "employee":
						this.routing.onEmployee();
						break;
				}
			},

			onLogin: function() {
				//create new LoginController
				var login_controller = this.controllers.login.set(this.controllers.create.login(), this);
				login_controller.initialize();
			},

			onRegister: function() {

			},

			onEmployee: function() {

			}
		}
	}

	_.extend(App.prototype, Backbone.Events, {
		remove: function() {
			this.stopListening();
		}
	});

	return new App();
});