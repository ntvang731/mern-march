const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
// use pascal case to name your schema (e.g. TvShow, Joke, etc.)
// mongoose methoed of schema that establishes an object per the curly brackets
// the schema is the blueprint of how the data should look (equivalent to table schema in MySQL)
// const APIJoke must match APIJoke parameter on line 29 when calling mongoose.model
const APIJoke = new mongoose.Schema({
    setup: {
        type: String,
        // validator
        required:[true, 'Setup is required'],
        // minLength and maxLength are for string data type
        minLength:[10, 'The setup must be 10 or more characters'],
    },
    punchline: {
        type: String,
        // validator
        // minLength and maxLength are for string data type
        minLength:[3, 'The punchline must be 3 or more characters'],
    }
    // createdAt and updatedAt timestamps
}, {timestamps:true});

// const User = mongoose.model('User', UserSchema);
// schema name is also utilized here as a parameter
// the model is how we will interact with the data (e.g. create, read, update, delete, etc.)
// the parameters must be named differently (i.e. Joke versus APIJoke)
const Joke = mongoose.model('Joke', APIJoke);

// we need to export the model so that we can interact with its data in other files (e.g. controller)
// as it stands, we are modularizing the model data
module.exports = Joke;