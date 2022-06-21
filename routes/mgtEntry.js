const express = require('express');
const router = express.Router();

//accessing the mgtEntry page
router.get('/',(req, res)=>{
// we are rendering the mgt_Entry pug file
    res.render('mgt_Entry')
});

//we exposing our route to any file that will require it.
module.exports = router