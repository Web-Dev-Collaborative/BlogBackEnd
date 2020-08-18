const router = require('express').Router();

const Ping = require('./pingModel.js');

// GET:  ping server
router.get('/', (req, res) => {
	Ping.find()
		.then(authors => {
			res.status(200).json({"success": true});
		})
		.catch(err => res.send(err));
});
