window.testViewObject, window.userObject = null;

var testViewClass = Backbone.View.extend({
	initialize: function() {
		console.log("test view created");
		this.render();
	},

	render: function() {
		console.log('rendering view...');
		var variables = {username_var: window.userObject.get("username") };
		var template = _.template($("#test-template").html());
		this.$el.html(template(variables));
	},

	events: {
		"click input[type=button]": "doSubmit"
	},

	doSubmit: function() {
		console.log("submitting...");
		window.userObject.set({username: $("#test_username").val()});
	}
});

$(function() {
	window.userObject = new userClass();

	window.testViewObject = new testViewClass({
		el: $("#test-view")
	});
});