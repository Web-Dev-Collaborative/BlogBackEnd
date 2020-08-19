const router = require('express').Router();

const Authors = require('./authorsModel.js');
const restricted = require('../auth/restriction.js');

// authors endpoint fields:  bio, firstName, authorsid (id), lastName, posts, tags, totalLikeCount, totalReadCount

// GET:  gets all authors records
router.get('/', restricted, (req, res) => {
	Authors.getAuthors()
		.then(authors => {
			res.status(200).json(authors);
		})
		.catch(err => res.send(err));
});

// GET:  gets one author record, including posts and total likes & reads counts
router.get('/:authorsid', restricted, (req, res) => {
	const authorsid = req.params.authorsid;
	if (!authorsid) {
		res.status(404).json({ message: `The author with the specified authorsid ${authorsid} does not exist.` });
	} else {
		Authors.getAuthor(authorsid)
			.then(author => {
			Authors.getPostsByAuthor(authorsid)
				.then(oneAuthorsPosts => {
					Authors.getTagsByAuthor(authorsid)
					.then(oneAuthorsTags => {
						Authors.getTotalLikesCount(authorsid)
							.then(likes =>
								Authors.getTotalReadsCount(authorsid)
									.then(reads =>
										res.status(200).json({
															  bio: author.bio,
															  firstName: author.firstName,
															  id: author.id, 
															  lastName: author.lastName,
															  posts: oneAuthorsPosts, 
															  tags: oneAuthorsTags, 
															  totalLikeCount: likes.totalLikeCount, 
															  totalReadCount: reads.totalReadCount
															})
									)
								.catch(err => {
									res.status(500).json({ message: `Author total reads could not be retrieved.`, error: err });
								})
							)
							.catch(err => {
								res.status(500).json({ message: `Author total likes could not be retrieved.`, error: err });
							})
					})
					.catch(err => {
						res.status(500).json({ message: `The author's tags could not be retrieved.`, error: err });
					});

				})
				.catch(err => {
					res.status(500).json({ message: `The author's posts could not be retrieved.`, error: err });
				})
			})
			.catch(err => {
				res.status(500).json({ message: `The author information could not be retrieved.`, error: err });
			})
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
