module.exports = {
    compareFirst,
    compareLast,
    compareID
};

// authors endpoint fields:  bio, firstName, authorsid (id), lastName, posts, tags, totalLikeCount, totalReadCount
    // queries:  
function compareFirst(a, b) {
    // ignore letter casing
    const firstCompare = a.firstName.toUpperCase();
    const secondCompare = b.firstName.toUpperCase();
    let comparison = 0;

    if (firstCompare > secondCompare) {comparison = 1;} 
    else if (firstCompare < secondCompare) {comparison = -1;}

    return comparison;
}
function compareLast(a, b) {
    // ignore letter casing
    const firstCompare = a.lastname.toUpperCase();
    const secondCompare = b.lastname.toUpperCase();

    let comparison = 0;

    if (firstCompare > secondCompare) {comparison = 1;} 
    else if (firstCompare < secondCompare) {comparison = -1;}

    return comparison;
}
function compareID(a, b) {
    // ignore letter casing
    const firstCompare = a.id;
    const secondCompare = b.id;

    let comparison = 0;

    if (firstCompare > secondCompare) {comparison = 1;} 
    else if (firstCompare < secondCompare) {comparison = -1;}

    return comparison;
}