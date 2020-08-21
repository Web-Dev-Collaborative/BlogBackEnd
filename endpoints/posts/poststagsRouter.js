const router = require('express').Router();

const Poststags = require('./poststagsModel.js');
const restricted = require('../../auth/restriction.js');

const { cache } = require('../../cache/cacheHelpers.js');

// GET:  gets all poststags records
router.get('/', restricted, cache(10), (req, res) => {
	Poststags.find()
		.then(Poststags => {
			res.status(200).json(Poststags);
		})
		.catch(err => res.send(err));
});

// GET:  gets one poststags record
router.get('/:poststagsid', restricted, cache(10), (req, res) => {
	const poststagsid = req.params.poststagsid;
	if (!poststagsid) {
		res.status(404).json({ message: `The posttag with the specified poststagsid ${poststagsid} does not exist.` });
	} else {
		Poststags.findById(poststagsid)
			.then(posttag => {
				res.status(200).json(posttag);
			})
			.catch(err => {
				res.status(500).json({ message: `The posttag information could not be retrieved.`, error: err });
			});
	}
});

// POST:  record poststags
router.post('/', restricted, (req, res) => {
	const newposttag = req.body;

	Poststags.add(newposttag)
		.then(posttag => {
			res.status(201).json(posttag);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new posttag.`, error: err });
		});
});

// PUT:  update poststags record (add tag to post)
router.put('/:poststagsid', restricted, (req, res) => {
	const poststagsid = req.params.poststagsid;
	const updatedposttag = req.body;

	Poststags.update(poststagsid, updatedposttag)
		.then(posttag => {
			if (posttag) {
				res.json(posttag);
			} else {
				res.status(404).json({ message: `Could not find posttag with given id ${poststagsid}.` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update posttag.`, error: err });
		});
});

// DELETE:  delete poststags record
router.delete('/:poststagsid', restricted, (req, res) => {
	const poststagsid = req.params.poststagsid;
	if (!poststagsid) {
		res.status(404).json({ message: `The posttag with the specified ID ${poststagsid} does not exist.` });
	}
	Poststags.remove(poststagsid)
		.then(posttag => {
			res.json(posttag);
		})
		.catch(err => {
			res.status(500).json({ message: `The posttag could not be removed.`, error: err });
		});
});

module.exports = router;
