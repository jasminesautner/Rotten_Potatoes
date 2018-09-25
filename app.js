// app.js
// import comment from 'comments';
const port = process.env.PORT || 3000;
var mongoose = require('mongoose');
// LINK COMMENTS 
// import comments from 'comments';
// import { cpus } from 'os';
// INITIALIZE BODY-PARSER AND ADD IT TO APP
const bodyParser = require('body-parser');

const Comment = require('./models/comment');
const Review = require('./models/review');


const comments = require("./controllers/comments.js");
const reviews = require('./controllers/reviews.js');
const movies = require('./controllers/movies.js');
// const reviews = require("./controllers/reviews.js");

var exphbs = require('express-handlebars');

const express = require('express')
// import express from 'express'
const methodOverride = require('method-override')
// comment

const app = express()

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://username:password1@ds251622.mlab.com:51622/rotten-potatoes-db');

// The following line must appear AFTER const app = expres() and before your routes!
app.use(bodyParser.urlencoded({ extended: true }));
// routes(app);
// var routes = require('./controllers/reviews');
// var reviews = require("./controllers/reviews")

// const Review = mongoose.model('Review', {
//     title: String,
//     description: String,
//     movieTitle: String
// });

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(methodOverride('_method'))
comments(app);
reviews(app);
movies(app);

// OUR MOCK ARRAY OF PROJECTS
// var reviews = [
//     { title: this.title},
//     { title: this.moveTitle}
// ]

app.listen(port, () => {
    // console.log(`App listening on port ${port}!`);
    var connectionString = mongoose.connect(process.env.MONGODB_URI || 'mongodb://username:password1@ds251622.mlab.com:51622/rotten-potatoes-db');
        console.log(`[CONNECTED] MONGODB ${connectionString}`);
    `mongoose.connect()`;
    // var connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
    // console.log(`[CONNECTED] MongoDB ${connectionString}`);
    // mongoose.connect();
});

