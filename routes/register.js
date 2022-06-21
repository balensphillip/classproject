const express = require('express');
const router = express.Router();

const passport = require('passport')
const expressValidator = require('express-validator')
router.use(expressValidator())

// requiring our model or schema of register
const Register = require('../models/registerModel')

//accessing the mgtEntry page
router.get('/',(req, res)=>{
// we are rendering the register2 pug file
    res.render('register2')
});

// we are creating the route for the post method
router.post('/',(req,res)=>{
// declaration of variables that correspond to the
// names in the form.
const bNumber = req.body.bNumber
const bSize = req.body.bSize
const bPrice = req.body.bPrice

// validation(optional)
// req.checkBody('bNumber','Battery number is required').notEmpty()
// req.checkBody('bSize','Battery size is required').notEmpty()
// req.checkBody('bPrice','Battery price is required').notEmpty()

// we are handling errors here
const errors = req.validationErrors()
if(errors){
res.render('register2')
}
else {
// we have a new variable assigning it 
    let newRegister = new Register({
// value(property name from register schema):property(variable name)
        bnumber:bNumber,
        bsize:bSize,
        bprice:bPrice
    });
// saving our model to
   newRegister.save((err) => {
     if(err){
         console.error(err);
     return;
     }
     else {
        //we fisrt flash a message confirm the saving of a record
        //we stay @ the same form to register a new entity
        console.log('we have saved your data in the database')
        res.redirect('/register2')
     }
   })
}
})

//we exposing our route to any file that will require it.
module.exports = router