var testViewClass = Backbone.View.extend({
	initialize: function() {
		console.log("test view created");
		this.render();
	},

	render: function() {
		var template = _.template($("#test-template"), {});
		this.$el.html(template);
	},

	events: {
		"click input[type=button]": "doSubmit"
	},

	doSubmit: function() {
		console.log("submitting...");
		
	}
});

var testViewObject = new testViewClass({
	el: $("test-view")
});