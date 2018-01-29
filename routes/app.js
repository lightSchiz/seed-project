var express = require('express');
var router = express.Router();

//import the User model we created
var User = require('../models/user');

//COMMENTED OUT CODE, SINCE WE ARE USING "NODE" AS THE ROOT VIEW
// router.get('/', function (req, res, next) {
//     res.render('index');
// });

// router.get('/message/:myMsgParam', function (req, res, next) {
//     res.render('node', {message: req.params.myMsgParam});
// });


router.get('/', function (req, res, next) {

	User.findOne( {} , function(err, doc){
		if(err) {
			return res.send("Error!");
		}
		res.render('node', {email: doc.email});
	} );

    //res.render('node');
});

router.post('/', function (req, res, next) {
    
    //access the message input property frm the request body
	var vMessage = req.body.messageInputFromForm;

	//access the email property from the request body
	var email = req.body.email;
	var user = new User(
			{ firstName : 'Mark',
			  lastName : 'Tolledo',
			  password : 'pass123',
			  email: email
			}
		);

	//tell mongoose to save the created user
	//can pass a callback function
	user.save();	
	
	res.redirect("/");


});


module.exports = router;
