// we are requiring our packages into the controller
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidate = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

//we can also require our own made folder not neccessarily an installed package
//a package is just a folder with a js file. in this case database is the js file
const config = require('./config/database');

//Create a model 
const Article = require('./models/article');

//instantiating the server/app/index
const app = express();

//creating a connection to the mongo database from the controller(specifying its location)
mongoose.connect(config.database);
// Incase of a connection
const db = mongoose.connection;
db.once('open', ()=> {
    console.log('Connected to mongodb')
});
db.on('error', (err)=> {
    console.error('Connection error',err)
}); 

//setting up the view engine
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//body parser middle ware section: This helps to clean data that is within the forms.
app.use(bodyParser.urlencoded({extended:false}));


app.use(bodyParser.json());

//express flash middle ware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

//setting the directory for static files
app.use(express.static(path.join(__dirname, "public")));

//express session middle ware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
    //the above keeps track of the different users that have successfully accessed the system according to their sessions.
}));

//password configuration
require('./config/passport')(passport);

//passport middle ware
app.use(passport.initialize());
app.use(passport.session());
//* means all. 
app.get('*', (req, res, next) => {
    res.locals.user = req.user || null;
    next();
});

//
// app.use(expressValidator({
//     errorFormatter: (param, msg, value) => {
//         const nameSpace = param.split('.')
//         const root = nameSpace.shift()
//         const formParam = root
//         while (nameSpace.length () => {
//             formParam += '[' + nameSpace.shift() + ']'
//         })
//     }
// }))

//the route section
let loginRoutes = require('./routes/login')
const mgtEntryRoutes = require('./routes/mgtEntry')
const registerRoutes = require('./routes/register')
const signupRoutes = require('./routes/signup');
const Signup = require('./models/signupModel');


//establish the server listening port
app.listen(3000, ()=> {
    console.log('The server has started on port 3000')
})