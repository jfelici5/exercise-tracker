const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find() //mongoose method that gets all users from database
        .then(users => res.json(users)) //gets all users and returns user information in JSON format
        .catch(err => res.status(400).json('Error ' + err)) //error response
});

router.route('/add').post((req, res) => {
    const username = req.body.username; 

    const newUser = new User({username});

    newUser.save() //saves user to database
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;