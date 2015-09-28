/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	scheme: true,
	autoPK: true,
	autoCreatedAt: false,
	autoUpdatedAt: false,

	attributes: {
		name: {
			type: "string",
			string: true,
			required: true,
			maxLength: 128,
			minLength: 3
		}
	}
};