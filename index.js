// Require DOTENV to get ENV variable
require('dotenv').config();
const express = require('express');
const massive = require('massive');

// Controller File
const racerCtrl = require('./controllers/racer.controller');

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
app.get('/api/racers', racerCtrl.getRacers);

app.post('/api/racers', racerCtrl.addRacers);

app.put('/api/racers/:id', racerCtrl.updateRacer);

app.delete('/api/racers/:id', racerCtrl.deleteRacer);

// Server Listening
app.listen(8080, () => console.log('Server Running!'))