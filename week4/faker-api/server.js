const express = require("express");
const app = express();
const port = 8000;

// middleware needed for POST data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// we can create a function to return a random / fake "Product"
const { faker } = require('@faker-js/faker');

console.log('User Object:')
console.log(faker.name.firstName());
console.log(faker.internet.password(20, false, /\w/, ''))
console.log(faker.internet.email())
console.log(faker.phone.number())
console.log(faker.database.mongodbObjectId())

console.log('----------')
console.log('Company Object:')
console.log(faker.database.mongodbObjectId())
console.log(faker.company.name())
console.log(faker.address.street())
console.log(faker.address.city())
console.log(faker.address.state())
console.log(faker.address.zipCode())
console.log(faker.address.country())

// function that returns an object of properties for a created user
// key value pair for each property
const createUser = () => {
    return {
        // default password parameters(len: number = 15, memorable: boolean = false,
        // pattern: RegExp = /\w/, prefix: string = '')
        password: faker.internet.password(),
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        _id: faker.database.mongodbObjectId()
    }
}

// function that returns an object of properties for a created company
const createCompany = () => {
    return {
        _id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

// api route that returns a new user
app.get('/api/users/new', (request, response) => {
    const newUser = createUser();
    response.json(newUser);
})

// api route that returns a new company
app.get('/api/companies/new', (request, response) => {
    const newCompany = createCompany();
    response.json(newCompany);
})

// api route that returns both a new user and a new company
app.get('/api/user/company', (request, response) => {
    const newUser = createUser();
    const newCompany = createCompany();
    // create key value pair for data generated via createUser and createCompany functions
    // under userCompany variable
    const userCompany = {
        user: newUser,
        company: newCompany
    };
    response.json(userCompany);
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );