// app.js
const port = process.env.PORT || 3000;
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes');

// INITIALIZE BODY-PARSER AND ADD IT TO APP
const bodyParser = require('body-parser');

const express = require('express')
// import express from 'express'
const methodOverride = require('method-override')
// comment

const Review = require('./models/reviews')

const app = express()
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

const reviews = require('./controllers/reviews.js');

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(methodOverride('_method'))
// reviews(app)

// OUR MOCK ARRAY OF PROJECTS
// var reviews = [
//     { title: this.title},
//     { title: this.moveTitle}
// ]

// INDEX 
// app.get('/', (req, res) => {
//     Review.find().then((reviews) => {
//         res.render('reviews-index', { reviews: reviews });
//     }).catch((err) => {
//         console.log(err)
//     })
// })

// NEW
// app.get('/reviews/new', (req, res) => {
//     console.log(req.body)
//     res.render('reviews-new', {});
// })

// // CREATE
// app.post('/reviews', (req, res) => {
//     Review.create(req.body).then((review) => {
//         console.log(review)
//         res.redirect(`/reviews/${review._id}`) // Redirect to reviews/:id
//     }).catch((err) => {
//         console.log(err.message)
//     })
// })

// // SHOW
// app.get('/reviews/:id', (req, res) => {
//     Review.findById(req.params.id).then((review) => {
//         res.render('reviews-show', { review: review })
//     }).catch((err) => {
//         console.log(err.message);
//     })
// })

// // EDIT
// app.get('/reviews/:id/edit', function (req, res) {
//     Review.findById(req.params.id, function(err, review) {
//         res.render('reviews-edit', { review: review });
//     })
// })

// // UPDATE
// app.put('/reviews/:id', (req, res) => {
//     Review.findByIdAndUpdate(req.params.id, req.body)
//     .then((review) => {
//         res.redirect(`/reviews/${review._id}`);
//     }).catch(err => {
//         console.log(err.message)
//     })
// })
// // DELETE
// app.delete('/reviews/:id', function (req, res) {
//     console.log("DELETE review")
//     Review.findByIdAndRemove(req.params.id).then((review) => {
//         res.redirect('/');
//     }).catch((err) => {
//         console.log(err.message);
//     })
// })
reviews(app)

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
})

