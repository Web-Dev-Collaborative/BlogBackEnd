const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	getTagsByAuthor,
	getTagsByPost,
	remove
};

// tags by author
/*
SELECT DISTINCT tags.tagname 
FROM tags
INNER JOIN poststags
ON tags.tagsid = poststags.tagsid
INNER JOIN posts
ON poststags.postsid = posts.postsid
INNER JOIN authors
ON posts.authorsid = authors.authorsid
WHERE authors.authorsid = 2;
*/
function getTagsByAuthor(authorsid) {
	return db('tags')
		.select(
			'tags.tagname'
		)
		.distinct()
		.innerJoin('poststags', 'posts.postsid', 'poststags.postsid')
		.innerJoin('posts', 'authors.authorsid', 'posts.authorsid')
		.innerJoin('authors', 'posts.authorsid', 'authors.authorsid')
		.where('authors.authorsid', authorsid);
}

// get tags by post
/*
	SELECT tags.tagname
	FROM tags
	INNER JOIN poststags
	ON tags.tagsid = poststags.tagsid
	INNER JOIN posts
	ON poststags.postsid = poststags.postsid
	WHERE posts.postsid = 2;
*/
function getTagsByPost(postsid){
	return db('tags')
		.select(
			'tags.tagname AS tagname'
		)
		.innerJoin('poststags', 'poststags.tagsid', 'tags.tagsid')
		.innerJoin('posts', 'poststags.postsid', 'poststags.postsid')
		.where('posts.postsid', postsid);
}
// get tags by post
/*
	SELECT posts.postsid, tags.tagname
	FROM tags
	INNER JOIN poststags
	ON tags.tagsid = poststags.tagsid
	INNER JOIN posts
	ON poststags.postsid = poststags.postsid
	GROUP BY posts.postsid;
*/
function getTagsGroupedByPost(postsid){
	return db('tags')
		.select(
			'posts.postsid AS postsid', 'tags.tagname AS tagname'
		)
		.innerJoin('poststags', 'poststags.tagsid', 'tags.tagsid')
		.innerJoin('posts', 'poststags.postsid', 'poststags.postsid');
}


function find() {
	return db('tags').select('*');
}

function findBy(filter) {
	return db('tags').where(filter);
}

async function add(tag) {
	const [tagsid] = await db('tags').insert(tag, 'tagsid');
	return findById(tagsid);
}

function findById(tagsid) {
	return db('tags').select('tagsid', '*').where({ tagsid }).first();
}

function update(tagsid, tag) {
	return db('tags').where({ tagsid }).update(tag);
}

function remove(tagsid) {
	return db('tags').where('tagsid', Number(tagsid)).del();
}
