/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var cred = require("credential");

module.exports = {
	migrate: "drop",
	scheme: true,
	connection: "mongodb",
	autoPK: true,
	autoCreatedAt: false,
	autoUpdatedAt: false,
	attributes: {
		name: {
			type: "string",
			string: true,
			unique: true,
			alphanumeric: true,
			required: true,
			maxLength: 20,
			empty: false
		},

		username: {
			type: "string",
			unique: true,
			required: true
		},

		password: {
			type: "string",
			required: true,
			minLength: 3,
			maxLength: 128,
			protected: true
		}
	},

	beforeCreate: function(user, cb) {
		cred.hash(user.password, function(err, hash) {
			if(err) {
				console.log(err);
				cb(err);
			} else {
				user.password = hash;
				cb(null, user);
			}
		});
	}
};