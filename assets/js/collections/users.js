var usersCollection = Backbone.Collection.extend({
	model: userModel,
	url: '/user'
});