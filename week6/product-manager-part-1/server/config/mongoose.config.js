// need to import and install mongoose
const mongoose = require('mongoose');

// running mongoose connect method to connect to database
// name_of_your_DB will need to be changed to the name of your database
// if the name of the database does not exist, then whatever you
// call it here will cause the database to be created (e.g. tvShows)
// mongoose.connect('mongodb://127.0.0.1:27017/tvShows', {
mongoose.connect('mongodb://127.0.0.1:27017/products', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

