// const User = require('../models/user.model');
// to make use of the model data from our tvshow.model.js,
// we need to export the model file here
const Show = require('../models/tvshow.model');

module.exports.findAllShows = (req, res) => {
    // the .find is query (i.e. select all)
    Show.find()
        // .then and .catch are promises
        // .then is for successful query where we are catching the data as
        // an array of objects under the name allShows (key value pair shows: allShows)
        .then((allShows) => {
            res.json({ shows: allShows })
        })
        // .catch is for unsuccessful query
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createShow = (req, res) => {
    // the req (i.e. request) is input from the client
    // the client input comes from a form
    // the form is found in the body so we access client input as such
    Show.create(req.body)
        .then((newShow) => {
            res.json({ show: newShow})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneShow = (req,res) => {
    console.log(req.params)
    // instead of findOne, you can also use findById
    // note the association where the id in 'req.params.id' must match
    // the id in the route file '/api/oneShow/:id'
    Show.findOne({ _id: req.params.id })
        .then((oneShow) => {
            res.json({ show: oneShow})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err})
        });
}

module.exports.updateShow = (req, res) => {
    // three parameters for findOneAndUpdate
    // 1. the id of the show so we know which show to update
    // 2. the updated information passed via client input from the form (i.e. body)
    // 3. boolean new set to true that returns updated show in .then statement; otherwise
    // the previous data for the show is returned (i.e. non-updated data)
    Show.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true})
        .then((updatedShow) => {
            res.json({ show: updatedShow})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err})
        });
    }

module.exports.deleteShow = (req, res) => {
    // parameter is the id of the show to be deleted
    Show.deleteOne({ _id: req.params.id})
        // deleting a show will not return anything so
        // we are designating 'result' to return a message upon successful deletion of show
        .then((result) => {
            res.json({ result: result})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err})
        });
}