// const User = require('../models/user.model');
// to make use of the model data from our joke.model.js,
// we need to import the model file here
const Joke = require('../models/joke.model');

module.exports.findAllJokes = (req, res) => {
    // the .find is query (i.e. select all)
    Joke.find()
        // .then and .catch are promises
        // .then is for successful query where we are catching the data as
        // an array of objects under the name allJokes (key value pair shows: allJokes)
        .then((allJokes) => {
            res.json({ jokes: allJokes })
        })
        // .catch is for unsuccessful query
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createJoke = (req, res) => {
    // the req (i.e. request) is input from the client
    // the client input comes from a form
    // the form is found in the body so we access client input as such
    Joke.create(req.body)
        .then((newJoke) => {
            res.json({ joke: newJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneJoke = (req,res) => {
    console.log(req.params)
    // instead of findOne, you can also use findById
    // note the association where the id in 'req.params.id' must match
    // the id in the route file '/api/oneJoke/:id'
    Show.findOne({ _id: req.params.id })
        .then((oneJoke) => {
            res.json({ joke: oneJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.updateJoke = (req, res) => {
    // three parameters for findOneAndUpdate
    // 1. the id of the show so we know which show to update
    // 2. the updated information passed via client input from the form (i.e. body)
    // 3. boolean new set to true that returns updated show in .then statement; otherwise
    // the previous data for the show is returned (i.e. non-updated data)
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true})
        .then((updatedJoke) => {
            res.json({ joke: updatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
    }

module.exports.deleteJoke = (req, res) => {
    // parameter is the id of the show to be deleted
    Joke.deleteOne({ _id: req.params.id })
        // deleting a joke will not return anything so
        // we are designating 'result' as a message upon successful deletion of joke
        .then((result) => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}