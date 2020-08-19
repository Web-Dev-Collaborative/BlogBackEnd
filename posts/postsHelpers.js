module.exports = {
    validateTag,
    filterResults
  };
  

function validateTag(tagsField){
    const isArray = Array.isArray(tagsField);
	// validate tagsField
		// available tags:  culture, design, health, history, politics, science, startups, tech
	// if tagsField is array or not
        // if tagsField IS array and contains invalid tags, return false
            // else return true
        // if tagsField IS NOT array and contains invalid tags, return false
            // else return true
	if(isArray === true){
		return tagsField.forEach((tag)=>{
			if(tag != 'culture' || 
			   tag != 'design' || 
			   tag != 'health' || 
			   tag != 'history' || 
			   tag != 'politics' || 
			   tag != 'science' || 
			   tag != 'startups' || 
			   tag != 'tech'){
                   // if not one of valid tags, return false
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
            // if the tag is invalid, return false
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