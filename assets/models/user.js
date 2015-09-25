var userClass = Backbone.Model.extend({
	initialize: function() {
		console.log('initializing user');

		this.on("change:username", function(model) {
			console.log("username changed");
			window.testViewObject.render();
			model.save();
		});
	},

	urlRoot: '/user',

	defaults: {
		username: 'Default'
	}
});

