const getRacers = (req, res) => {
    // Get the db instance
    const db = req.app.get('db');
    // use the getRacers sql statement
    db.get_racers()
        .then(racers => {
            // racers will be an array with our racers from the db
            // send the racers back
            res.status(200).send(racers);
        });
};

const addRacers = (req, res) => {
    // Get the db instance
    const db = req.app.get('db');
    // add racer using sql statement
    db.add_racer()
        .then(() => {
            // send a response to client
            res.status(200).send('Racer was added!');
        });
};

const updateRacer = (req, res) => {
    // take id from params
    const {id} = req.params;
    // take age from body
    const {age} = req.body;
    // Get the db instance
    const db = req.app.get('db');
    // update racer using sql statement and pass in the age and id
    db.update_racer([age, id])
        .then(() => {
            // send a repsonse to client
            res.status(200).send('Racer updated!');
        });
};

const deleteRacer = (req, res) => {
    // take id from params
    const {id} = req.params;
    // Get the db instance
    const db = req.app.get('db');
    // Remove racer using sql statement passing in the racer id
    db.delete_racer([1])
        .then(() => {
            // send a response to the front end
            res.status(200).send('Racer Removed!')
        })
};

// Export the methods
module.exports = {
    getRacers,
    addRacers,
    updateRacer,
    deleteRacer
};