define([
	"underscore",
	"backbone"
], function(_, Backbone) {
	var EmployeeModel = Backbone.Model.extend({
		urlRoot: "/employee",

		initialize: function() {
			console.log("initializing employee model");
		}
	});

	return EmployeeModel;
});