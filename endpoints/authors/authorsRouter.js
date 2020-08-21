const router = require("express").Router();

const Authors = require("./authorsModel.js");
const restricted = require("../../auth/restriction.js");

const { cache } = require("../../cache/cacheHelpers.js");

// GET:  gets all authors records, including posts and total likes & reads counts
router.get("/", restricted, cache(10), (req, res) => {
	
	let firstnameField, lastnameField, bioField, sortField, directionField;
	if(req.query.firstname){firstnameField = req.query.firstname}
	else{firstnameField = ''};
	if(req.query.lastname){lastnameField = req.query.lastname}
	else{lastnameField = ''};
	if(req.query.bio){bioField = req.query.bio}
	else{bioField = ''};
	if(req.query.sortBy){sortField = req.query.bio}
	else{sortField = ''};
	if(req.query.direction){directionField = req.query.bio}
	else{directionField = ''};

	Authors.getAllAuthors()
		.then((authors) => {
			if (!authors) {
				res.status(404).json({
					message: `Authors do not exist.`,
					error: err
				});
			} else {
				Authors.getPostsByAllAuthors()
					.then((posts) => {
						if (!posts) {
							res.status(404).json({
								message: `Posts do not exist.`,
								error: err
							});
						} else {
							Authors.getTagsByAllAuthors()
							.then((tagsPerAuthor) =>{
								if (!tagsPerAuthor) {
									res.status(404).json({
										message: `Tags do not exist.`,
										error: err
									});
								} else {
									Authors.getAllTotalLikesCount()
										.then((likesPerAuthor) =>{
											if (!likesPerAuthor) {
												res.status(404).json({
													message: `Total likes count does not exist.`,
													error: err
												});
											} else {
												Authors.getAllTotalReadsCount()
													.then((readsPerAuthor) =>{
														if (!readsPerAuthor) {
															res.status(404).json({
																message: `Total reads count does not exist.`,
																error: err
															});
														} else {

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
																
																for(let w = 0; w < oneAuthorsTags.posts.length; w++){
																	let postAuthorsId = oneAuthorsTags.posts[w].authorId;

																	if(authorsid === postAuthorsId){
																		let currentPost = oneAuthorsTags.posts[w];
																		newAuthors[v].posts.push(currentPost);

																	};
																	for(let x = 0; x < oneAuthorsTags.tags.length; x++){
																		let tagsAuthorsId = oneAuthorsTags.tags[x].authorsid;

																		if(authorsid === tagsAuthorsId){
																			let currentTags = oneAuthorsTags.tags[x].tags;
																			newAuthors[v].tags = currentTags;

																		};
																		for(let y = 0; y < oneAuthorsTags.totalLikeCount.length; y++){
																			let tlcAuthorsId = oneAuthorsTags.totalLikeCount[y].authorsid;

																			if(authorsid === tlcAuthorsId){
																				let tlcValue = oneAuthorsTags.totalLikeCount[y].totallikecount;
																				newAuthors[v].totalLikeCount = tlcValue;

																			};
																			for(let z = 0; z < oneAuthorsTags.totalReadCount.length; z++){
																				let trcAuthorsId = oneAuthorsTags.totalReadCount[z].authorsid;

																				if(authorsid === trcAuthorsId){
																					let trcValue = oneAuthorsTags.totalReadCount[z].totalreadcount;
																					newAuthors[v].totalReadCount = trcValue;

																				};
																			
																			};
																		};
																	};
																};
															};

															// remove duplicate tags
															for (let u = 0; u < newAuthors.length; u++){
																newAuthors[u].tags = newAuthors[u].tags.filter((item, index)=>{return newAuthors[u].tags.indexOf(item) >= index;});
															};

															// firstname, lastname, id sortBy QPs
															if (sortField !== "" && sortField !== undefined && sortField !== null) {
																if (
																	sortField !== "firstname" &&
																	sortField !== "lastname" &&
																	sortField !== "id"
																) {
																	res.status(400).json({ error: "sortBy parameter is invalid." });
																} else if (
																	sortField === "firstname" ||
																	sortField === "lastname" ||
																	sortField === "id"
																) {
																	if (directionField !== "" && directionField !== undefined && directionField !== null) {
																		if (directionField !== "asc" && directionField !== "desc") {
																			res.status(400).json({ error: "direction parameter is invalid." });
																		}
																		else if (directionField === "asc") {
																			// sort ascending by sortField
																			newAuthors = newAuthors.sort((a, b) => (a[sortField] < b[sortField] ? -1 : 1));
																			
																		}
																		else if (directionField === "desc") {
																			// sort descending by sortField
																			newAuthors = newAuthors.sort((a, b) => (a[sortField] > b[sortField] ? -1 : 1));
																		};
																	}
																	// default sort ascending by sortField
																	else {
																		newAuthors = newAuthors.sort((a, b) => (a[sortField] < b[sortField] ? -1 : 1));
																	};
																}
															}
															if(firstnameField !== "" && firstnameField !== undefined && firstnameField !== null){
																newAuthors = newAuthors.filter(author => {
																	if(author.firstname.includes(firstnameField.toLowerCase()) === false){
																		if(author.firstname.includes(firstnameField.toUpperCase()) === false){
																			return false;
																		}
																	}
																	return true;
																});
															}
															else if(lastnameField !== "" && lastnameField !== undefined && lastnameField !== null){
																newAuthors = newAuthors.filter(author => {
																	if(author.lastname.includes(lastnameField.toLowerCase()) === false){
																		if(author.lastname.includes(lastnameField.toUpperCase()) === false){
																			return false;
																		}
																	}
																	return true;
																});
															}
															else if(bioField !== "" && bioField !== undefined && bioField !== null){
																newAuthors = newAuthors.filter(author => {
																	if(author.bio.includes(bioField.toLowerCase()) === false){
																		if(author.bio.includes(bioField.toUpperCase()) === false){
																			return false;
																		}
																	}
																	return true;
																});
															}
															else {
																res.status(200).json(newAuthors);
															}
														}
													})
													.catch((err) => res.send(err));
											}
										})
										.catch((err) => res.send(err));


								}
							})
							.catch((err) => res.send(err));
						}
					})
					.catch((err) => res.send(err));
			}
		})
		.catch((err) => res.send(err));
});
// 

