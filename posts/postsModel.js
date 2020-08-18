const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	getPosts,
	update,
	remove
};

// posts endpoint fields:  author, authorId, postsid as id, likes, reads, tags
  // queries:  

function getPosts() {
	return db('posts')
		.select(
			'posts.postsid', 'posts.authorid', 'posts.likes', 'posts.reads',
			'authors.authorsid', 'authors.firstName', 'authors.lastName',
			'tags.tagsid', 'tags.tagName',
			'poststags.poststagsid', 'poststags.postsid', 'poststags.tagsid'
		)
		.innerJoin('poststags', 'posts.postsid', 'poststags.postsid')
		.innerJoin('authors', 'posts.authorid', 'authors.authorsid')
		.innerJoin('tags', 'poststags.tagsid', 'tags.tagsid');
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

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/

/*



*/
