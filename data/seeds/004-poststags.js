exports.seed = function (knex) {
	
	return knex('poststags')
		.del()
		.then(function () {
			
			return knex('poststags').insert([
				{
					poststagsid: 1,
					postsid: 15,
					tagsid: 1
				},
				{
					poststagsid: 2,
					postsid: 15,
					tagsid: 7
				},
				{
					poststagsid: 3,
					postsid: 15,
					tagsid: 8
				},
				{
					poststagsid: 4,
					postsid: 21,
					tagsid: 6
				},
				{
					poststagsid: 5,
					postsid: 21,
					tagsid: 7
				},
				{
					poststagsid: 6,
					postsid: 29,
					tagsid: 7
				},
				{
					poststagsid: 7,
					postsid: 33,
					tagsid: 6
				},
				{
					poststagsid: 8,
					postsid: 55,
					tagsid: 7
				},
				{
					poststagsid: 9,
					postsid: 76,
					tagsid: 8
				},
				{
					poststagsid: 10,
					postsid: 76,
					tagsid: 3
				},
				{
					poststagsid: 11,
					postsid: 76,
					tagsid: 5
				},
				{
					poststagsid: 12,
					postsid: 80,
					tagsid: 5
				},
				{
					poststagsid: 13,
					postsid: 80,
					tagsid: 4
				},
				{
					poststagsid: 14,
					postsid: 82,
					tagsid: 8
				},
				{
					poststagsid: 15,
					postsid: 96,
					tagsid: 6
				},
				{
					poststagsid: 16,
					postsid: 96,
					tagsid: 4
				},
				{
					poststagsid: 17,
					postsid: 97,
					tagsid: 5
				},
				{
					poststagsid: 18,
					postsid: 97,
					tagsid: 2
				},
				{
					poststagsid: 19,
					postsid: 97,
					tagsid: 6
				},
				{
					poststagsid: 20,
					postsid: 97,
					tagsid: 1
				},
				{
					poststagsid: 21,
					postsid: 38,
					tagsid: 2
				},
				{
					poststagsid: 22,
					postsid: 38,
					tagsid: 4
				},
				{
					poststagsid: 23,
					postsid: 39,
					tagsid: 5
				},
				{
					poststagsid: 24,
					postsid: 39,
					tagsid: 4
				},
				{
					poststagsid: 25,
					postsid: 59,
					tagsid: 5
				},
				{
					poststagsid: 26,
					postsid: 59,
					tagsid: 8
				},
				{
					poststagsid: 27,
					postsid: 64,
					tagsid: 5
				},
				{
					poststagsid: 28,
					postsid: 64,
					tagsid: 4
				},
				{
					poststagsid: 29,
					postsid: 83,
					tagsid: 5
				},
				{
					poststagsid: 30,
					postsid: 83,
					tagsid: 1
				},
				{
					poststagsid: 31,
					postsid: 98,
					tagsid: 2
				},
				{
					poststagsid: 32,
					postsid: 99,
					tagsid: 1
				},
				{
					poststagsid: 33,
					postsid: 99,
					tagsid: 8
				},
				{
					poststagsid: 34,
					postsid: 99,
					tagsid: 7
				}
                
			]);
		});
};