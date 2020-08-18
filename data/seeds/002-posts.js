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
                {
                    postsid: 29,
                    authorsid: 1,
                    likes: 598,
                    reads: 50661
                },
                {
                    postsid: 33,
                    authorsid: 1,
                    likes: 289,
                    reads: 31629
                },
                {
                    postsid: 44,
                    authorsid: 1,
                    likes: 450,
                    reads: 95611
                },
                {
                    postsid: 55,
                    authorsid: 1,
                    likes: 554,
                    reads: 42654
                },
                {
                    postsid: 76,
                    authorsid: 1,
                    likes: 122,
                    reads: 75771
                },
                {
                    postsid: 80,
                    authorsid: 1,
                    likes: 874,
                    reads: 9002
                },
                {
                    postsid: 82,
                    authorsid: 1,
                    likes: 140,
                    reads: 3201
                },
                {
                    postsid: 96,
                    authorsid: 1,
                    likes: 395,
                    reads: 99575
                },
                {
                    postsid: 97,
                    authorsid: 1,
                    likes: 382,
                    reads: 47484
                },
                {
                    postsid: 38,
                    authorsid: 2,
                    likes: 105,
                    reads: 45896
                },
                {
                    postsid: 39,
                    authorsid: 2,
                    likes: 307,
                    reads: 89454
                },
                {
                    postsid: 59,
                    authorsid: 2,
                    likes: 971,
                    reads: 36154
                },
                {
                    postsid: 64,
                    authorsid: 2,
                    likes: 163,
                    reads: 22095
                },
                {
                    postsid: 83,
                    authorsid: 2,
                    likes: 667,
                    reads: 93563
                },
                {
                    postsid: 98,
                    authorsid: 2,
                    likes: 934,
                    reads: 17307
                },
                {
                    postsid: 99,
                    authorsid: 2,
                    likes: 473,
                    reads: 97868
                }
                
			]);
		});
};