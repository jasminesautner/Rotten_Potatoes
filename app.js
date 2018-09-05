// app.js
const express = require('express')
const app = express()
var exphbs = require('express-handlebars');
// OUR MOCK ARRAY OF PROJECTS
let reviews = [
    { title: this.title},
    { title: this.moveTitle}
]
// INDEX 
app.get('/', (req, res) => {
    res.render('reviews-index', { reviews: reviews });
})

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})

