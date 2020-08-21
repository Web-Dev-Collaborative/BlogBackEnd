const router = require('express').Router();

const Tags = require('./tagsModel.js');
const Authors = require('../authors/authorsModel.js');
const Posts = require('../posts/postsModel.js');
const restricted = require('../auth/restriction.js');

const { compare, compare1 } = require('../tags/tagsHelpers.js');

const { cache } = require('../cache/cacheHelpers.js');
/*
- tags endpoints:	
  - [ ] add tag to post
  - [ ] query params to sort asc/desc
*/

// GET:  gets authors per all tags w/ each author's posts for that tag
router.get('/authors', restricted, cache(10), (req, res) => {
	Tags.getAllTags()
		.then(allTags => {
			Tags.getAllAuthorsByAllTags()
				.then(authorsByAllTags => {
					Authors.getPostsByAllAuthors()
						.then(postsByAllAuthors => {
							Authors.getAllTotalLikesCount()
							.then(allTotalLikesCounts => {
								Authors.getAllTotalReadsCount()
									.then(allTotalReadsCounts => {
																			


										let newTagsList = allTags;
										let currentPost, currentTagName, postTagsLength;
										let likesAuthorID, authorsAuthorID, totalLikesCount, currentAuthor;
										let likesLength, authorsLength, totalReadsCount, readsLength;
										let newTagsListLength, currentAuthorsTagName, postsLength;
										let currentPostTagName, currentPostTags, currentPostAuthor;
										// create new array as newTagsList = tags array
										// sort authors, likes, reads & use y for all three
										
										allTotalLikesCounts.sort(compare1);
										allTotalReadsCounts.sort(compare1);
										// loop through likes and add to authors array
										likesLength = allTotalLikesCounts.length;
										authorsLength = authorsByAllTags.length;
										readsLength = allTotalReadsCounts.length;
										newTagsListLength = newTagsList.length;
										postsLength = postsByAllAuthors.length;
										for (let x = 0; x < likesLength; x++){
											likesAuthorID = allTotalLikesCounts[x].authorsid;
											totalLikesCount = allTotalLikesCounts[x].totallikecount;
											for (let y = 0; y < authorsLength; y++){
												authorsAuthorID = authorsByAllTags[y].id;
												if(likesAuthorID === authorsAuthorID){
													authorsByAllTags[y].totalLikesCount = totalLikesCount;
												};
											};
										};
										for (let u = 0; u < authorsLength;u++){
											authorsByAllTags[u].posts = [];
										}
										
										// loop through reads and add to authors array
										for (let x = 0; x < readsLength; x++){
											readsAuthorID = allTotalReadsCounts[x].authorsid;
											totalReadsCount = allTotalReadsCounts[x].totalreadcount;
											currentAuthorID = authorsByAllTags[x].id;
											currentAuthorName = authorsByAllTags[x].author;
											for (let y = 0; y < authorsLength; y++){
												authorsAuthorID = authorsByAllTags[y].id;
												if(readsAuthorID === authorsAuthorID){
													authorsByAllTags[y].totalReadsCount = totalReadsCount;
												};
											};
										};
										for (let x = 0; x < newTagsListLength; x++){
											newTagsList[x].authors = [];
										}
										
										// loop through authors
											// get tagname of each author
										for (let x = 0; x < authorsLength; x++){
											currentAuthorsTagName = authorsByAllTags[x].tagname;
											currentAuthorName = authorsByAllTags[x].author;
											// console.log('authors array info = ' + currentAuthorsTagName, currentAuthorName);
										// loop through posts
											// get tagnames of each post
											for (let y = 0; y < postsLength; y++){
												currentPost = postsByAllAuthors[y];
												postTagsLength = postsByAllAuthors[y].tags.length;
												currentPostTags = postsByAllAuthors[y].tags;
												currentPostAuthor = postsByAllAuthors[y].author;
												// console.log('posts array info = ' + currentPostTags, currentPostAuthor);
												if(currentAuthorName === currentPostAuthor){
												// if author of post matches author from authors array
												// loop through each post's tags
													// if author's tagname matches one of post's tagnames
														// add that post to author's posts array
													for (let z = 0; z < postTagsLength; z++){
														currentPostTagName = currentPostTags[z];
														if(currentPostTagName === currentAuthorsTagName){
															authorsByAllTags[x].posts.push(currentPost);
														}
													}
												}
											}
										}
										// loop through tags
										// loop through authors
										// if authors.tagname == newTagsList.tagname, then add to newTagsList.authors
										
										for (let x = 0; x < newTagsListLength; x++){
											currentTagName = newTagsList[x].tagname;
											for (let y = 0; y < authorsLength; y++){
												currentAuthorsTagName = authorsByAllTags[y].tagname;
												if(currentTagName === currentAuthorsTagName){
													// add authorsByAllTags[y] to newTagsList.authors[x]
													currentAuthor = authorsByAllTags[y];
													newTagsList[x].authors.push(currentAuthor);
												}
											}
										}
										// loop through newTagsList.authors
											// add every property but newTagsList.authors.tagname
										for (let x = 0; x < newTagsListLength; x++){
											currentTag = newTagsList[x];
											authorsLength = newTagsList[x].authors.length;
											for (let y = 0; y < authorsLength; y++){
												currentTag.authors[y] = {
													bio: currentTag.authors[y].bio,
													id: currentTag.authors[y].id,
													author: currentTag.authors[y].author,
													posts: currentTag.authors[y].posts,
													totalLikesCount: currentTag.authors[y].totalLikesCount,
													totalReadsCount: currentTag.authors[y].totalReadsCount
												}
											}
										}

										res.status(200).json(newTagsList);
								})
								.catch(err => res.send(err));
							})
							.catch(err => res.send(err));

						})
						.catch(err => res.send(err));
				})
				.catch(err => res.send(err));
		})
		.catch(err => res.send(err));
});

