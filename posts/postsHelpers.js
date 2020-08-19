module.exports = {
    validateTag,
    filterResults
  };
  

function validateTag(tagsField){
    
	// validate tagsField
		// available tags:  culture, design, health, history, politics, science, startups, tech
	// if tagsField is array or not
    // if tagsField is string, filter by tagsField
    // if tagsField is array, filter like below sample
	if(Array.isArray(tagsField)){
		tagsField.forEach((tag)=>{
			if(tag != 'culture' || 
			   tag != 'design' || 
			   tag != 'health' || 
			   tag != 'history' || 
			   tag != 'politics' || 
			   tag != 'science' || 
			   tag != 'startups' || 
			   tag != 'tech'){
                   // if not one of available tags, return false
                   return false;
                   
			   }
            // else return true
            return true;
		});
	}
	else{
		// if tagsField is not array
		if(tagsField != 'culture' || 
		tagsField != 'design' || 
		tagsField != 'health' || 
		tagsField != 'history' || 
		tagsField != 'politics' || 
		tagsField != 'science' || 
		tagsField != 'startups' || 
		tagsField != 'tech'){
            // if not one of available tags, return false
            return false;
		}
        // else return true
        return true
        

	}
}

// filter results by tagsField
function filterResults(tagName, resultsToFilter){
    return resultsToFilter.filter(post => {
        return post.tags.indexOf(tagName) >= 0;
    });
}