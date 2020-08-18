const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	getAuthors,
	update,
	remove
};

// authors endpoint fields:  bio, firstname, authorsid (id), lastname, posts, tags, totalLikeCount, totalReadCount
	// bio, firstname, authorsid as id, lastname fields from authors table
		// SELECT bio, firstname, authorsid as id, lastname from authors
	// posts = all posts written by that author
		// posts endpoint fields:  author, authorId, postsid (id), likes, reads, tags
		// SELECT postsid, authorsid, likes, reads from posts WHERE authorsid = authorsid
	// tags = all tags from posts written by that author
		// SELECT posts.postsid, posts.authorsid, posts.likes, posts.reads, tags.tagsid, tags.tagName, 
			// poststags.poststagsid, poststags.postsid,poststags.tagsid from tags 
			// INNER JOIN PostsTags 
			// WHERE authorsid = authorsid
	// totalLikeCount = all likes from posts written by that author
	// totalReadCount = all reads from posts written by that author


// still need query parameters

	
// get all authors
/*
	SELECT 
		authors.authorsid, authors.firstname, authors.lastname,
		posts.postsid, posts.authorsid, posts.likes, posts.reads,
		tags.tagsid, tags.tagName,
		poststags.poststagsid, poststags.postsid, poststags.tagsid
	FROM authors
	INNER JOIN posts
	ON authors.authorsid = posts.authorsid
	INNER JOIN poststags
	ON posts.postsid = poststags.postsid
	INNER JOIN tags
	ON poststags.tagsid = tags.tagsid;
*/
function getAuthors() {
	return db('authors')
		.select(
			'authors.bio', 'authors.firstname', 'authors.authorsid'.as('id'), 'authors.lastname', 
			'posts.postsid', 'posts.authorsid', 'posts.likes', 'posts.reads', 
			'tags.tagsid', 'tags.tagName',
			'poststags.poststagsid', 'poststags.postsid', 'poststags.tagsid'
		)
		.innerJoin('posts', 'authors.authorsid', 'posts.authorsid')
		.innerJoin('poststags', 'posts.postsid', 'poststags.postsid')
		.innerJoin('tags', 'poststags.tagsid', 'tags.tagsid');
}


function find() {
	return db('authors').select('*');
}

function findBy(filter) {
	return db('authors').where(filter);
}

async function add(author) {
	const [authorsid] = await db('authors').insert(author, 'authorsid');
	return findById(authorsid);
}

function findById(authorsid) {
	return db('authors').select('authorsid', '*').where({ authorsid }).first();
}

function update(authorsid, author) {
	return db('authors').where({ authorsid }).update(author);
}

function remove(authorsid) {
	return db('authors').where('authorsid', Number(authorsid)).del();
}
