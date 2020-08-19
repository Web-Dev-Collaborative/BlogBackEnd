const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	getAuthors,
	getAuthor,
	getPostsByAuthor,
	getTotalLikesCount,
	getTotalReadsCount,
	getTagsByAuthor,
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
// get all authors
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

/*
	SELECT 
		authors.authorsid as id, authors.firstname as firstName, 
		authors.lastname as lastName, authors.bio
	FROM authors
	WHERE authors.authorsid = 2;
*/
// get author
function getAuthor(authorsid) {
	return db('authors')
		.select(
			'authors.bio', 'authors.firstname', 'authors.authorsid AS id', 'authors.lastname'
		)
		.where('authors.authorsid', authorsid);
}

/*
	SELECT posts.postsid as id, posts.authorsid as authorId, posts.likes as likes, posts.reads as reads,
		ARRAY_AGG(tags.tagname) AS tags
	FROM posts 
	INNER JOIN authors ON posts.authorsid = authors.authorsid
	INNER JOIN poststags ON posts.postsid = poststags.postsid
	INNER JOIN tags ON poststags.tagsid = tags.tagsid
	WHERE authors.authorsid = 2
	GROUP BY posts.postsid, posts.authorsid, authors.firstname, authors.lastname, posts.likes, posts.reads;
*/
// get posts by author
function getPostsByAuthor(authorsid) {
		return db('posts')
			.select('posts.authorsid AS authorId',
				'posts.postsid AS id', 'posts.likes AS likes', 'posts.reads AS reads',
				db.raw('ARRAY_AGG(tags.tagname) AS tags')
			)
			.innerJoin('authors', 'posts.authorsid', 'authors.authorsid')
			.innerJoin('poststags', 'posts.postsid', 'poststags.postsid')
			.innerJoin('tags', 'poststags.tagsid', 'tags.tagsid')
			.groupBy('posts.postsid', 'posts.authorsid', 
			'authors.firstname', 'authors.lastname',
			'posts.likes', 'posts.reads')
			.where('authors.authorsid', authorsid);
	}

/*
	SELECT SUM(posts.likes) as totalLikesCount
	FROM posts
	INNER JOIN authors
	ON posts.authorsid = authors.authorsid
	WHERE authors.authorsid = 2;
*/
// get total likes count
function getTotalLikesCount(authorsid) {
	return db('posts')
		.select(
			db.raw('SUM(posts.likes) AS totalLikeCount')
		)
		.innerJoin('authors', 'posts.authorsid', 'authors.authorsid')
		.where('authors.authorsid', authorsid);
}


/*
	SELECT SUM(posts.reads) as totalLikesCount
	FROM posts
	INNER JOIN authors
	ON posts.authorsid = authors.authorsid
	WHERE authors.authorsid = 2;
*/
// get total reads count
function getTotalReadsCount(authorsid){
	return db('posts')
		.select(
			db.raw('SUM(posts.reads) AS totalReadCount')
		)
		.innerJoin('authors', 'posts.authorsid', 'authors.authorsid')
		.where('authors.authorsid', authorsid);
}

/*
	SELECT DISTINCT ARRAY_AGG(tags.tagname) AS tags
	FROM Tags
	INNER JOIN PostsTags 
	ON tags.tagsid = poststags.tagsid
	INNER JOIN Posts
	ON poststags.postsid = posts.postsid
	INNER JOIN Authors
	ON posts.authorsid = authors.authorsid
	WHERE authors.authorsid = 2;
*/
// get tags by author
function getTagsByAuthor(authorsid){
	return db('tags')
		.distinct()
		.select(db.raw('ARRAY_AGG(tags.tagname) AS tags'))
		.innerJoin('poststags', 'tags.tagsid', 'poststags.tagsid')
		.innerJoin('posts', 'poststags.postsid', 'posts.postsid')
		.innerJoin('authors', 'posts.authorsid', 'authors.authorsid')
		.where('authors.authorsid', authorsid)

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
