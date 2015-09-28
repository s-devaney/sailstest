var employeeModel = Backbone.Model.extend({
	initialize: function() {
		console.log('initializing employee');
	},

	urlRoot: '/employee'
});