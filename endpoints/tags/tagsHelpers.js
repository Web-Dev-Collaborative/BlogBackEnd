module.exports = {
	compare,
	compare1
};
function compare(a, b) {
	const idA = a.id;
	const idB = b.id;
	let comparison = 0;

	if (idA > idB) {
		comparison = 1;
	} else if (idA < idB) {
		comparison = -1;
	}

	return comparison;
}
function compare1(a, b) {
	const authorsIDA = a.authorsid;
	const authorsIDB = b.authorsid;
	let comparison = 0;

	if (authorsIDA > authorsIDB) {
		comparison = 1;
	} else if (authorsIDA < authorsIDB) {
		comparison = -1;
	}

	return comparison;
}
