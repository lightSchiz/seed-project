var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create a new schema
var schema = Schema(
	{ 
		content: {type: String,
				  required: true},
		user: {type: Schema.Types.ObjectId, 
				//ref is a sort of navigation property
				ref: 'User'}
	}
);


//export the mongoose model ('Model Name', schema for this model)
module.exports = mongoose.model('Message', schema);
	
