//Define route handlers 

const express = require('express');

const studentData = require('./studentData.json');

//create an instance of an express application
//when this function is called it creates an express application and asigns it to the var app
const app = express();

//Define routes

//Healthecheck route 

app.get('/', (request, response) => {
    response.status(200).json({ data: "Service is running"});
});

// GET/students
//define path + method and handler
//catch errros
app.get('/students', (request, response) => {
    try {
        const { students } = studentData;
        response.status(200).json({ data: students })
    } catch (err) {
        response.status(500).json({ error : err.message})
    }
});

module.exports = app;