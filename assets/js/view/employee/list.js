define([
	"jquery",
	"underscore",
	"backbone",
	"text!template/employee/list"
], function($, _, Backbone, EmployeeListTemplate) {
	var EmployeeListView = new Backbone.View.extend({
		el: $("#employee-list-view"),

		render: function() {
			console.log("rendering employee-list view");
			var data, template;
			template = _.template(EmployeeListView);
			this.$el.append(template);
		}
	});

	return EmployeeListView;
});

/*
var employeesView = Backbone.View.extend({
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
*/