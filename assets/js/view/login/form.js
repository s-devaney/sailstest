define([
	"jquery",
	"underscore",
	"backbone",
	"text!template/login/form"
], function($, _, Backbone, LoginFormTemplate) {
	var LoginFormView = new Backbone.View.extend({
		el: $("#login-form-view"),

		render: function() {
			console.log("rendering login-form view");
			var data, template;
			template = _.template(LoginFormTemplate);
			this.$el.append(template);
		}

		// TODO - form logic
	});

	return LoginFormView;
});

/*
var userFormView = Backbone.View.extend({
	initialize: function() {
		console.log("user-form view created");
		this.render();
	},

	render: function() {
		console.log('rendering employee-form view...');
		var template = _.template($("#user-form-template").html());
		this.$el.html(template);
	},

	events: {
		"click input[type=button]": "doLogin"
	},

	doLogin: function() {
		console.log("attempting login...");
		user.set({
			identifier: $("#identifier").val(),
			password: $("#password").val()
		});
		user.save("identifier", "password", {
			success: function(model, response, options) {
				console.log("logn success (I think)...");
				console.log(response);
				console.log(model);
				user.fetch();
				user.set({"loggedIn": true});
			},
			error: function() {
				console.log("save error");
			}
		});
	}
});
*/