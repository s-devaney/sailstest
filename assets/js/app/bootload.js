$(function() {
	users = new usersCollection();
	users.fetch();

	userForm = new userFormView({
		el: $("#user-form-view")
	});

	usersView = new usersView({
		collection: users
	});

	$(document.body).append(usersView.render().el);
});