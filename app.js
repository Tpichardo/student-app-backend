//Define route handlers 

const express = require('express');

//create an instance of an express application
//when this function is called it creates an express application and asigns it to the var app
const app = express();

//Define routes

//Healthecheck route 

app.get('/', (request, response) => {
    response.status(200).json({ data: "Service is running"});

});

module.exports = app;