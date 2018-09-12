// app.js
const port = process.env.PORT || 3000;
var mongoose = require('mongoose');
// INITIALIZE BODY-PARSER AND ADD IT TO APP
const bodyParser = require('body-parser');
const reviews = require('./controllers/reviews.js');

var exphbs = require('express-handlebars');

const express = require('express')
// import express from 'express'
const methodOverride = require('method-override')
// comment

const Review = require('./models/reviews')

const app = express()

mongoose.connect(process.env.MONGODB_URI || 'mongodb://username:password1@ds251622.mlab.com:51622/rotten-potatoes-db');

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


// OUR MOCK ARRAY OF PROJECTS
// var reviews = [
//     { title: this.title},
//     { title: this.moveTitle}
// ]

reviews(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
    // var connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
    // console.log(`[CONNECTED] MongoDB ${connectionString}`);
    // mongoose.connect();
});

