// comments.js
// ? ReferenceError - comment is not defined 
const express = require('express')
const app = express()
const Comment = require('../models/comment');

module.exports = function (app) {
    
    // CREATE COMMENT
    app.post('/reviews/comments', (req, res) => {
        Comment.create(req.body).then(comment => {
            res.redirect(`/reviews/${comment.reviewId}`);
        }).catch((err) => {
            console.log(err.message);
        });
    });
        // DELETE COMMENT
        app.delete('/reviews/comments/:id', function (req, res) {
            console.log("/comments/:id")
            console.log("DELETE comment")
            Comment.findByIdAndRemove(req.params.id).then((comment) => {
                res.redirect(`/reviews/${comment.reviewId}`);
            }).catch((err) => {
                console.log(err.message);
            })
        })

}
