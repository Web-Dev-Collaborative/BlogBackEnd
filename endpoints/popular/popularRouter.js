const router = require("express").Router();

const Posts = require("./popularModel.js");
const Authors = require("../authors/authorsModel.js");
const Tags = require("../tags/tagsModel.js");

const restricted = require("../../auth/restriction.js");

const { isTagsFieldArray, validateTag } = require("./popularHelpers.js");

const { cache } = require("../../cache/cacheHelpers.js");


// GET:  gets posts list in order of most to least liked
router.get("/mostliked", restricted, cache(10), (req, res) => {
	const tagsField = req.query.tags;
	Posts.getPosts()
		.then((posts) => {
			if (!posts) {
				res.status(404).json({
					message: `Posts do not exist.`,
					error: err
				});
			} else {
				let filteredResults, newTagsField;
				if (tagsField.includes(',')) {newTagsField = tagsField.split(',')}
				else {newTagsField = [tagsField]};
				let isTFArray = isTagsFieldArray(newTagsField);
				let isValidTag = validateTag(newTagsField);

				// if multiple tags
				if (isTFArray === true) {
					// if IS valid tag, run filterResults on response and return it
					if (isValidTag === true) {
						filteredResults = posts.filter(post => {
							return newTagsField.every(tag => post.tags.includes(tag));
						});
						res.status(200).json({ posts: filteredResults });
					} else if (isValidTag === false) {
						// if IS NOT valid tag, return error response
						res.status(400).json({ error: 'Tags parameter is invalid.' });
					};
				};
				// if single tag
				if (isTFArray === false) {
					if (isValidTag === true) {
						// if IS valid tag, return filtered results
						filteredResults = posts.filter(post => {
							return post.tags.indexOf(newTagsField) >= 0;
						});
						// sorting posts by most to least likes
						filteredResults = filteredResults.sort((a, b) => (a['likes'] > b['likes'] ? -1 : 1));
						
						res.status(200).json({ posts: filteredResults });
					} else if (isValidTag === false) {
						
						// sorting posts by most to least likes
						filteredResults = filteredResults.sort((a, b) => (a['likes'] > b['likes'] ? -1 : 1));
						res.status(200).json({ posts: filteredResults });
					};
				};
			};
		})
		.catch(err => res.send(err));
});

// GET:  gets posts list in order of most to least read
router.get("/mostread", restricted, cache(10), (req, res) => {
	const tagsField = req.query.tags;
	Posts.getPosts()
		.then((posts) => {
			if (!posts) {
				res.status(404).json({
					message: `Posts do not exist.`,
					error: err
				});
			} else {
				let filteredResults, newTagsField;
				if (tagsField.includes(',')) {newTagsField = tagsField.split(',')}
				else {newTagsField = [tagsField]};
				let isTFArray = isTagsFieldArray(newTagsField);
				let isValidTag = validateTag(newTagsField);

				// sorting posts by most to least reads
				posts = posts.sort((a, b) => (a['reads'] > b['reads'] ? -1 : 1));

				// validate sortField
					// if sort criteria not valid
						// available sorts:  author, authorId, id, likes, reads

				// if multiple tags
				if (isTFArray === true) {
					// if IS valid tag, run filterResults on response and return it
					if (isValidTag === true) {
						filteredResults = posts.filter(post => {
							return newTagsField.every(tag => post.tags.includes(tag));
						});
						
						// sorting posts by most to least reads
						filteredResults = filteredResults.sort((a, b) => (a['reads'] > b['reads'] ? -1 : 1));
						
						res.status(200).json({ posts: filteredResults });
					} else if (isValidTag === false) {
						// if IS NOT valid tag, return error response
						res.status(400).json({ error: 'Tags parameter is invalid.' });
					};
				};
				// if single tag
				if (isTFArray === false) {
					if (isValidTag === true) {
						// if IS valid tag, return filtered results
						filteredResults = posts.filter(post => {
							return post.tags.indexOf(newTagsField) >= 0;
						});

						// sorting posts by most to least reads
						filteredResults = filteredResults.sort((a, b) => (a['reads'] > b['reads'] ? -1 : 1));

						res.status(200).json({ posts: filteredResults });
					} else if (isValidTag === false) {
						// if IS NOT valid tag, return error response
						res.status(400).json({ error: 'Tags parameter is invalid.' });
					};
				};
			};
		})
		.catch(err => res.send(err));
});


module.exports = router;
