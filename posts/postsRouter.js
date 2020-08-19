const router = require('express').Router();

const Posts = require('./postsModel.js');
const Authors = require('../authors/authorsModel.js');
const Tags = require('../tags/tagsModel.js');


const restricted = require('../auth/restriction.js');

const { 
    isTagsFieldArray,
    isTagValid,
    validateTag,
	filterResults 
} = require('./postsHelpers.js');

// still need query parameters

/*

If `tags` parameter is not present:
	Response body (JSON):
	{
		"error": "Tags parameter is required"
	}
Response status code: 400

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
	// validate tagsField
		// if tagsField values are one of available tags
			// available tags:  culture, design, health, history, politics, science, startups, tech
		// if tagsField is array or not
	const isArray = isTagsFieldArray(tagsField);
	let newTagsField;
	if(tagsField.includes(',')){
		newTagsField = tagsField.split(",");
	}
	else{
		newTagsField = tagsField
	}
	const isValidTag = validateTag(newTagsField);
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
				if(isValidTag === true){
					let filteredResults;
					// if IS valid tag, run filterResults on response and return it
					if(isArray === true){
						/*
						filteredResults = posts.posts.filter(post => {
							for (let x = 0; x < tagsField.length; x++) {
								if (post.tags.includes(tagsField[x])) {
									return true;
								} else {
									return false;
								}
								l;
							}
						});
						*/
						// res.status(200).json({posts: "is array"});
						res.status(200).json({posts: "This is an array.", 
											  "are tags query params valid": isValidTag,
											  "is tags qp array": isArray,
											  "attempted tags query params": tagsField
											});
					}
					else{
						// if IS NOT an array
						filteredResults = posts.filter(post => {return post.tags.indexOf(tagsField) >= 0});
						res.status(200).json({posts: filteredResults});
					};
				}
				else{
					// if IS NOT valid tag, return error response
					res.status(400).json({"error": "Tags parameter is invalid.", 
										  "are tags query params valid": isValidTag,
										  "is tags qp array": isArray,
										  "attempted tags query params": newTagsField
										});
				}
				/*

					return resultsToFilter.filter(post => {return post.tags.indexOf(tagname) >= 0;});
				// apply the sorting
				const response = hobbits.sort(
					(a, b) => (a[sortField] < b[sortField] ? -1 : 1)
				);
			
			votes.sort(function (vote1, vote2) {

				// Sort by votes
				// If the first item has a higher number, move it down
				// If the first item has a lower number, move it up
				if (vote1.votes > vote2.votes) return -1;
				if (vote1.votes < vote2.votes) return 1;

				// If the votes number is the same between both items, sort alphabetically
				// If the first item comes first in the alphabet, move it up
				// Otherwise move it down
				if (vote1.title > vote2.title) return 1;
				if (vote1.title < vote2.title) return -1;

			});

				*/
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