// GET:  gets posts per all tags
router.get('/posts', restricted, (req, res) => {
	Tags.getAllTags()
		.then(tags => {
			Tags.getAllPostsByAllTags()
				.then(postsByAllTags => {

					let newTagsList = tags;
					let currentTagName, currentPostsTagName;
					let newTagsListLength = newTagsList.length;
					let postsLength = postsByAllTags.length;
					
					// loop through newTagsList;
						// add empty newTagsList[x].posts
					for(let x = 0; x < newTagsListLength; x++){newTagsList[x].posts = [];}
					
					// loop through newTagsList;
					// then loop through postsByAllTags
					// if newTagsList[x].tagname === postsByAllTags[y].tagname
						// add to newTagsList[x].posts
					for(let x = 0; x < newTagsListLength; x++){
						currentTagName = newTagsList[x].tagname;
						for(let y = 0; y < postsLength; y++){
							currentPostsTagName = postsByAllTags[y].tagname;
							if(currentTagName === currentPostsTagName){
								currentPost = 
								{
									"postsid": postsByAllTags[y].postsid,
									"author": postsByAllTags[y].author,
									"authorsid": postsByAllTags[y].authorsid,
									"likes": postsByAllTags[y].likes,
									"reads": postsByAllTags[y].reads
								};
								newTagsList[x].posts.push(currentPost);
							}
						}
					
					}
					res.status(200).json(newTagsList);

				})
				.catch(err => res.send(err));
		})
		.catch(err => res.send(err));
});

