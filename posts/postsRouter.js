const router = require('express').Router();

const Posts = require('./postsModel.js');
const restricted = require('../auth/restriction.js');

// GET:  gets all posts records
router.get('/', restricted, (req, res) => {
	Posts.find()
		.then(posts => {
			res.status(200).json(posts);
		})
		.catch(err => res.send(err));
});

// GET:  gets one single_post record
router.get('/:postsid', restricted, (req, res) => {
	const postsid = req.params.postsid;
	if (!postsid) {
		res.status(404).json({ message: `The single_post with the specified postsid ${postsid} does not exist.` });
	} else {
		Posts.findById(postsid)
			.then(single_post => {
				res.status(200).json(single_post);
			})
			.catch(err => {
				res.status(500).json({ message: `The single_post information could not be retrieved.`, error: err });
			});
	}
});

// POST:  record single_post
router.post('/', restricted, (req, res) => {
	const newPost = req.body;

	Posts.add(newPost)
		.then(single_post => {
			res.status(201).json(single_post);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new single_post.`, error: err });
		});
});

// PUT:  update single_post record
router.put('/:postsid', restricted, (req, res) => {
	const postsid = req.params.postsid;
	const updatedPost = req.body;

	Posts.update(postsid, updatedPost)
		.then(single_post => {
			if (single_post) {
				res.json(single_post);
			} else {
				res.status(404).json({ message: `Could not find single_post with given id ${postsid}.` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update single_post.`, error: err });
		});
});
// DELETE:  delete single_post record
router.delete('/:postsid', restricted, (req, res) => {
	const postsid = req.params.postsid;
	if (!postsid) {
		res.status(404).json({ message: `The single_post with the specified ID ${postsid} does not exist.` });
	}
	Posts.remove(postsid)
		.then(single_post => {
			res.json(single_post);
		})
		.catch(err => {
			res.status(500).json({ message: `The single_post could not be removed.`, error: err });
		});
});

module.exports = router;
