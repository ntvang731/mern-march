const express = require("express");
const app = express();

// calling the mongoose.config file and running the connect function
// because we are not returning something from the require (i.e. import) of
// moongoose, we don't need to set it to a const variable
// in this case, we are just requiring mongoose to run the database
require("./config/mongoose.config");

// middleware for handling POST data request
app.use(express.json(), express.urlencoded({ extended: true }));

// the 'app.get('/api/allShows', TvShowController.findAllShows)' function from
// tvshow.routes.js is being grabbed and stored here as a const TvShowRoutes
const TvShowRoutes = require("./routes/tvshow.routes");
// the TvShowRoutes (i.e. const variable) is being passed via app to
// the tvshow.routes.js 'module.exports = app => {...} so that we can
// run the queries (e.g. app.get, app.post, etc.)
TvShowRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
