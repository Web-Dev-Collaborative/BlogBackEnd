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

// authors endpoint fields:  bio, firstName, authorsid (id), lastName, posts, tags, totalLikeCount, totalReadCount
	// bio, firstName, authorsid as id, lastName fields from authors table
		// SELECT bio, firstName, authorsid as id, lastName from authors
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



// still need:
	// change authorsid to id
	// totalLikeCount = all likes from posts written by that author
	// totalReadCount = all reads from posts written by that author
	// query parameters:  
function getAuthors() {
	return db('authors')
		.select(
			'authors.bio', 'authors.firstName', 'authors.authorsid', 'authors.lastName', 
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