// GET:  posts AND authors per all tags
router.get('/', restricted, (req, res) => {
	Tags.getAllTags()
		.then(allTags => {
			Tags.getAllAuthorsByAllTags()
				.then(authorsByAllTags => {
					Authors.getPostsByAllAuthors()
						.then(postsByAllAuthors => {
							Authors.getAllTotalLikesCount()
							.then(allTotalLikesCounts => {
								Authors.getAllTotalReadsCount()
									.then(allTotalReadsCounts => {
										Tags.getAllPostsByAllTags()
											.then(postsByAllTags => {
												let newTagsList = allTags;
												let currentPost, currentTagName, postTagsLength;
												let likesAuthorID, authorsAuthorID, totalLikesCount, currentAuthor;
												let likesLength, authorsLength, totalReadsCount, readsLength;
												let newTagsListLength, currentAuthorsTagName, postsLength;
												let currentPostTagName, currentPostTags, currentPostAuthor;
												// create new array as newTagsList = tags array
												// sort authors, likes, reads & use y for all three
												
												allTotalLikesCounts.sort(compare1);
												allTotalReadsCounts.sort(compare1);
												// loop through likes and add to authors array
												likesLength = allTotalLikesCounts.length;
												authorsLength = authorsByAllTags.length;
												readsLength = allTotalReadsCounts.length;
												newTagsListLength = newTagsList.length;
												postsLength = postsByAllAuthors.length;
												for (let x = 0; x < likesLength; x++){
													likesAuthorID = allTotalLikesCounts[x].authorsid;
													totalLikesCount = allTotalLikesCounts[x].totallikecount;
													for (let y = 0; y < authorsLength; y++){
														authorsAuthorID = authorsByAllTags[y].id;
														if(likesAuthorID === authorsAuthorID){
															authorsByAllTags[y].totalLikesCount = totalLikesCount;
														};
													};
												};
												for (let u = 0; u < authorsLength;u++){
													authorsByAllTags[u].posts = [];
												}
												
												// loop through reads and add to authors array
												for (let x = 0; x < readsLength; x++){
													readsAuthorID = allTotalReadsCounts[x].authorsid;
													totalReadsCount = allTotalReadsCounts[x].totalreadcount;
													currentAuthorID = authorsByAllTags[x].id;
													currentAuthorName = authorsByAllTags[x].author;
													for (let y = 0; y < authorsLength; y++){
														authorsAuthorID = authorsByAllTags[y].id;
														if(readsAuthorID === authorsAuthorID){
															authorsByAllTags[y].totalReadsCount = totalReadsCount;
														};
													};
												};
												for (let x = 0; x < newTagsListLength; x++){
													newTagsList[x].authors = [];
												}
												
												// loop through authors
													// get tagname of each author
												for (let x = 0; x < authorsLength; x++){
													currentAuthorsTagName = authorsByAllTags[x].tagname;
													currentAuthorName = authorsByAllTags[x].author;
													// console.log('authors array info = ' + currentAuthorsTagName, currentAuthorName);
												// loop through posts
													// get tagnames of each post
													for (let y = 0; y < postsLength; y++){
														currentPost = postsByAllAuthors[y];
														postTagsLength = postsByAllAuthors[y].tags.length;
														currentPostTags = postsByAllAuthors[y].tags;
														currentPostAuthor = postsByAllAuthors[y].author;
														// console.log('posts array info = ' + currentPostTags, currentPostAuthor);
														if(currentAuthorName === currentPostAuthor){
														// if author of post matches author from authors array
														// loop through each post's tags
															// if author's tagname matches one of post's tagnames
																// add that post to author's posts array
															for (let z = 0; z < postTagsLength; z++){
																currentPostTagName = currentPostTags[z];
																if(currentPostTagName === currentAuthorsTagName){
																	authorsByAllTags[x].posts.push(currentPost);
																}
															}
														}
													}
												}
												// loop through tags
												// loop through authors
												// if authors.tagname == newTagsList.tagname, then add to newTagsList.authors
												
												for (let x = 0; x < newTagsListLength; x++){
													currentTagName = newTagsList[x].tagname;
													for (let y = 0; y < authorsLength; y++){
														currentAuthorsTagName = authorsByAllTags[y].tagname;
														if(currentTagName === currentAuthorsTagName){
															// add authorsByAllTags[y] to newTagsList.authors[x]
															currentAuthor = authorsByAllTags[y];
															newTagsList[x].authors.push(currentAuthor);
														}
													}
												}
												// loop through newTagsList.authors
													// add every property but newTagsList.authors.tagname
												for (let x = 0; x < newTagsListLength; x++){
													currentTag = newTagsList[x];
													authorsLength = newTagsList[x].authors.length;
													for (let y = 0; y < authorsLength; y++){
														currentTag.authors[y] = {
															bio: currentTag.authors[y].bio,
															id: currentTag.authors[y].id,
															author: currentTag.authors[y].author,
															posts: currentTag.authors[y].posts,
															totalLikesCount: currentTag.authors[y].totalLikesCount,
															totalReadsCount: currentTag.authors[y].totalReadsCount
														}
													}
												}

												newTagsListLength = newTagsList.length;
												postsLength = postsByAllTags.length;
												
												// loop through newTagsList;
													// add empty newTagsList[x].posts
												for(let x = 0; x < newTagsListLength; x++){newTagsList[x].posts = [];}
												
												// loop through newTagsList;
												// then loop through postsByAllTags
												// if newTagsList[x].tagname === postsByAllTags[y].tagname
													// add to newTagsList[x].posts
												for(let x = 0; x < newTagsListLength; x++){
													currentTagName = newTagsList[x].tagname;
													for(let y = 0; y < postsLength; y++){
														currentPostsTagName = postsByAllTags[y].tagname;
														if(currentTagName === currentPostsTagName){
															currentPost = 
															{
																"postsid": postsByAllTags[y].postsid,
																"author": postsByAllTags[y].author,
																"authorsid": postsByAllTags[y].authorsid,
																"likes": postsByAllTags[y].likes,
																"reads": postsByAllTags[y].reads
															};
															newTagsList[x].posts.push(currentPost);
														}
													}
												}
												res.status(200).json(newTagsList);
											})
											.catch(err => res.send(err));
									})
									.catch(err => res.send(err));
							})
							.catch(err => res.send(err));
						})
						.catch(err => res.send(err));
				})
				.catch(err => res.send(err));
		})
		.catch(err => res.send(err));
});

