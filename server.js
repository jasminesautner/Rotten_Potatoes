// app.js
// const port = process.env.PORT || 3000;
// var mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes');

// // INITIALIZE BODY-PARSER AND ADD IT TO APP
// const bodyParser = require('body-parser');

// const express = require('express')
// // import express from 'express'
// const methodOverride = require('method-override')
// // comment

// const Review = require('./models/reviews')

// const app = express()
// // The following line must appear AFTER const app = expres() and before your routes!
// app.use(bodyParser.urlencoded({ extended: true }));
// // routes(app);
// // var routes = require('./controllers/reviews');
// // var reviews = require("./controllers/reviews")

// // const Review = mongoose.model('Review', {
// //     title: String,
// //     description: String,
// //     movieTitle: String
// // });

// const reviews = require('./controllers/reviews');

// var exphbs = require('express-handlebars');

// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

// app.use(methodOverride('_method'))


// // OUR MOCK ARRAY OF PROJECTS
// // var reviews = [
// //     { title: this.title},
// //     { title: this.moveTitle}
// // ]

// reviews(app)

// app.listen(port, () => {
//     console.log(`App listening on port ${port}!`)
// })
