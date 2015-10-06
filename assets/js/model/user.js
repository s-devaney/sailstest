var userModel = Backbone.Model.extend({
	initialize: function() {
		console.log('initializing user');
	},

	urlRoot: '/user/me'

	defaults: {
		loggedIn: false
	}
});

