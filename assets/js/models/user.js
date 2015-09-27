var userModel = Backbone.Model.extend({
	initialize: function() {
		console.log('initializing user');
	},

	urlRoot: '/user',

	defaults: {
		username: 'Default'
	}
});

