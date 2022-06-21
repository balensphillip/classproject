//this file handles the authentication process
const LocalStrategy = require('passport-local').Strategy;
const Signup = require('../models/signupModel');
const config = require('../config/database');
const bcrypt = require('bcryptjs');

module.exports = (passport) => {
    // Local strategy
    //The fields used here should correspond to the way they are written in the schema(models)
    passport.use(new LocalStrategy(function(name, password, done){
      // match username
      let query = { name: name };
      //we pass an error and the name of our model (to cater for both possibilities)
      Signup.findOne(query, function(err, signupModel){
        if(err) throw err;
  
        if(!signupModel) {
          console.log('This name has not been found');
          return done(null, false, { message: 'No name found' });
          
        }
        // Match password
      bcrypt.compare(password, signupModel.password, function(err, isMatch){
        if (err) throw err;
        if(isMatch) {
          return done(null, signupModel);
        } else {
          return done(null, false, { message: 'Wrong password' });
        }
      });
    })
 }))

 passport.serializeUser(function(signupModel, done) {
    done(null, signupModel.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, signupModel) {
      done(err, signupModel);
    });
  });
};