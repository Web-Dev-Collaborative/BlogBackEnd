const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	getPosts,
	getPostsByAuthor,
	getTotalLikesCount,
	getTotalReadsCount,
	update,
	remove
};

// posts endpoint fields:  author, authorId, postsid as id, likes, reads, tags
  // queries:  


// get all posts
/*
	SELECT posts.postsid, posts.authorsid, posts.likes, posts.reads,
		authors.authorsid, authors.firstname, authors.lastname,
		tags.tagsid, tags.tagname,
		poststags.poststagsid, poststags.postsid, poststags.tagsid
	FROM posts
	INNER JOIN poststags
	ON posts.postsid = poststags.postsid
	INNER JOIN authors 
	ON posts.authorsid = authors.authorsid
	INNER JOIN tags
	ON poststags.tagsid = tags.tagsid;
*/
function getPosts() {
	return db('posts')
		.select(
			posts.postsid.as('id'), posts.likes.as('likes'), posts.reads.as('reads'),
			authors.authorsid.as('authorId'), authors.firstname.as('firstname'), authors.lastname.as('lastname'),
			'poststags.tagsid'.as('tagsid')
		)
		.innerJoin('poststags', 'posts.postsid', 'poststags.postsid')
		.innerJoin('authors', 'posts.authorsid', 'authors.authorsid');
}

// get posts by author
/*
	SELECT 
		CONCAT(authors.firstname, ' ', authors.lastname) as author, authors.authorsid as authorId, 
		posts.postsid as id, posts.likes, posts.reads
	FROM authors
	INNER JOIN posts
	ON posts.postsid = posts.authorsid
	WHERE authors.authorsid = 2;
*/
function getPostsByAuthor(authorsid) {
	return db('authors')
		.select(
			'authors.firstname', 'authors.lastname', 'authors.authorsid',
			'posts.postsid', 'posts.likes', 'posts.reads'
		)
		.innerJoin('posts', 'authors.authorsid', 'posts.authorsid')
		.where('authors.authorsid', authorsid);
}

 // get total likes count
/*
	SELECT SUM(posts.likes) as totalLikesCount
	FROM posts
	INNER JOIN authors
	ON posts.authorsid = authors.authorsid
	WHERE authors.authorsid = 2;
*/
function getTotalLikesCount(authorsid) {
	return db('posts')
		.select(
			SUM(posts.likes)
		)
		.innerJoin('authors', 'posts.authorsid', 'authors.authorsid')
		.where('authors.authorsid', authorsid);
}


 // get total reads count
/*
	SELECT SUM(posts.reads) as totalLikesCount
	FROM posts
	INNER JOIN authors
	ON posts.authorsid = authors.authorsid
	WHERE authors.authorsid = 2;
*/
function getTotalReadsCount(authorsid){
	return db('posts')
		.select(
			SUM(posts.reads)
		)
		.innerJoin('authors', 'posts.authorsid', 'authors.authorsid')
		.where('authors.authorsid', authorsid);
}


function find() {
	return db('posts').select('*');
}

function findBy(filter) {
	return db('posts').where(filter);
}

async function add(post) {
	const [postsid] = await db('posts').insert(post, 'postsid');
	return findById(postsid);
}

function findById(postsid) {
	return db('posts').select('postsid', '*').where({ postsid }).first();
}

function update(postsid, post) {
	return db('posts').where({ postsid }).update(post);
}

function remove(postsid) {
	return db('posts').where('postsid', Number(postsid)).del();
}
