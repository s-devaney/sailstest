var user;

$(function() {
	//create user model
	user = new User();
	user.fetch({
		success: function(m, r, o) {
			console.log("user is logged in (I think...)");
			console.log(r);
			app.initialize();
		}, error: function(m, r, o) {
			console.log("user is not logged in or there was an error");
			console.log(r);
			app.initialize();
		}
	});

});