const router = require('express').Router();

const Tags = require('./tagsModel.js');
const restricted = require('../auth/restriction.js');

// GET:  gets all tags records
router.get('/', restricted, (req, res) => {
	Tags.find()
		.then(tags => {
			res.status(200).json(tags);
		})
		.catch(err => res.send(err));
});

// GET:  gets one tag record
router.get('/:tagsid', restricted, (req, res) => {
	const tagsid = req.params.tagsid;
	if (!tagsid) {
		res.status(404).json({ message: `The tag with the specified tagsid ${tagsid} does not exist.` });
	} else {
		Tags.findById(tagsid)
			.then(tag => {
				res.status(200).json(tag);
			})
			.catch(err => {
				res.status(500).json({ message: `The tag information could not be retrieved.`, error: err });
			});
	}
});

// POST:  record tag
router.post('/', restricted, (req, res) => {
	const newTag = req.body;

	Tags.add(newTag)
		.then(tag => {
			res.status(201).json(tag);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new tag.`, error: err });
		});
});

// PUT:  update tag record
router.put('/:tagsid', restricted, (req, res) => {
	const tagsid = req.params.tagsid;
	const updatedTag = req.body;

	Tags.update(tagsid, updatedTag)
		.then(tag => {
			if (tag) {
				res.json(tag);
			} else {
				res.status(404).json({ message: `Could not find tag with given id ${tagsid}.` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update tag.`, error: err });
		});
});
// DELETE:  delete tag record
router.delete('/:tagsid', restricted, (req, res) => {
	const tagsid = req.params.tagsid;
	if (!tagsid) {
		res.status(404).json({ message: `The tag with the specified ID ${tagsid} does not exist.` });
	}
	Tags.remove(tagsid)
		.then(tag => {
			res.json(tag);
		})
		.catch(err => {
			res.status(500).json({ message: `The tag could not be removed.`, error: err });
		});
});

module.exports = router;
