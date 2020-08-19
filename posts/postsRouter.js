const router = require('express').Router();

const Posts = require('./postsModel.js');
const Authors = require('../authors/authorsModel.js');
const Tags = require('../tags/tagsModel.js');


const restricted = require('../auth/restriction.js');

const { isTagsFieldArray, validateTag, isTagIncluded } = require('./postsHelpers.js');
/*
If a `sortBy` or `direction` are invalid values, specify an error like below:
	Response body (JSON):
	{
		"error": "sortBy parameter is invalid"
	}
Response status code: 400
*/

// getAuthors from authors model
// getTagsByAuthor, getTagsByPost from tags model
// getPosts, getPostsByAuthor, getTotalReadsCount, getTotalLikesCount from posts model



// GET:  gets all posts records
router.get('/', restricted, (req, res) => {
	// if req.query.tags is empty, return error response
	if(!req.query.tags){res.status(400).json({"error": "Tags parameter is required"});}
	const tagsField = req.query.tags;
	// sort by id, reads, likes  (any??)
	const sortField = req.query.sortBy;
	// direction asc or desc only, default = asc
	const directionField = req.query.direction;
	Posts.getPosts()
		.then(posts => {
			if (!posts) {
				res.status(404).json({
					message: `Posts do not exist.`,
					error: err
				});
			}
			else{
				// validate tagsField
					// if tagsField values are one of available tags
						// available tags:  culture, design, health, history, politics, science, startups, tech
					// if tagsField is array or not
				let filteredResults, newTagsField, currentTags, tagToCheck, shouldTagBeIncluded;
				if(tagsField.includes(",")){newTagsField = tagsField.split(",");}
				else{newTagsField = tagsField};
				let isArray = isTagsFieldArray(newTagsField);
				let isValidTag = validateTag(newTagsField);
				if(isArray === true){
					// if IS valid tag, run filterResults on response and return it
					if(isValidTag === true){
						filteredResults = posts.posts.filter(post => {
							if (post.tags.includes(",") == true || Array.isArray(post.tags)){
								if(Array.isArray(post.tags)){currentTags = post.tags}
								else{currentTags = post.tags.split(",");}
								for(let y = 0; y < currentTags.length; y++){
									tagToCheck = currentTags[y];
									for(let x = 0; x < newTagsField.length; x++){
										tagIncluded = newTagsField[x];
										shouldTagBeIncluded = isTagIncluded(tagToCheck, tagIncluded);
										return shouldTagBeIncluded;
									}
								}
							}
							else {
								currentTags = post.tags;
								for(let x = 0; x < newTagsField.length; x++){
									tagIncluded = newTagsField[x];
									shouldTagBeIncluded = isTagIncluded(tagToCheck, tagIncluded);
									return shouldTagBeIncluded;
								}
							};
						});
						res.status(200).json({posts: filteredResults});
						/*
						res.status(200).json({posts: "This is an array.", 
											  "is tags qp valid": isValidTag,
											  "is tags qp array": isArray,
											  "attempted tags query params": tagsField
											});
						*/
					}
					else if(isValidTag === false){
						// if IS NOT valid tag, return error response
						res.status(400).json({"error": "Tags parameter is an invalid array.", 
											  "is tags qp valid": isValidTag,
											  "is tags qp array": isArray,
											  "attempted tags query params": newTagsField
											});
					};
				}
				// if IS NOT an array
				if(isArray === false){
					if(isValidTag === true){
						// if IS valid tag, return filtered results
						filteredResults = posts.filter(post => {return post.tags.indexOf(newTagsField) >= 0});
						res.status(200).json({posts: filteredResults});
					}
					else if(isValidTag === false){
						// if IS NOT valid tag, return error response
						res.status(400).json({"error": "Tags parameter is an invalid string.", 
											  "is tags qp valid": isValidTag,
											  "is tags qp array": isArray,
											  "attempted tags query params": newTagsField
											});
					};
				}
			}
		})
		.catch(err => res.send(err));
	});
	

// GET:  gets one single_post record
router.get('/:postsid', restricted, (req, res) => {
	const postsid = req.params.postsid;
	if (!postsid) {
		res.status(404).json({ message: `The post with the specified postsid ${postsid} does not exist.` });
	} else {
		Posts.findById(postsid)
			.then(single_post => {
				res.status(200).json(single_post);
			})
			.catch(err => {
				res.status(500).json({ message: `The post information could not be retrieved.`, error: err });
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
			res.status(500).json({ message: `Failed to create new post.`, error: err });
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
				res.status(404).json({ message: `Could not find post with given id ${postsid}.` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update post.`, error: err });
		});
});
// DELETE:  delete single_post record
router.delete('/:postsid', restricted, (req, res) => {
	const postsid = req.params.postsid;
	if (!postsid) {
		res.status(404).json({ message: `The post with the specified ID ${postsid} does not exist.` });
	}
	Posts.remove(postsid)
		.then(single_post => {
			res.json(single_post);
		})
		.catch(err => {
			res.status(500).json({ message: `The post could not be removed.`, error: err });
		});
});

module.exports = router;
