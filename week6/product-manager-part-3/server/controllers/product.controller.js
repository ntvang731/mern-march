// to make use of the model data from our product.model.js,
// we need to import the model file
const Product = require('../models/product.model');

module.exports.findAllProducts = (req, res) => {
    Product.find()
        // .then and .catch are promises
        // .then is for successful query where we are catching the data as
        // an array of objects under the name allProducts (key value pair shows: allShows)
        .then((allProducts) => {
            res.json({ products: allProducts })
        })
        // .catch is for unsuccessful query
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createProduct = (req, res) => {
    // the req (i.e. request) is input from the client
    // the client input comes from a form
    // the form is found in the body so we access client input as such
    Product.create(req.body)
        .then((newProduct) => {
            res.json({ product: newProduct})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneProduct = (req,res) => {
    console.log(req.params)
    // instead of findOne, you can also use findById
    // note the association where the id in 'req.params.id' must match
    // the id in the route file '/api/oneShow/:id'
    Product.findOne({ _id: req.params.id })
        .then((oneProduct) => {
            res.json({ product: oneProduct})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err})
        });
}

module.exports.updateProduct = (req, res) => {
    // three parameters for findOneAndUpdate
    // 1. the id of the show so we know which product to update
    // 2. the updated information passed via client input from the form (i.e. body)
    // 3. boolean new set to true that returns updated show in .then statement; otherwise
    // the previous data for the show is returned (i.e. non-updated data)
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true})
        .then((updatedProduct) => {
            res.json({ product: updatedProduct})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err})
        });
    }

module.exports.deleteProduct = (req, res) => {
    // parameter is the id of the product to be deleted
    Product.deleteOne({ _id: req.params.id})
        // deleting a product will not return anything
        // 'result' is just used to designate a successful deletion of a product
        .then((result) => {
            res.json({ result: result})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err})
        });
}