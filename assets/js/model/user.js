define([
	"underscore",
	"backbone"
], function(_, Backbone) {
	var UserModel = Backbone.Model.extend({
		initialize: function() {
			console.log("initializing user");
		}
	});

	return UserModel;
});