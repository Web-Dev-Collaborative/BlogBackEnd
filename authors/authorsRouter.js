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
				Authors.getPostsByAllAuthors()
					.then(posts => {
						if (!posts) {
							res.status(404).json({
								message: `Posts do not exist.`,
								error: err
							});
						} else {
							Authors.getTagsByAllAuthors()
							.then(tagsPerAuthor =>{
								if (!tagsPerAuthor) {
									res.status(404).json({
										message: `Tags do not exist.`,
										error: err
									});
								} else {
									Authors.getAllTotalLikesCount()
										.then(likesPerAuthor =>{
											if (!likesPerAuthor) {
												res.status(404).json({
													message: `Total likes count does not exist.`,
													error: err
												});
											} else {
												Authors.getAllTotalReadsCount()
													.then(readsPerAuthor =>{
														if (!readsPerAuthor) {
															res.status(404).json({
																message: `Total reads count does not exist.`,
																error: err
															});
														} else {
															// authors, posts, tagsPerAuthor, likesPerAuthor, readsPerAuthor
															let oneAuthorsTags = {
																"authors": authors,
																"posts": posts,
																"tags": tagsPerAuthor,
																"totalLikeCount": likesPerAuthor,
																"totalReadCount": readsPerAuthor
															};
															let authorsid;
															let newAuthors = oneAuthorsTags.authors;
															for(let v = 0; v < oneAuthorsTags.authors.length; v++){
																authorsid = oneAuthorsTags.authors[v].id;
																newAuthors[v].posts = [];
																// loop through posts
																for(let w = 0; w < oneAuthorsTags.posts.length; w++){
																	let postAuthorsId = oneAuthorsTags.posts[w].authorId;
																	if(authorsid === postAuthorsId){
																		// do something to posts matching author
																		let currentPost = oneAuthorsTags.posts[w];
																		newAuthors[v].posts.push(currentPost);
																	}
																	// loop through tags
																	for(let x = 0; x < oneAuthorsTags.tags.length; x++){
															
																		let tagsAuthorsId = oneAuthorsTags.tags[x].authorsid;
																		if(authorsid === tagsAuthorsId){
																			// do something to tags matching author
																			let currentTags = oneAuthorsTags.tags[x].tags;
																			newAuthors[v].tags = currentTags;
																		}
																		// loop through totalLikeCount
																		for(let y = 0; y < oneAuthorsTags.totalLikeCount.length; y++){
																			let tlcAuthorsId = oneAuthorsTags.totalLikeCount[y].authorsid;
																			if(authorsid === tlcAuthorsId){
																				// do something to totalLikeCount matching author
																				let tlcValue = oneAuthorsTags.totalLikeCount[y].totallikecount;
																				newAuthors[v].totalLikeCount = tlcValue;
																			}
																			// loop through totalReadCount
																			for(let z = 0; z < oneAuthorsTags.totalReadCount.length; z++){
																				let trcAuthorsId = oneAuthorsTags.totalReadCount[z].authorsid;
																				if(authorsid === trcAuthorsId){
																					let trcValue = oneAuthorsTags.totalReadCount[z].totalreadcount;
																					// do something to totalReadCount matching author
																					newAuthors[v].totalReadCount = trcValue;
																				}
																			
																			}
																		}
																	}
																}
															}
															// remove duplicate tags
															for (let u = 0; u < newAuthors.length; u++){
																newAuthors[u].tags = newAuthors[u].tags.filter((item, index)=>{return newAuthors[u].tags.indexOf(item) >= index;});
															}





























															res.status(200).json(newAuthors);
														}
													})
													.catch(err => res.send(err));
											}
										})
										.catch(err => res.send(err));


								}
							})
							.catch(err => res.send(err));
						}
					})
					.catch(err => res.send(err));
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
