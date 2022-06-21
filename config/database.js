// we are creating a file that will tell the controller 
// where we find the database.
// we shall be exporting our database to the server file that will help us
// establish the database connection.
module.exports = {
// here we are establishing a portnumber to our database.
// this a connection string and a path to the database.
    database:'mongodb://localhost:27017/nodekb',
// the secret is our password.
    secret:'kb'
}

