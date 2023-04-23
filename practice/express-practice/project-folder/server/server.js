const express = require("express"); // require implies import; importing express after having installed it
const app = express(); // declare variable app and setting it to express function
const port = 8000; // set port to 8000 instead of having to hard code it

// POST Data
// In order to be able to access POST data, we need to be able to pull it out of the request
// object. To do this, we first have to add a new setting to our server.js file:
// make sure these lines are above any app.get or app.post code blocks
// express.urlencoded() and express.json() are Express middleware functions and
// are responsible for providing and parsing the request.body data
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// list of instructions
// get method at host 8000/api
// callback function that takes in two arguments; 1. request from client 2. response to client
app.get("/api", (req, res) => {
    // response that sends back a javascript object message
    res.json({ message: "Hello World!" });
});

// post method
app.post("/api/postData", (req, res) => {
    console.log(req.body)
    // res.json({ message: "Posted Data"})
    res.json({ requestBody: req.body})

})

// this needs to be below the other code blocks
console.log("Hi Bob")
app.listen( port, () => console.log(`Listening on port: ${port}`) ); // listen at port 8000 and console logging at that port
// node server.js does not show update immediately (i.e. will have to restart server to see update)
// use nodemon server.js ('npm install -g nodemon' for global installation) to see update immediately
// see this in action by changing the console log message
