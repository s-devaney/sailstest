/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	schema: true,

	attributes: {
		username: {

		},

		password: {

		},

		toJSON: function() {
			var obj = this.toObject();
			delete obj.password;
			return obj;
		}
	},

	beforeUpdate: function(values, next) {
		CipherService.hashPassword(values);
		next();
	},

	beforeCreate: function(values, next) {
		CipherService.hashPassword(values);
		next();
	}
};

