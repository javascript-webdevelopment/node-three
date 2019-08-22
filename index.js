// Require DOTENV to get ENV variable
require('dotenv').config();
const express = require('express');
const massive = require('massive');

// .ENV Variables
const {
    CONNECTION_STRING
} = process.env;

// Setup App
const app = express();

// TLM
app.use(express.json());

// Database Connection
// massive will execute this connection upon every single start of the server
massive(CONNECTION_STRING).then((dbInstance) => {
    // set the database instance to app
    app.set('db', dbInstance);
    // log to the console for successful connection
    console.log('Database Connected!')
});

// End Points
app.get('/api/racers');

app.post('/api/racers');

app.put('/api/racers/:id');

app.delete('/api/racers/:id');

// Server Listening
app.listen(8080, () => console.log('Server Running!'))