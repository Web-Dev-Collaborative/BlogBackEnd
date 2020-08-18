exports.seed = function (knex) {
	
	return knex('tags')
		.del()
		.then(function () {
			
			return knex('tags').insert([
				{
					tagsid: 1,
					tagName: "culture"
				},
				{
					tagsid: 2,
					tagName: "design"
				},
				{
					tagsid: 3,
					tagName: "health"
				},
				{
					tagsid: 4,
					tagName: "history"
				},
				{
					tagsid: 5,
					tagName: "politics"
				},
				{
					tagsid: 6,
					tagName: "science"
				},
				{
					tagsid: 7,
					tagName: "startups"
				},
				{
					tagsid: 8,
					tagName: "tech"
				},
                
			]);
		});
};