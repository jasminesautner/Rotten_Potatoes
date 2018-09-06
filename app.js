// app.js
const express = require('express')
const app = express()
var exphbs = require('express-handlebars');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten_potatoes', { useNewUrlParser: true });
const Review = mongoose.model('Review', {
    title: String
})

// // OUR MOCK ARRAY OF PROJECTS
// var reviews = [
//     { title: this.title},
//     { title: this.moveTitle}
// ]

// INDEX 
app.get('/', (req, res) => {
    Review.find().then((reviews) => {
        res.render('reviews-index', { reviews: reviews });
    })
    .catch((err) => {
        console.log(err);
    })
})

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})

