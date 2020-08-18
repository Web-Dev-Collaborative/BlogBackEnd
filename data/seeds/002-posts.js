exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('customers')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('customers').insert([
                {
                    postsid: 15,
                    authorsid: 1,
                    likes: 560,
                    reads: 81549
                },
                {
                    postsid: 21,
                    authorsid: 1,
                    likes: 406,
                    reads: 88797
                },
                
			]);
		});
};