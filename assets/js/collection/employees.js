define([
	"underscore",
	"backbone",
	"model/employee"
], function(_, Backbone, EmployeeModel) {
	var EmployeeCollection = Backbone.Collection.extend({
		model: EmployeeModel
		url: "/employee"
	});

	return EmployeeCollection;
});