const express = require('express');
const router = express.Router();
const passport = require('passport');
const Signup = require('../models/signupModel');

//accessing the login page
router.get('/', (req, res) => {
    res.render('login2')
});

//defining the route for processing the data from the login form
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        //this is the route for the page after successfully logging in
        successRedirect: '/',
        //incase of failure remain on login
        failureRedirect: '/login',
        //also display a flash message showing what's wrong in case of failure
        failureFlash: true
        })
        //'next' allows thenext process to be executed
        (req, res, next);
} );

module.exports = router;