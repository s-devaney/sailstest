var userView = Backbone.View.extend({
	tagName: 'div',

	initialize: function() {
		console.log("initialising new user view");
		this.template = _.template($("#user-template").html());
	},

	template: null,

	events: {
		"click a": "doDelete"
	},

	render: function() {
		console.log('rendering user view...');

		var variables = {user: this.model};
		this.$el.html(this.template(variables));

		return this;
	},

	doDelete: function() {
		this.model.destroy();
	}
});