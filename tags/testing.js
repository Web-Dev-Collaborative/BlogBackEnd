let allTags = ;


/* one tag's object:
{
    "tagsid": 1,
    "tagname": 'culture',
    "authors": [
                {
            "tagname": "tech",
            "bio": "",
            "authorsid": 8,
            "author": "Elisha Friedman"
            "posts": [
                "authorsid": 1,
                "id": 15,
                "likes": 560,
                "reads": 81549,
                "author": "Lainey Ritter"
            ]
        }
    ]
}

*/

let newTagsList = {tagsid: allTags.tagsid, tagName: allTags.tagName, authors: allTags.authors};
let newTagsListAuthorsLength = newTagsList.authors.length;
let postsLength = allTags.posts.length;
let currentAuthorsID, currentPostAuthor;
// create empty array for posts under authors
for(let x = 0; x < newTagsListAuthorsLength; x++){
    newTagsList.authors[x].posts = []
}
// loop through allTags.authors
// loop through allTags.posts
    // if allTags.authors.authorsid === allTags.posts.author, add to allTags.authors.posts

for(let x = 0; x < newTagsListAuthorsLength; x++){
    currentAuthorsID = newTagsList.authors[x].authorsid
    for(let y = 0; y < postsLength; y++){
        currentPostAuthor = allTags.posts[y].authorsid
        if(currentPostAuthor === currentAuthorsID){
            newTagsList.authors[x].posts.push(allTags.posts[y])
        }
    }
}
/*
*/

console.log(JSON.stringify(newTagsList));
