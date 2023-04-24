const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
// use pascal case to name your schema (e.g. TvShow)
// mongoose methoed of schema that establishes an object per the curly brackets
// the schema is the blueprint of how the data should look
const TvShow = new mongoose.Schema({
    title: {
        type: String,
        // validator
        required:[true, 'Title is required'],
        // minLength and maxLength are for string data type
        minLength:[3, 'The title must be 3 or more characters'],
        maxLength:[10, 'The title is too long']
    },
    releaseYear: {
        type: Number,
        // validator
        // min and max are for Number data type
        min:[1920, 'No shows before 1920 allowed']
    },
    network: {
        type: String,
        // validator
        required:[true, 'Network is required'],
        // minLength and maxLength are for string data type
        minLength:[3, 'The network must be 3 or more characters'],
        maxLength:[10, 'The network is too long']
    },
    creator: {
        type: String,
        // validator
        required:[true, 'Creator is required'],
        // minLength and maxLength are for string data type
        minLength:[3, 'The creator must be 3 or more characters'],
        maxLength:[10, 'The creator is too long']
    },
    genre: {
        type: String,
        // validator
        required:[true, 'Genre is required'],
        // minLength and maxLength are for string data type
        minLength:[3, 'The genre must be 3 or more characters'],
        maxLength:[10, 'The genre is too long']
    }
    // add timestamps
}, {timestamps:true});

// const User = mongoose.model('User', UserSchema);
// schema name is also utilized here as a parameter
// the model is how we will interact with the data (e.g. create, read, update, delete, etc.)
const Show = mongoose.model('Show', TvShow);

// we need to export the model so that we can interact with its data in other files (e.g. controller)
// as it stands, we are modularizing the model data
module.exports = Show;