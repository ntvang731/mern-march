const TvShowController = require('../controllers/tvshow.controller');

// takes in only one argument so no parenthesis for callback function
module.exports = app => {
    // GET data via api route; then find all query from tvshow.controller
    app.get('/api/allShows', TvShowController.findAllShows)
    app.post('/api/newShow', TvShowController.createShow)
    app.get('/api/oneShow/:id', TvShowController.findOneShow)
    app.put('/api/updateShow/:id', TvShowController.updateShow)
    app.delete('/api/deleteShow/:id', TvShowController.deleteShow)
}