var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator')

//create a new schema
var schema = Schema(
	{ 
		firstName : {type: String,
				     required: true},
		lastName : {type: String,
				    required: true},
		password : {type: String,
				    required: true},
		email : {type: String,
				 required: true,
				 unique: true},
		//array of messages, sort of a relation or navigation property
		messages: [ 
					{
						type: Schema.Types.ObjectId,
						//define a reference to another model
						ref: 'Message'
				  	}
				  ]
	}
);

//add a plugin, the mongoose unique validator, for the schema
//this validates the "unique" parameters defined in the schema
schema.plugin(mongooseUniqueValidator);

//export the mongoose model ('Model Name', schema for this model)
module.exports = mongoose.model('User', schema);
	
