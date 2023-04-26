const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
// use pascal case to name your schema (e.g. TvShow)
// the schema is the blueprint of how the data should look
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        // validator
        required:[true, 'Title is required'],
        // minLength and maxLength are for string data type
        minLength:[3, 'The title must be 3 or more characters'],
        maxLength:[20, 'The title is too long']
    },
    price: {
        type: Number,
        // validator
        // min and max are for Number data type
        min:[0.01, 'No price under 0.01 allowed']
    },
    description: {
        type: String,
        // validator
        required:[true, 'Description is required'],
        // minLength and maxLength are for string data type
        minLength:[3, 'The description must be 3 or more characters'],
        maxLength:[50, 'The description is too long']
    }
    // timestamps
}, {timestamps:true});

// the model is how we will interact with the data (e.g. create, read, update, delete, etc.)
// 'Product' will be converted to 'products' as the name of the collection
const Product = mongoose.model('Product', ProductSchema);

// we need to export the model so that we can interact with its data in other files (e.g. controller)
module.exports = Product;