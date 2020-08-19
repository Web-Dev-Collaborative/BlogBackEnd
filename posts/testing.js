
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
                "culture"
                
            ]
        }
    ]
}

let tagsField = ['culture', 'tech'];

let filteredResults = posts.posts.filter(post => {
    //return tagsField.some(tag => post.tags.includes(tag))
    return tagsField.every(tag => post.tags.includes(tag))
    // movies.filter(x => x.genres.some(g => filters.includes(g)))
    /*
    for(let x = 0; x < post.tags.length;x++){
        if(!tagsField.includes(post.tags[x])){
            return false
        }
        return true;
    }
    */
    // tagsField.includes(post.tags)
            //return isTagIncluded(post.tags, tagsField[x]);
            // return isTagIncluded(post.tags, tagsField[x]);
            // return JSON.stringify(post.tags).includes(tagsField[x]);
            // tagsField.forEach((tag) =>{return JSON.stringify(post.tags).includes(tagsField[x]);});
});

const names = ['Ram', 'Shyam', 'Laxman', ['Jay', 'Jessica', ['Vikram']]];
console.log(isTagIncluded(names, 'Vikram'));
console.log(filteredResults);