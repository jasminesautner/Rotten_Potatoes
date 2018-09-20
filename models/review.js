const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://username:password1@ds251622.mlab.com:51622/rotten-potatoes-db', { useNewUrlParser: true });

const Review = mongoose.model('Review', {
    title: String,
    description: String,
    movieTitle: String,
    movieRating: String,
})

module.exports = Review

