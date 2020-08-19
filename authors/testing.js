let oneAuthorsTags = [
    {
        "tags": [
            "culture",
            "startups",
            "tech",
            "science",
            "startups",
            "startups",
            "science",
            "startups",
            "tech",
            "health",
            "politics",
            "politics",
            "history",
            "tech",
            "science",
            "history",
            "politics",
            "design",
            "science",
            "culture"
        ],
    }
];

let filteredTags = oneAuthorsTags[0].tags.filter((item, index)=>{return oneAuthorsTags[0].tags.indexOf(item) >= index;});

console.log(filteredTags);