//Model refers to a structure of the database
//In the model folder we store schemas there.
//We are going to describe a schema 
//A schema refers to the structure of a database

// first we require mongoose package becoz it will 
// help us define the schema
const mongoose = require('mongoose')

//creating the schema for register2 file.
const signupSchema = mongoose.Schema({
 username:{
     type:String,
     required:true
// the data that is coming in, its a string and required
 },
 email1:{
     type:String,
     required:true,
     unique: true
//the data that is coming in, its a string and is required
 },
password:{
    type:String,
    required:true,
//the data that is coming in, its a number and is required
}
})

// we are exposing our schema to other files
const Signup = module.exports = mongoose.model('Signup', signupSchema);