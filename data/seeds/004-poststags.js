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
				}
                
			]);
		});
};