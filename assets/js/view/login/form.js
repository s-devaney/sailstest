define([
	"jquery",
	"underscore",
	"backbone",
	"text!template/login/form.html"
], function($, _, Backbone, LoginFormTemplate) {
	var LoginFormView = new Backbone.View.extend({
		el: $("#login-form-view"),

		render: function() {
			console.log("rendering login-form view");
			var data, template;
			template = _.template(LoginFormTemplate);
			this.$el.append(template);
		},

		events: {
			"click input[type=button]": doLogin
		},

		doLogin: function() {
			console.log("login button clicked");
			this.trigger("view.login.form.submitted");
		}

		// TODO - form logic
	});

	return LoginFormView;
});