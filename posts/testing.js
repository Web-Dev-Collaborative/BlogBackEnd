
function isTagsFieldArray(tagsField){
    const isArray = Array.isArray(tagsField);
    return isArray;
};

function validateTag(tagsField){
    const isArray = isTagsFieldArray(tagsField);
    console.log("is tagsField an array?  " + isArray);
	// validate tagsField
		// available tags:  culture, design, health, history, politics, science, startups, tech
	// if tagsField is array or not
        // if tagsField IS array and contains invalid tags, return false
            // else return true
        // if tagsField IS NOT array and contains invalid tags, return false
            // else return true
	if(isArray === true){
        for(let x = 0; x < tagsField.length;x++){
            if(tagsField[x] !== 'culture' && tagsField[x] !== 'design' && tagsField[x] !== 'health' && 
			   tagsField[x] !== 'history' && tagsField[x] !== 'politics' && tagsField[x] !== 'science' && 
			   tagsField[x] !== 'startups' && tagsField[x] !== 'tech'){
                   // if invalid tag, return false
                   return false;
			}
        }
        // else return false
        return true;
	}
    // if tagsField is not array
    if(tagsField === 'culture' || tagsField === 'design' || tagsField === 'health' || 
        tagsField === 'history' || tagsField === 'politics' || tagsField === 'science' || 
        tagsField === 'startups' || tagsField === 'tech'){
        // if tag is valid, return false
        return true;
    }
    // else return false
    return false;
}

let tagsTest;
tagsTest = 'tech';
console.log(tagsTest + ' = ' + validateTag(tagsTest));
tagsTest = 'healthie';
console.log(tagsTest + ' = ' + validateTag(tagsTest));
tagsTest = ['tech', 'health'];
console.log(tagsTest + ' = ' + validateTag(tagsTest));
tagsTest = ['tech', 'healthie'];
console.log(tagsTest + ' = ' + validateTag(tagsTest));
tagsTest = ['tech', 'health', 'science'];
console.log(tagsTest + ' = ' + validateTag(tagsTest));
/*
console.log(tagsTest + ' = ' + validateTag(tagsTest));
console.log(tagsTest + ' = ' + validateTag(tagsTest));
console.log(tagsTest + ' = ' + validateTag(tagsTest));
console.log(tagsTest + ' = ' + validateTag(tagsTest));
console.log(tagsTest + ' = ' + validateTag(tagsTest));
console.log(tagsTest + ' = ' + validateTag(tagsTest));
console.log(tagsTest + ' = ' + validateTag(tagsTest));
console.log(tagsTest + ' = ' + validateTag(tagsTest));
console.log(tagsTest + ' = ' + validateTag(tagsTest));
console.log(tagsTest + ' = ' + validateTag(tagsTest));

*/


let posts = {
	posts: [
		{
			author: 'Jaden Bryant',
			authorId: 3,
			id: 51,
			likes: 487,
			reads: 98798,
			tags: ['tech', 'startups', 'design']
		},
		{
			author: 'Bryson Bowers',
			authorId: 6,
			id: 54,
			likes: 723,
			reads: 312,
			tags: ['tech', 'culture']
		},
		{
			author: 'Jaden Bryant',
			authorId: 3,
			id: 18,
			likes: 983,
			reads: 33952,
			tags: ['history', 'tech', 'health']
		}
	]
};
let tagsField = ['health', 'tech'];
/*
let filteredResults = posts.filter(post => 
    {
        for (let x = 0; x < tagsField.length;x++){
            if(post.tags.includes(tagsField[x])){return true}
            else{return false}
        }
    }
);

*/

filteredResults = posts.posts.filter(post => {
	for (let x = 0; x < tagsField.length; x++) {
		if (post.tags.includes(tagsField[x])) {
			return true;
		} else {
			return false;
		}
	}
});
console.log('filtered results = ' + JSON.stringify(filteredResults));
