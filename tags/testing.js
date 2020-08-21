let allTags = {
    "tag": [
        {
            "tagname": "tech"
        }
    ],
    "authors": [
        {
            "bio": "I really enjoy writing. It is one of my favourite hobbies.\n\nFollow me on:\n-Instagram\n-Snapchat",
            "id": 1,
            "author": "Lainey Ritter"
        },
        {
            "bio": "I'm love politics. Always looking for feedback on my posts. My interests are below:\n\n-politics\n-science\n-history",
            "id": 2,
            "author": "Tia Roberson"
        },
        {
            "bio": "-Read my posts\n-Let me know what you think!",
            "id": 3,
            "author": "Jaden Bryant"
        },
        {
            "bio": "-Software Developer from New York\n-Tech is my thing!",
            "id": 4,
            "author": "Jon Abbott"
        },
        {
            "bio": "I have been writing since I was 12. Now I work for the New York Times",
            "id": 5,
            "author": "Trevon Rodriguez"
        },
        {
            "bio": "-Coder by day\n-Writer by night\n",
            "id": 6,
            "author": "Bryson Bowers"
        },
        {
            "bio": "",
            "id": 8,
            "author": "Elisha Friedman"
        },
        {
            "bio": "I love writing about tech. Check out my posts and let me know what you think!",
            "id": 9,
            "author": "Rylee Paul"
        },
        {
            "bio": "Favorite topics:\n-science\n-culture\n-design",
            "id": 10,
            "author": "Kinley Crosby"
        },
        {
            "bio": "Always looking for new connections.\n\nConnect with me on:\n-Facebook\n-Linkedin",
            "id": 11,
            "author": "Adalyn Blevins"
        },
        {
            "bio": "You can contact me at zack@turner.com!\n\n-CEO\n-Co-founder\n-Writer",
            "id": 12,
            "author": "Zackery Turner"
        }
    ],
    "tagName": "tech"
};


/* one tag's object:
{
    "tagsid": 1,
    "tagname": 'culture',
    "posts": [
        {
            "tagname": "culture",
            "id": 15,
            "author": "Lainey Ritter",
            "likes": 560,
            "reads": 81549
        }
    ]
}

*/

let newTagsList = allTags.tags;
let currentTagName, currentPostsTagName;
let newTagsListLength = newTagsList.length;
let postsLength = allTags.posts.length;

// loop through newTagsList;
    // add empty newTagsList[x].posts
for(let x = 0; x < newTagsListLength; x++){newTagsList[x].posts = [];}

// loop through newTagsList;
// then loop through allTags.posts
// if newTagsList[x].tagname === allTags.posts[y].tagname
    // add to newTagsList[x].posts
for(let x = 0; x < newTagsListLength; x++){
    currentTagName = newTagsList[x].tagname;
    for(let y = 0; y < postsLength; y++){
        currentPostsTagName = allTags.posts[y].tagname;
        if(currentTagName === currentPostsTagName){
            currentPost = 
            {
                "postsid": allTags.posts[y].postsid,
                "author": allTags.posts[y].author,
                "authorsid": allTags.posts[y].authorsid,
                "likes": allTags.posts[y].likes,
                "reads": allTags.posts[y].reads
            };
            newTagsList[x].posts.push(currentPost);
        }
    }

}


console.log(JSON.stringify(newTagsList));
