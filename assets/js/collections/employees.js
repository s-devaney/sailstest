var employeeCollection = Backbone.Collection.extend({
	model: employeeModel,
	url: '/employee'
});