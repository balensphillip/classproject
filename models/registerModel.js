//Model refers to a structure of the database
//In the model folder we store schemas there.
//We are going to describe a schema 
//A schema refers to the structure of a database

// first we require mongoose package becoz it will 
// help us define the schema
const mongoose = require('mongoose')

//creating the schema for register2 file.
const registerSchema = mongoose.Schema({
 bnumber:{
     type:String,
     required:true
// the data that is coming in, its a string and required
 },
 bsize:{
     type:String,
     required:true
//the data that is coming in, its a string and is required
 },
bprice:{
    type:Number,
    required:true,
//the data that is coming in, its a number and is required
}
})

// we are exposing our schema to other files
const Register = module.exports = mongoose.model('Register', registerSchema);