// GET:  gets one author record, including posts and total likes & reads counts
router.get("/:authorsid", restricted, cache(10), (req, res) => {
	const authorsid = req.params.authorsid;

	if (!authorsid) {
		res.status(404).json({ message: `The author with the specified authorsid ${authorsid} does not exist.` });
	} else {
		let filteredTags;
		Authors.getAuthor(authorsid)
			.then((author) => {
			Authors.getPostsByAuthor(authorsid)
				.then((oneAuthorsPosts) => {
					Authors.getTagsByAuthor(authorsid)
					.then((oneAuthorsTags) => {
						Authors.getTotalLikesCount(authorsid)
							.then((likes) =>
								Authors.getTotalReadsCount(authorsid)
									.then((reads) =>{
										filteredTags = oneAuthorsTags[0].tags.filter((item, index)=>{return oneAuthorsTags[0].tags.indexOf(item) >= index;});
										res.status(200).json({
											bio: author[0].bio,
											firstname: author[0].firstname,
											id: author[0].id,
											lastName: author[0].lastName,
											posts: oneAuthorsPosts, 
											tags: filteredTags, 
											totalLikeCount: likes[0].totallikecount, 
											totalReadCount: reads[0].totalreadcount
										})
										})
								.catch((err) => {
									res.status(500).json({ message: `Author total reads could not be retrieved.`, error: err });
								})
							)
							.catch((err) => {
								res.status(500).json({ message: `Author total likes could not be retrieved.`, error: err });
							})
					})
					.catch((err) => {
						res.status(500).json({ message: `The author"s tags could not be retrieved.`, error: err });
					});

				})
				.catch((err) => {
					res.status(500).json({ message: `The author"s posts could not be retrieved.`, error: err });
				})
			})
			.catch((err) => {
				res.status(500).json({ message: `The author information could not be retrieved.`, error: err });
			})
	}
});

// POST:  record author
router.post("/", restricted, (req, res) => {
	const newAuthor = req.body;

	Authors.add(newAuthor)
		.then((author) => {
			res.status(201).json(author);
		})
		.catch((err) => {
			res.status(500).json({ message: `Failed to create new author.`, error: err });
		});
});

// PUT:  update author record
router.put("/:authorsid", restricted, (req, res) => {
	const authorsid = req.params.authorsid;
	const updatedAuthor = req.body;

	Authors.update(authorsid, updatedAuthor)
		.then((author) => {
			if (author) {
				res.json(author);
			} else {
				res.status(404).json({ message: `Could not find author with given id ${authorsid}.` });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: `Failed to update author.`, error: err });
		});
});

// DELETE:  delete author record
router.delete("/:authorsid", restricted, (req, res) => {
	const authorsid = req.params.authorsid;

	if (!authorsid) {
		res.status(404).json({ message: `The author with the specified ID ${authorsid} does not exist.` });
	}
	Authors.remove(authorsid)
		.then((author) => {
			res.json(author);
		})
		.catch((err) => {
			res.status(500).json({ message: `The author could not be removed.`, error: err });
		});
});

module.exports = router;
