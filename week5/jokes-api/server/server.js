const express = require("express");
const app = express();

// calling the mongoose.config file and running the connect function
// because we are not returning something from the require (i.e. import) of
// moongoose, we don't need to set it to a const variable
// in this case, we are just requiring mongoose to run the database
require("./config/mongoose.config");

// middleware for handling POST data request
app.use(express.json(), express.urlencoded({ extended: true }));

// the 'app.get('/api/allJokes', TvShowController.findAllShows)' function from
// joke.routes.js is being grabbed and stored here as a const JokeRoutes
// importing joke routes
const JokeRoutes = require("./routes/joke.routes");
// the JokeRoutes (i.e. const variable) is being passed via app to
// the joke.routes.js 'module.exports = app => {...} so that we can
// run the queries (e.g. app.get, app.post, etc.)
JokeRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));