module.exports = {
    validateTag,
    filterResults,
    isTagsFieldArray
};


function isTagsFieldArray(tagsField){
    const isArray = Array.isArray(tagsField);
    return isArray;
};

function isTagValid(tagsField){
    if(tagsField !== 'culture' && tagsField !== 'design' && tagsField !== 'health' && 
            tagsField !== 'history' && tagsField !== 'politics' && tagsField !== 'science' && 
            tagsField !== 'startups' && tagsField !== 'tech'){
                // if invalid tag, return false
                return false;
         }
     // else return false
     return true;
}

function validateTag(tagsField){
    const isArray = isTagsFieldArray(tagsField);
    console.log("is |" + tagsTest + "| an array?  " + isArray);
	// validate tagsField
		// available tags:  culture, design, health, history, politics, science, startups, tech
	// if tagsField is array or not
        // if tagsField IS array and contains invalid tags, return false
            // else return true
        // if tagsField IS NOT array and contains invalid tags, return false
            // else return true
	if(isArray === true){
        for(let x = 0; x < tagsField.length;x++){
            if (isTagValid(tagsField[x]) === false){return isTagValid(tagsField[x])};
        }
        return true;
    }
    else{
        // if tagsField is not array
        return isTagValid(tagsField);
    }
}

// filter results by tagsField
function filterResults(tagName, resultsToFilter){
    const isArray = isTagsFieldArray(tagName);
    let filteredResults;
	if(isArray === true){
        filteredResults = resultsToFilter.filter(post => {tagName.forEach((tag)=>post.tags.indexOf(tag) >= 0)});
    }
    else {
        filteredResults = resultsToFilter.filter(post => {post.tags.indexOf(tagName) >= 0;});
    };
    return filteredResults;
}