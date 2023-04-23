const express = require("express");
const app = express();
const port = 8000;

// make sure these lines are above any app.get and app.post code blocks; these are middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// we can create a function to return a random / fake "Product"
const { faker } = require('@faker-js/faker');

console.log(faker.name.firstName());

const createUser = () => {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
    }
}


app.get('/user', (request, response) => {
    const newUser = createUser();
    response.json(newUser)
})







app.listen( port, () => console.log(`Listening on port: ${port}`) );

// lines 1 through 7 & the line with app.listen are the boilerplate starting server code we will ALWAYS need them
