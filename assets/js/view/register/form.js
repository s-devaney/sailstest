define([
	"jquery",
	"underscore",
	"backbone",
	"text!template/register/form.html"
], function($, _, Backbone, RegisterFormTemplate) {
	var EmployeeFormView = new Backbone.View.extend({
		el: $("#register-form-view"),

		render: function() {
			console.log("rendering register-form view");
			var data, template;
			template = _.template(RegisterFormTemplate);
			this.$el.append(template);
		},

		events: {
			"click input[type=button]": doRegister
		},

		doRegister: function() {
			console.log("register button clicked");
			this.trigger("view.register.form.submitted")
		}

		// TODO - form logic
	});

	return RegisterViewForm;
});