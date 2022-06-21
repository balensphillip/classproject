const mongoose = require('mongoose');
//article schema: defining the elements/structure of the article 
const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

//Line 19 exposes the article to other files
const Article = module.exports = mongoose.model('Article', articleSchema);