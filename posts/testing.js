
const { isTagsFieldArray, validateTag, isTagIncluded } = require('./postsHelpers.js');

let posts = {
    "posts": [
        {
            "author": "Jaden Bryant",
            "authorId": 3,
            "id": 51,
            "likes": 487,
            "reads": 98798,
            "tags": [
                "tech",
                "startups",
                "design"
            ]
        },
        {
            "author": "Bryson Bowers",
            "authorId": 6,
            "id": 54,
            "likes": 723,
            "reads": 312,
            "tags": [
                "tech",
                "culture",
                "health"
            ]
        },
        {
            "author": "Jaden Bryant",
            "authorId": 3,
            "id": 18,
            "likes": 983,
            "reads": 33952,
            "tags": [
                "history",
                "tech",
                
            ]
        }
    ]
}

let tagsField = ['health', 'tech'];
let filteredResults = posts.posts.filter(post => {
    post.tags.forEach((tag) =>{
        for(let x = 0; x < tagsField.length; x++){return isTagIncluded(tag, tagsField[x]);}
    })
});
console.log(filteredResults);