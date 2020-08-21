module.exports = {
	isTagsFieldArray,
	validateTag
};

function isTagsFieldArray(tagsField) {
	const isArray = Array.isArray(tagsField);
	return isArray;
};

function validateTag(tagsField) {
	const isArray = isTagsFieldArray(tagsField);
	// validate tagsField
	// available tags:  culture, design, health, history, politics, science, startups, tech
	// if tagsField is array or not
	// if tagsField IS array and contains invalid tags, return false
	// else return true
	// if tagsField IS NOT array and contains invalid tags, return false
	// else return true
	if (isArray === true) {
		

		for (let x = 0; x < tagsField.length; x++) {
			tagsField[x] = tagsField[x].toLowerCase();
			if (
				tagsField[x] !== 'culture' &&
				tagsField[x] !== 'design' &&
				tagsField[x] !== 'health' &&
				tagsField[x] !== 'history' &&
				tagsField[x] !== 'politics' &&
				tagsField[x] !== 'science' &&
				tagsField[x] !== 'startups' &&
				tagsField[x] !== 'tech'
			) {
				// if invalid tag, return false
				return false;
			};
		};
		return true;
	} else if (isArray === false) {
		tagsField[x] = tagsField[x].toLowerCase();
		// if tagsField is not array
		if (
			tagsField !== 'culture' &&
			tagsField !== 'design' &&
			tagsField !== 'health' &&
			tagsField !== 'history' &&
			tagsField !== 'politics' &&
			tagsField !== 'science' &&
			tagsField !== 'startups' &&
			tagsField !== 'tech'
		) {
			// if invalid tag, return false
			return false;
		} else {
			// else return false
			return true;
		};
	};
};
