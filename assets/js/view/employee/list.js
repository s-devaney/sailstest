define([
	"jquery",
	"underscore",
	"backbone",
	"collection/employees",
	"text!template/employee/list.html"
], function($, _, Backbone, EmployeeCollection, EmployeeListTemplate) {
	var EmployeeListView = new Backbone.View.extend({
		el: $("#employee-list-view"),

		initialize: function() {
			this.collection = new EmployeeCollection();
			this.fetch(success: function() {
				console.log("successfully fetched employee collection");
				this.render();
			}, error: function(collection, response, options) {
				console.log("error fetching employee collection: " + JSON.stringify(response));
				this.render();
			});
		},

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