// app.js
const express = require('express')
const app = express()
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten_potatoes', { useNewUrlParser: true });
// INITIALIZE BODY-PARSER AND ADD IT TO APP
const bodyParser = require('body-parser');
const Review = mongoose.model('Review', {
    title: String,
    description: String,
    movieTitle: String
});
// The following line must appear AFTER const app = expres() and before your routes!
app.use(bodyParser.urlencoded({ extended: true}));

// OUR MOCK ARRAY OF PROJECTS
var reviews = [
    { title: this.title},
    { title: this.moveTitle}
]

// INDEX 
app.get('/', (req, res) => {
    Review.find().then((reviews) => {
        res.render('reviews-index', { reviews: reviews });
    })
    .catch((err) => {
        console.log(err);
    })
})

// NEW
app.get('/reviews/new', (req, res) => {
    console.log(req.body);
    // res.render('reviews-new', {});
})

// CREATE
app.post('/reviews', (req, res) => {
    Review.create(req.body).then((review) => {
        console.log(review);
        res.redirect('/');
    }).catch((err) => {
        console.log(err.message);
    })
})

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})

