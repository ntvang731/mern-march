const express = require("express");
const app = express();
const port = 8000;

// make sure these lines are above any app.get and app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const users below is an array of objects representing some data that would normally
// come from a database; for this example it's just a hard code of data
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

// List of instructions AKA our routes and controllers

// Request is an object and if the user passes in any data whether that data comes from a form or
// a parameter in the url, it will be in the request
// Response is what we send back to the client; you will always send back json in this class
app.get("/api/users", (request, response) => {
    response.json(users);
})

app.post("/api/users", (request, response) => {
    // request.body will contain the form data from Postman or from React
    console.log(request.body);
    // we can push it into the users array for now...
    // later on this  will be inserted into a database
    users.push(request.body);
    // we always need to respond with something
    // either a message, the array of objects, etc
    // response.json( { status: "ok"})
    response.json(users);
})

// if we want to get a user with a specific id, we can make the id a part of the url
// be sure to preface the id variable with a `:` colon
app.get("/api/users/:id", (request, response) => {
    // we can get this `id` variable from req.params
    console.log(request.params.id);
    console.log(request.params)
    // assuming this id is the index of the users array we could return one user this way
    response.json( users[request.params.id] );
});

// updating data using a put request:
app.patch("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can replace the user like so
    users[id] = req.body;
    // we always need to respond with something
    res.json( { status: "ok" } );
});

// deleting data using a delete request.
app.delete("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can remove the user like so
    users.splice(id, 1);
    // we always need to respond with something
    res.json( { status: "ok" } );
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );

// lines 1 through 7 & the line with app.listen are the boilerplate starting server code we will ALWAYS need them