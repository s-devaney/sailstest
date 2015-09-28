var app = {
	initialize: function() {
		if(user.get("loggedIn")) {
			employees = new employeesCollection();
			employees.fetch();

			employeeForm = new employeeViewForm({
				el: $("#employee-form-view")
			});

			employeeView = new employeeView({
				collection: employees
			});

			$(document.body).append(employeesView.render().el);		
		}
	}
}