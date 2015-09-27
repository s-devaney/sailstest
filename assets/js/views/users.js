var usersView = Backbone.View.extend({
	tagName: 'div',

	initialize: function() {
		console.log("user view created");
		this.render();
		this.collection.on("update", this.onUpdate, this);
	},

	onUpdate: function() {
		console.log("collection update event fired...");
		this.render();
	},

	render: function() {
		console.log('rendering users view...');

		this.$el.empty();

		this.collection.each(function(model) {
			console.log("loop");
			var newUserView = new userView({
				model: model
			});
			this.$el.append(newUserView.render().el);
		}, this);

		return this;
	}
});