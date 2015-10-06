define([
	"jquery",
	"underscore",
	"backbone",
	"view/login/form",
	"view/register/form",
	"view/employee/form",
	"view/employee/list",
	"view/employee/detail"
], function($, _, Backbone, LoginFormView, RegisterFormView, EmployeeFormView, EmployeesListView, EmployeeDetailView) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			"login": "handleLogin",
			"register": "handleRegister",
			"employees/new": "handleEmployeesForm",
			"employees/list": "handleEmployeesList",
			"employee/:id": "handleEmployeeDetail",
			"*action": "defaultAction"
		}
	});

	var initialize: function() {
		var app_router = new AppRouter;
		app_router.on("handleLogin", function() {
			var login_form_view = new LoginFormView();
			login_form_view.render();
		});

		app_router.on("handleRegister", function() {
			var register_form_view = new RegisterFormView();
			register_form_view.render();
		});

		app.router.on("handleEmployeeForm", function() {
			var handle_employee_form = new EmployeeFormView();
			handle_employee_form.render();
		});

		app_router.on("handleEmployeesList", function() {
			var employees_list_view = new EmployeesListView();
			employees_list_view.render();
		});

		app_router.on("handleEmployeeDetail", function() {
			var employee_detail_view = new EmployeeDetailView();
			employee_detail_view.render();
		});

		app_router.on("defaultRoute", function() {
			/*
			*	app route logic
			*	is user logged in?
			*		yes:	route to /employees
			*		no:		route to /login  
			*/
		});

		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});