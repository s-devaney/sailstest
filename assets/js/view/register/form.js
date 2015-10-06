define([
	"jquery",
	"underscore",
	"backbone",
	"text!template/register/form"
], function($, _, Backbone, RegisterFormTemplate) {
	var EmployeeFormView = new Backbone.View.extend({
		el: $("#register-form-view"),

		render: function() {
			console.log("rendering register-form view");
			var data, template;
			template = _.template(RegisterFormTemplate);
			this.$el.append(template);
		}

		// TODO - form logic
	});

	return RegisterViewForm;
});