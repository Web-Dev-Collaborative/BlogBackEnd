module.exports = {
    validateTag,
    filterResults,
    isTagsFieldArray
  };
  
function isTagsFieldArray(tagsField){return Array.isArray(tagsField);};

function validateTag(tagsField){
    const isArray = isTagsFieldArray(tagsField);
	// validate tagsField
		// available tags:  culture, design, health, history, politics, science, startups, tech
	// if tagsField is array or not
        // if tagsField IS array and contains invalid tags, return false
            // else return true
        // if tagsField IS NOT array and contains invalid tags, return false
            // else return true
	if(isArray === true){
        for(let x = 0; x < tagsField.length;x++){
            if(tagsField[x] !== 'culture' || 
               tagsField[x] !== 'design' || 
			   tagsField[x] !== 'health' || 
			   tagsField[x] !== 'history' || 
			   tagsField[x] !== 'politics' || 
			   tagsField[x] !== 'science' || 
			   tagsField[x] !== 'startups' || 
			   tagsField[x] !== 'tech'){
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