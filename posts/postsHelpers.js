module.exports = {
    validateTag,
    filterResults
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
		tagsField.forEach((tag)=>{
			if(tag === 'culture' || 
			   tag === 'design' || 
			   tag === 'health' || 
			   tag === 'history' || 
			   tag === 'politics' || 
			   tag === 'science' || 
			   tag === 'startups' || 
			   tag === 'tech'){
                   // if one of valid tags, return true
                   return true;
			   }
		});
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
    return resultsToFilter.filter(post => {
        return post.tags.indexOf(tagName) >= 0;
    });
}