const router = require('express').Router();

const Authors = require('./authorsModel.js');
const restricted = require('../auth/restriction.js');

// authors endpoint fields:  bio, firstName, authorsid (id), lastName, posts, tags, totalLikeCount, totalReadCount
	// queries:  

// getAuthors from authors model
// getTagsByAuthor, getTagsByPost from tags model
// getPosts, getPostsByAuthor, getTotalReadsCount, getTotalLikesCount from posts model

// still need /api/ping and query parameters

// GET:  gets all authors records
router.get('/', restricted, (req, res) => {
	Authors.getAuthors()
		.then(authors => {
			res.status(200).json(
				{
					"success": true
				}
			);
		})
		.catch(err => res.send(err));
});

// GET:  gets one author record
router.get('/:authorsid', restricted, (req, res) => {
	const authorsid = req.params.authorsid;
	if (!authorsid) {
		res.status(404).json({ message: `The author with the specified authorsid ${authorsid} does not exist.` });
	} else {
		Authors.findById(authorsid)
			.then(author => {
				res.status(200).json(author);
			})
			.catch(err => {
				res.status(500).json({ message: `The author information could not be retrieved.`, error: err });
			});
	}
});

// POST:  record author
router.post('/', restricted, (req, res) => {
	const newPayment = req.body;

	Authors.add(newPayment)
		.then(author => {
			res.status(201).json(author);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new author.`, error: err });
		});
});

// PUT:  update author record
router.put('/:authorsid', restricted, (req, res) => {
	const authorsid = req.params.authorsid;
	const updatedPayment = req.body;

	Authors.update(authorsid, updatedPayment)
		.then(author => {
			if (author) {
				res.json(author);
			} else {
				res.status(404).json({ message: `Could not find author with given id ${authorsid}.` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update author.`, error: err });
		});
});

// DELETE:  delete author record
router.delete('/:authorsid', restricted, (req, res) => {
	const authorsid = req.params.authorsid;
	if (!authorsid) {
		res.status(404).json({ message: `The author with the specified ID ${authorsid} does not exist.` });
	}
	Authors.remove(authorsid)
		.then(author => {
			res.json(author);
		})
		.catch(err => {
			res.status(500).json({ message: `The author could not be removed.`, error: err });
		});
});

module.exports = router;
