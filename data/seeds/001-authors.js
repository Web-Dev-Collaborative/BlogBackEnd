exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('authors')
		.del()
		.then(function () {
			return knex('authors').insert([
				{
					authors: [
						{
							bio:
								'I really enjoy writing. It is one of my favourite hobbies.\n\nFollow me on:\n-Instagram\n-Snapchat',
							firstName: 'Lainey',
							id: 1,
							lastName: 'Ritter'
						},
						{
							bio:
								"I'm love politics. Always looking for feedback on my posts. My interests are below:\n\n-politics\n-science\n-history",
							firstName: 'Tia',
							id: 2,
							lastName: 'Roberson'
						},
						{
							bio: '-Read my posts\n-Let me know what you think!',
							firstName: 'Jaden',
							id: 3,
							lastName: 'Bryant'
						},
						{
							bio: '-Software Developer from New York\n-Tech is my thing!',
							firstName: 'Jon',
							id: 4,
							lastName: 'Abbott'
						},
						{
							bio: 'I have been writing since I was 12. Now I work for the New York Times',
							firstName: 'Trevon',
							id: 5,
							lastName: 'Rodriguez'
						},
						{
							bio: '-Coder by day\n-Writer by night\n',
							firstName: 'Bryson',
							id: 6,
							lastName: 'Bowers'
						},
						{
							bio: 'You can contact me at ahmad@dunn.com!\n\n-Engineer\n-Writer',
							firstName: 'Ahmad',
							id: 7,
							lastName: 'Dunn'
						},
						{
							bio: '',
							firstName: 'Elisha',
							id: 8,
							lastName: 'Friedman'
						},
						{
							bio: 'I love writing about tech. Check out my posts and let me know what you think!',
							firstName: 'Rylee',
							id: 9,
							lastName: 'Paul'
						},
						{
							bio: 'Favorite topics:\n-science\n-culture\n-design',
							firstName: 'Kinley',
							id: 10,
							lastName: 'Crosby'
						},
						{
							bio: 'Always looking for new connections.\n\nConnect with me on:\n-Facebook\n-Linkedin',
							firstName: 'Adalyn',
							id: 11,
							lastName: 'Blevins'
						},
						{
							bio: 'You can contact me at zack@turner.com!\n\n-CEO\n-Co-founder\n-Writer',
							firstName: 'Zackery',
							id: 12,
							lastName: 'Turner'
						}
					]
				}
			]);
		});
};
