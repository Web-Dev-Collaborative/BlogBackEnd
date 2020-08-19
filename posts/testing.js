
const { isTagsFieldArray,validateTag } = require('./postsHelpers.js');

console.log('----------');
let newTagsField = 'tech,health';
if(newTagsField.includes(",")){newTagsField = newTagsField.split(",");}
console.log('tagsField = ' + newTagsField);
console.log('is |' + newTagsField + '| valid?  ' + validateTag(newTagsField) + ' is |' + newTagsField + '| an array?  ' + isTagsFieldArray(newTagsField));
console.log('--------');
console.log('----------');
newTagsField = 'tech';
if(newTagsField.includes(",")){newTagsField = newTagsField.split(",");}
console.log('tagsField = ' + newTagsField);
console.log('is |' + newTagsField + '| valid?  ' + validateTag(newTagsField) + ' is |' + newTagsField + '| an array?  ' + isTagsFieldArray(newTagsField));
console.log('--------');
console.log('--------');
let tagsTest;
tagsTest = 'tech';
console.log('is |' + tagsTest + '| valid?  ' + validateTag(tagsTest) + ' is |' + tagsTest + '| an array?  ' + isTagsFieldArray(tagsTest));
console.log('--------');
tagsTest = 'healthie';
console.log('is |' + tagsTest + '| valid?  ' + validateTag(tagsTest) + '| is |' + tagsTest + '| an array?  ' + isTagsFieldArray(tagsTest));
console.log('--------');
tagsTest = ['tech', 'health'];
console.log('is |' + tagsTest + '| valid?  ' + validateTag(tagsTest) + '| is |' + tagsTest + '| an array?  ' + isTagsFieldArray(tagsTest));
console.log('--------');
tagsTest = ['tech', 'healthie'];
console.log('is |' + tagsTest + '| valid?  ' + validateTag(tagsTest) + '| is |' + tagsTest + '| an array?  ' + isTagsFieldArray(tagsTest));
console.log('--------');
tagsTest = ['tech', 'health', 'science'];
console.log('is |' + tagsTest + '| valid?  ' + validateTag(tagsTest) + '| is |' + tagsTest + '| an array?  ' + isTagsFieldArray(tagsTest));
console.log('--------');
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
