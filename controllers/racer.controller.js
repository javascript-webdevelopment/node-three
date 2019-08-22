const getRacers = (req, res) => {
    // Get the db instance
    const db = req.app.get('db');
    // use the getRacers sql statement
    db.getRacers()
        .then(racers => {
            // racers will be an array with our racers from the db
            // send the racers back
            res.status(200).send(racers);
        });
};