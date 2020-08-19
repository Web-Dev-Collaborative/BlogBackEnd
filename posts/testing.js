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

function isTagIncluded(tags, tag){
    if (tags.includes(tag) === true) {
        return true;
    } else if (tags.includes(tag) === false){
        return false;
    }
}
let tagsField = ['health', 'tech'];

let tagIncluded;

let filteredResults = posts.posts.filter(post => {
    for(let x = 0; x < tagsField.length; x++){return isTagIncluded(post.tags, tagsField[x]);}
});
console.log(filteredResults);