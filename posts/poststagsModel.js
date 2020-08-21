const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove
};

function find() {
	return db('poststags').select('*');
}

function findBy(filter) {
	return db('poststags').where(filter);
}

async function add(posttag) {
	const [poststagsid] = await db('poststags').insert(posttag, 'poststagsid');
	return findById(poststagsid);
}

function findById(poststagsid) {
	return db('poststags').select('poststagsid', '*').where({ poststagsid }).first();
}

function update(poststagsid, posttag) {
	return db('poststags').where({ poststagsid }).update(posttag);
}

function remove(poststagsid) {
	return db('poststags').where('poststagsid', Number(poststagsid)).del();
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
