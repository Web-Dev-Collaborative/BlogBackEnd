const router = require('express').Router();

const Posts = require('../posts/postsModel.js');
const Authors = require('../authors/authorsModel.js');
const Tags = require('../tags/tagsModel.js');

const restricted = require('../auth/restriction.js');

// authors endpoint fields:  bio, firstName, authorsid (id), lastName, posts, tags, totalLikeCount, totalReadCount

/*
all authors object
{
	bio
	firstName
	id
	lastName
	posts: identical to all posts endpoint only with one author
	tags: identical to one author endpoint
	totalLikeCount
	totalReadCount
}

*/

// GET:  gets all authors records, including posts and total likes & reads counts
router.get('/', restricted, (req, res) => {
	Authors.getAllAuthors()
		.then(authors => {
			if (!authors) {
				res.status(404).json({
					message: `Authors do not exist.`,
					error: err
				});
			} else {
				// authors, posts, tagsPerAuthor, likesPerAuthor, readsPerAuthor
				res.status(200).json(authors);
			}
		})
		.catch(err => res.send(err));
});
// 

// GET:  gets one author record, including posts and total likes & reads counts
router.get('/:authorsid', restricted, (req, res) => {
	const authorsid = req.params.authorsid;
	if (!authorsid) {
		res.status(404).json({ message: `The author with the specified authorsid ${authorsid} does not exist.` });
	} else {
		let filteredTags;
		Authors.getAuthor(authorsid)
			.then(author => {
			Authors.getPostsByAuthor(authorsid)
				.then(oneAuthorsPosts => {
					Authors.getTagsByAuthor(authorsid)
					.then(oneAuthorsTags => {
						Authors.getTotalLikesCount(authorsid)
							.then(likes =>
								Authors.getTotalReadsCount(authorsid)
									.then(reads =>{
										filteredTags = oneAuthorsTags[0].tags.filter((item, index)=>{return oneAuthorsTags[0].tags.indexOf(item) >= index;});
										res.status(200).json({
															  bio: author[0].bio,
															  firstName: author[0].firstName,
															  id: author[0].id,
															  lastName: author[0].lastName,
															  posts: oneAuthorsPosts, 
															  tags: filteredTags, 
															  totalLikeCount: likes[0].totallikecount, 
															  totalReadCount: reads[0].totalreadcount
															})
										})
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
