//review.js

const Review = require('./models/review')

export default function (app) {

    // INDEX
    app.get('/', (req, res) => {
        Review.find()
        .then(reviews => {
            res.render('reviews-index', { reviews: reviews });
        }).catch(err => {
            console.log(err);
        });
    });
}