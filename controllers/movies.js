const MovieDb = require('moviedb-promise')
const moviedb = new MovieDb('098f25d3e7d0611de1a75cf4126aedd9')
const Review = require('../models/review')

module.exports = function (app) {
    app.get('/', (req, res) => {
        moviedb.miscNowPlayingMovies().then(response => {
            res.render('movies-index', { movies: response.results });
        }).catch(console.error)
    })
    app.get('/movies/:id', (req, res) => {
        // find review
        moviedb.movieInfo({ id: req.params.id }).then(movie => { 
            if (movie.video) {
                moviedb.movieVideos({ id: req.params. id }).then(videos => {
                    movie.trailer_youtube_id = videos.results[0].key
                    renderTemplate(movie)
                })
            } else {
                renderTemplate(movie)
            }
            function renderTemplate(movie) {
                Review.find({ movieId: req.params.id }).then (reviews => {
                    res.render('movies-show', { movie: movie, reviews: reviews });
                })
            }
        }).catch((err) => {
            console.log(err.message)
        });
    });

}