// GET:  get all authors per single tag
	// /tags/<tag>/authors
	// chain getOneTag, getAllAuthorsByOneTag
router.get('/:tagname/authors', restricted, (req, res) => {
	const tagName = req.params.tagname;
	Tags.getOneTag(tagName)
		.then(tag => {
			Tags.getAllAuthorsByOneTag(tagName)
				.then(authorsByOneTag => {
					
					res.status(200).json({tag: tag, authors: authorsByOneTag, tagName: tagName});

				})
				.catch(err => res.send({error: err, tagName: tagName}));
		})
		.catch(err => res.send({error: err, tagName: tagName}));
});

// GET:  get all posts per single tag
    // /tags/<tag>/posts
	// chain getOneTag, getAllPostsByOneTag
router.get('/:tagname/posts', restricted, (req, res) => {
	const tagName = req.params.tagname;
	Tags.getOneTag(tagName)
		.then(tags => {
			Tags.getAllPostsByOneTag(tagName)
				.then(postsByOneTag => {

					res.status(200).json({tags: tags, posts: postsByOneTag});

				})
				.catch(err => res.send(err));
		})
		.catch(err => res.send(err));
});

// GET:  get all posts AND authors per single tag
	// /tags/<tag>
	// chain getOneTag, getAllAuthorsByOneTag, getAllPostsByOneTag
router.get('/:tagname', restricted, (req, res) => {
	const tagName = req.params.tagname;
	Tags.getOneTag(tagName)
		.then(tags => {
			Tags.getAllAuthorsByOneTag(tagName)
				.then(authorsByOneTag => {

					Tags.getAllPostsByOneTag()
					.then(postsByOneTag => {

						res.status(200).json({tags: tags, authors: authorsByOneTag, posts: postsByOneTag});

					})
					.catch(err => res.send(err));
				})
				.catch(err => res.send(err));
		})
		.catch(err => res.send(err));
});

// GET:  get all tags for one post
	// /tags/posts/<postsid>
	// getTagsByPost(postsID)
router.get('/posts/:postsid', restricted, (req, res) => {
	const postsID = req.params.postsid;
	Tags.getTagsByPost(postsID)
		.then(tags => {
			res.status(200).json({tags: tags});
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
