var userFormView = Backbone.View.extend({
	initialize: function() {
		console.log("user-form view created");
		this.render();
	},

	render: function() {
		console.log('rendering user-form view...');
		var template = _.template($("#user-form-template").html());
		this.$el.html(template);
	},

	events: {
		"click input[type=button]": "createNewUser"
	},

	createNewUser: function() {
		console.log("creating new user...");
		var newUser = new userModel({username: $("#test_username").val()});
		newUser.save(null, {
			success: function(newUser) {
				console.log("save success");
				console.log(newUser);
				users.add(newUser);
			},
			error: function() {
				console.log("save error");
			}
		});
	}
});