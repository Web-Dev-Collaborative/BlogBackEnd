const router = require('express').Router();

const Posts = require('./postsModel.js');
const Authors = require('../authors/authorsModel.js');
const Tags = require('../tags/tagsModel.js');


const restricted = require('../auth/restriction.js');

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
	Posts.getPosts()
		.then(posts => {
			if (!posts) {
				res.status(404).json({
					message: `Posts do not exist.`,
					error: err
				});
			}
			else{
				let modifiedPosts = [];
				let tagsPerPost = [];
				posts.forEach(async (post) => {
					await Tags.getTagsByPost(post.id)
					.then(tags => {
						if(!tags){tags = [];}
						else{
							if(tags.length > 0){tags.forEach((tag)=>{tagsPerPost.push(tag.tagname);});}
							modifiedPosts.push({
								author: post.firstname + " " + post.lastname,
								authorId: post.authorId,
								id: post.id,
								likes: post.likes,
								reads: post.reads,
								tags: tagsPerPost
							});
						}
					})
					.catch(err => res.send(err));
				});
				res.status(200).json({posts: modifiedPosts});
			}
		})
		.catch(err => res.send(err));
	});
			// singlePostTags = [];
			// tags.forEach((tag)=>{singlePostTags.push(tag.tagname);});
			// add singlePostTags to each post
			// else{tags.forEach((tag)=>{singlePostTags.push(tag.tagname);});}
							/*
							let tagName;
							for(let x = 0; x < modifiedPosts.length;x++){
								for (let y = 0; y < tags.length; y++){
									if (modifiedPosts[x].id == tags[y].postsid){
										tagName = tags[y].tagname;
										modifiedPosts[x]['tags'].push(tagName);
									}
								}
							}
							tags.forEach((tag)=>{
								if (tag.postsid == ){
									modifiedPosts.tags = tag.tagname;
								}
							});
							*/

						// tags.forEach((tag)=>{singlePostTags.push(tag.tagname);});
						// add singlePostTags to each post
						// else{tags.forEach((tag)=>{singlePostTags.push(tag.tagname);});}

/*
				// let singlePostTags = [];
				posts.forEach((post) => {
					Tags.getTagsByPost(post.postsid)
					.then(tags => {
						if(tags) {
							tags.forEach((tag)=>{singlePostTags.push(tag.tagname);});
							modifiedPosts.push({
								author: post.firstname + " " + post.lastname,
								authorId: post.authorId,
								id: post.id,
								likes: post.likes,
								reads: post.reads,
								tags: tags
							});
						}
						else{
							modifiedPosts.push({
								author: post.firstname + " " + post.lastname,
								authorId: post.authorId,
								id: post.id,
								likes: post.likes,
								reads: post.reads,
								tags: []
							});
						}

						// tags.forEach((tag)=>{singlePostTags.push(tag.tagname);});
						// add singlePostTags to each post
						// else{tags.forEach((tag)=>{singlePostTags.push(tag.tagname);});}
					})
					.catch(err => res.send(err))
					// singlePostTags = [];
				});
				for(let x = 0; x < posts.length;x++) {
					let postsid = posts[x].postsid;
					Tags.getTagsByPost(postsid)
					.then(tags => {
						if(tags) {
							// singlePostTags = tags
							modifiedPosts.push({
								author: posts[x].firstname + " " + posts[x].lastname,
								authorId: posts[x].authorId,
								id: posts[x].id,
								likes: posts[x].likes,
								reads: posts[x].reads,
								tags: tags
							});
						
						}
						// tags.forEach((tag)=>{singlePostTags.push(tag.tagname);});
						// add singlePostTags to each post
						// else{tags.forEach((tag)=>{singlePostTags.push(tag.tagname);});}
					})
					.catch(err => res.send(err))
					// singlePostTags = [];
				};
				*/

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
