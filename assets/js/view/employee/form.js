define([
	"jquery",
	"underscore",
	"backbone",
	"text!template/employee/form.html"
], function($, _, Backbone, EmployeeFormTemplate) {
	var EmployeeFormView = new Backbone.View.extend({
		el: $("#employee-form-view"),

		render: function() {
			console.log("rendering employee-form view");
			var data, template;
			template = _.template(EmployeeFormTemplate);
			this.$el.append(template);
		}

		// TODO - form logic
	});

	return EmployeeViewForm;
});

/*
var employeeFormView = Backbone.View.extend({
	initialize: function() {
		console.log("employee-form view created");
		user.on("change:loggedIn", this.render, this);
	},

	render: function() {
		if(user.get("loggedIn")) {
			console.log('rendering employee-form view...');
			var template = _.template($("#employee-form-template").html());
			this.$el.html(template);

			console.log("rendering employees view...");
			
			var newEmployeesView = new employeesView({
				collection: new employeesCollection()
			});
		}
	},

	events: {
		"click input[type=button]": "createNewEmployee"
	},

	createNewEmployee: function() {
		console.log("creating new employee...");
		var newEmployee = new employeeModel({name: $("#employee_username").val()});
		newEmployee.save(null, {
			success: function(newEmployee, response, options) {
				console.log("employee save success");
				users.add(newEmployee);
			},
			error: function(model, reponse, options) {
				console.log("employee save error");
				console.log(response);
			}
		});
	}
});
*/