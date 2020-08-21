
const { 
    compareFirst,
    compareLast,
	compareID 
} = require('./authorsHelpers.js');

let newAuthors = [
    {
        "bio": "I really enjoy writing. It is one of my favourite hobbies.\n\nFollow me on:\n-Instagram\n-Snapchat",
        "firstName": "Lainey",
        "id": 1,
        "lastName": "Ritter",
        "posts": [
            {
                "author": "Lainey Ritter",
                "authorId": 1,
                "id": 21,
                "likes": 406,
                "reads": 88797,
                "tags": [
                    "science",
                    "startups"
                ]
            },
            {
                "author": "Lainey Ritter",
                "authorId": 1,
                "id": 29,
                "likes": 598,
                "reads": 50661,
                "tags": [
                    "startups"
                ]
            },
            {
                "author": "Lainey Ritter",
                "authorId": 1,
                "id": 76,
                "likes": 122,
                "reads": 75771,
                "tags": [
                    "tech",
                    "health",
                    "politics"
                ]
            },
            {
                "author": "Lainey Ritter",
                "authorId": 1,
                "id": 55,
                "likes": 554,
                "reads": 42654,
                "tags": [
                    "startups"
                ]
            },
            {
                "author": "Lainey Ritter",
                "authorId": 1,
                "id": 82,
                "likes": 140,
                "reads": 3201,
                "tags": [
                    "tech"
                ]
            },
            {
                "author": "Lainey Ritter",
                "authorId": 1,
                "id": 15,
                "likes": 560,
                "reads": 81549,
                "tags": [
                    "culture",
                    "startups",
                    "tech"
                ]
            },
            {
                "author": "Lainey Ritter",
                "authorId": 1,
                "id": 97,
                "likes": 382,
                "reads": 47484,
                "tags": [
                    "politics",
                    "design",
                    "science",
                    "culture"
                ]
            },
            {
                "author": "Lainey Ritter",
                "authorId": 1,
                "id": 33,
                "likes": 289,
                "reads": 31629,
                "tags": [
                    "science"
                ]
            },
            {
                "author": "Lainey Ritter",
                "authorId": 1,
                "id": 80,
                "likes": 874,
                "reads": 9002,
                "tags": [
                    "politics",
                    "history"
                ]
            },
            {
                "author": "Lainey Ritter",
                "authorId": 1,
                "id": 96,
                "likes": 395,
                "reads": 99575,
                "tags": [
                    "science",
                    "history"
                ]
            }
        ],
        "tags": [
            "culture",
            "startups",
            "tech",
            "science",
            "health",
            "politics",
            "history",
            "design"
        ],
        "totalReadCount": "625934",
        "totalLikeCount": "4770"
    },
    {
        "bio": "I'm love politics. Always looking for feedback on my posts. My interests are below:\n\n-politics\n-science\n-history",
        "firstName": "Tia",
        "id": 2,
        "lastName": "Roberson",
        "posts": [
            {
                "author": "Tia Roberson",
                "authorId": 2,
                "id": 39,
                "likes": 307,
                "reads": 89454,
                "tags": [
                    "politics",
                    "history"
                ]
            },
            {
                "author": "Tia Roberson",
                "authorId": 2,
                "id": 99,
                "likes": 473,
                "reads": 97868,
                "tags": [
                    "culture",
                    "tech",
                    "startups"
                ]
            },
            {
                "author": "Tia Roberson",
                "authorId": 2,
                "id": 64,
                "likes": 163,
                "reads": 22095,
                "tags": [
                    "politics",
                    "history"
                ]
            },
            {
                "author": "Tia Roberson",
                "authorId": 2,
                "id": 98,
                "likes": 934,
                "reads": 17307,
                "tags": [
                    "design"
                ]
            },
            {
                "author": "Tia Roberson",
                "authorId": 2,
                "id": 38,
                "likes": 105,
                "reads": 45896,
                "tags": [
                    "design",
                    "history"
                ]
            },
            {
                "author": "Tia Roberson",
                "authorId": 2,
                "id": 83,
                "likes": 667,
                "reads": 93563,
                "tags": [
                    "politics",
                    "culture"
                ]
            },
            {
                "author": "Tia Roberson",
                "authorId": 2,
                "id": 59,
                "likes": 971,
                "reads": 36154,
                "tags": [
                    "politics",
                    "tech"
                ]
            }
        ],
        "totalReadCount": "402337",
        "totalLikeCount": "3620",
        "tags": [
            "design",
            "history",
            "politics",
            "tech",
            "culture",
            "startups"
        ]
    },
    {
        "bio": "-Read my posts\n-Let me know what you think!",
        "firstName": "Jaden",
        "id": 3,
        "lastName": "Bryant",
        "posts": [
            {
                "author": "Jaden Bryant",
                "authorId": 3,
                "id": 51,
                "likes": 487,
                "reads": 98798,
                "tags": [
                    "tech",
                    "startups",
                    "design"
                ]
            },
            {
                "author": "Jaden Bryant",
                "authorId": 3,
                "id": 18,
                "likes": 983,
                "reads": 33952,
                "tags": [
                    "history",
                    "tech"
                ]
            }
        ],
        "totalReadCount": "190950",
        "totalLikeCount": "1608",
        "tags": [
            "history",
            "tech",
            "startups",
            "design"
        ]
    },
    {
        "bio": "-Software Developer from New York\n-Tech is my thing!",
        "firstName": "Jon",
        "id": 4,
        "lastName": "Abbott",
        "posts": [
            {
                "author": "Jon Abbott",
                "authorId": 4,
                "id": 78,
                "likes": 539,
                "reads": 13562,
                "tags": [
                    "health"
                ]
            },
            {
                "author": "Jon Abbott",
                "authorId": 4,
                "id": 95,
                "likes": 985,
                "reads": 55875,
                "tags": [
                    "politics",
                    "tech",
                    "health",
                    "history"
                ]
            },
            {
                "author": "Jon Abbott",
                "authorId": 4,
                "id": 71,
                "likes": 321,
                "reads": 29331,
                "tags": [
                    "culture",
                    "health",
                    "politics"
                ]
            },
            {
                "author": "Jon Abbott",
                "authorId": 4,
                "id": 46,
                "likes": 89,
                "reads": 79298,
                "tags": [
                    "tech",
                    "culture"
                ]
            },
            {
                "author": "Jon Abbott",
                "authorId": 4,
                "id": 9,
                "likes": 165,
                "reads": 31367,
                "tags": [
                    "politics"
                ]
            },
            {
                "author": "Jon Abbott",
                "authorId": 4,
                "id": 62,
                "likes": 135,
                "reads": 87712,
                "tags": [
                    "culture",
                    "science"
                ]
            },
            {
                "author": "Jon Abbott",
                "authorId": 4,
                "id": 43,
                "likes": 149,
                "reads": 77776,
                "tags": [
                    "tech",
                    "science"
                ]
            },
            {
                "author": "Jon Abbott",
                "authorId": 4,
                "id": 87,
                "likes": 619,
                "reads": 61622,
                "tags": [
                    "culture",
                    "startups",
                    "science"
                ]
            }
        ],
        "totalLikeCount": "3002",
        "totalReadCount": "436543",
        "tags": [
            "politics",
            "tech",
            "science",
            "culture",
            "health",
            "startups",
            "history"
        ]
    },
    {
        "bio": "I have been writing since I was 12. Now I work for the New York Times",
        "firstName": "Trevon",
        "id": 5,
        "lastName": "Rodriguez",
        "posts": [
            {
                "author": "Trevon Rodriguez",
                "authorId": 5,
                "id": 60,
                "likes": 52,
                "reads": 39800,
                "tags": [
                    "health"
                ]
            },
            {
                "author": "Trevon Rodriguez",
                "authorId": 5,
                "id": 8,
                "likes": 735,
                "reads": 8504,
                "tags": [
                    "history",
                    "culture"
                ]
            },
            {
                "author": "Trevon Rodriguez",
                "authorId": 5,
                "id": 58,
                "likes": 466,
                "reads": 17389,
                "tags": [
                    "science",
                    "tech"
                ]
            },
            {
                "author": "Trevon Rodriguez",
                "authorId": 5,
                "id": 74,
                "likes": 660,
                "reads": 51324,
                "tags": [
                    "science"
                ]
            },
            {
                "author": "Trevon Rodriguez",
                "authorId": 5,
                "id": 93,
                "likes": 881,
                "reads": 73964,
                "tags": [
                    "tech",
                    "history"
                ]
            },
            {
                "author": "Trevon Rodriguez",
                "authorId": 5,
                "id": 3,
                "likes": 425,
                "reads": 11381,
                "tags": [
                    "health",
                    "startups"
                ]
            },
            {
                "author": "Trevon Rodriguez",
                "authorId": 5,
                "id": 14,
                "likes": 311,
                "reads": 25644,
                "tags": [
                    "tech",
                    "history"
                ]
            },
            {
                "author": "Trevon Rodriguez",
                "authorId": 5,
                "id": 77,
                "likes": 407,
                "reads": 664,
                "tags": [
                    "politics",
                    "startups",
                    "tech",
                    "science"
                ]
            },
            {
                "author": "Trevon Rodriguez",
                "authorId": 5,
                "id": 67,
                "likes": 903,
                "reads": 26815,
                "tags": [
                    "health",
                    "history"
                ]
            },
            {
                "author": "Trevon Rodriguez",
                "authorId": 5,
                "id": 20,
                "likes": 266,
                "reads": 63470,
                "tags": [
                    "politics"
                ]
            },
            {
                "author": "Trevon Rodriguez",
                "authorId": 5,
                "id": 66,
                "likes": 224,
                "reads": 20532,
                "tags": [
                    "health"
                ]
            },
            {
                "author": "Trevon Rodriguez",
                "authorId": 5,
                "id": 65,
                "likes": 498,
                "reads": 85870,
                "tags": [
                    "history"
                ]
            }
        ],
        "totalReadCount": "425357",
        "totalLikeCount": "5828",
        "tags": [
            "health",
            "startups",
            "history",
            "culture",
            "tech",
            "politics",
            "science"
        ]
    },
    {
        "bio": "-Coder by day\n-Writer by night\n",
        "firstName": "Bryson",
        "id": 6,
        "lastName": "Bowers",
        "posts": [
            {
                "author": "Bryson Bowers",
                "authorId": 6,
                "id": 54,
                "likes": 723,
                "reads": 312,
                "tags": [
                    "tech",
                    "culture"
                ]
            },
            {
                "author": "Bryson Bowers",
                "authorId": 6,
                "id": 5,
                "likes": 44,
                "reads": 94293,
                "tags": [
                    "health",
                    "startups"
                ]
            },
            {
                "author": "Bryson Bowers",
                "authorId": 6,
                "id": 42,
                "likes": 452,
                "reads": 39721,
                "tags": [
                    "design"
                ]
            },
            {
                "author": "Bryson Bowers",
                "authorId": 6,
                "id": 81,
                "likes": 552,
                "reads": 22975,
                "tags": [
                    "design",
                    "history"
                ]
            },
            {
                "author": "Bryson Bowers",
                "authorId": 6,
                "id": 49,
                "likes": 437,
                "reads": 79986,
                "tags": [
                    "startups"
                ]
            },
            {
                "author": "Bryson Bowers",
                "authorId": 6,
                "id": 85,
                "likes": 25,
                "reads": 16861,
                "tags": [
                    "tech"
                ]
            }
        ],
        "totalReadCount": "302404",
        "totalLikeCount": "2546",
        "tags": [
            "health",
            "startups",
            "design",
            "tech",
            "culture",
            "history"
        ]
    },
    {
        "bio": "You can contact me at ahmad@dunn.com!\n\n-Engineer\n-Writer",
        "firstName": "Ahmad",
        "id": 7,
        "lastName": "Dunn",
        "posts": [
            {
                "author": "Ahmad Dunn",
                "authorId": 7,
                "id": 53,
                "likes": 62,
                "reads": 68047,
                "tags": [
                    "health",
                    "politics"
                ]
            },
            {
                "author": "Ahmad Dunn",
                "authorId": 7,
                "id": 11,
                "likes": 750,
                "reads": 6183,
                "tags": [
                    "design",
                    "science"
                ]
            },
            {
                "author": "Ahmad Dunn",
                "authorId": 7,
                "id": 48,
                "likes": 201,
                "reads": 13867,
                "tags": [
                    "politics",
                    "health"
                ]
            },
            {
                "author": "Ahmad Dunn",
                "authorId": 7,
                "id": 7,
                "likes": 499,
                "reads": 95434,
                "tags": [
                    "health",
                    "science"
                ]
            },
            {
                "author": "Ahmad Dunn",
                "authorId": 7,
                "id": 23,
                "likes": 501,
                "reads": 20545,
                "tags": [
                    "politics",
                    "culture"
                ]
            },
            {
                "author": "Ahmad Dunn",
                "authorId": 7,
                "id": 28,
                "likes": 713,
                "reads": 89173,
                "tags": [
                    "design"
                ]
            },
            {
                "author": "Ahmad Dunn",
                "authorId": 7,
                "id": 27,
                "likes": 324,
                "reads": 73428,
                "tags": [
                    "health"
                ]
            },
            {
                "author": "Ahmad Dunn",
                "authorId": 7,
                "id": 86,
                "likes": 873,
                "reads": 53869,
                "tags": [
                    "history",
                    "startups"
                ]
            },
            {
                "author": "Ahmad Dunn",
                "authorId": 7,
                "id": 31,
                "likes": 980,
                "reads": 94798,
                "tags": [
                    "startups"
                ]
            },
            {
                "author": "Ahmad Dunn",
                "authorId": 7,
                "id": 61,
                "likes": 108,
                "reads": 5103,
                "tags": [
                    "startups",
                    "health"
                ]
            },
            {
                "author": "Ahmad Dunn",
                "authorId": 7,
                "id": 45,
                "likes": 31,
                "reads": 63432,
                "tags": [
                    "history",
                    "science"
                ]
            },
            {
                "author": "Ahmad Dunn",
                "authorId": 7,
                "id": 68,
                "likes": 11,
                "reads": 80121,
                "tags": [
                    "startups"
                ]
            },
            {
                "author": "Ahmad Dunn",
                "authorId": 7,
                "id": 100,
                "likes": 573,
                "reads": 89894,
                "tags": [
                    "science",
                    "design",
                    "history"
                ]
            }
        ],
        "totalReadCount": "833951",
        "totalLikeCount": "6559",
        "tags": [
            "health",
            "science",
            "design",
            "politics",
            "culture",
            "startups",
            "history"
        ]
    },
    {
        "bio": "",
        "firstName": "Elisha",
        "id": 8,
        "lastName": "Friedman",
        "posts": [
            {
                "author": "Elisha Friedman",
                "authorId": 8,
                "id": 56,
                "likes": 319,
                "reads": 96864,
                "tags": [
                    "design",
                    "health",
                    "culture"
                ]
            },
            {
                "author": "Elisha Friedman",
                "authorId": 8,
                "id": 25,
                "likes": 365,
                "reads": 32949,
                "tags": [
                    "politics",
                    "tech"
                ]
            },
            {
                "author": "Elisha Friedman",
                "authorId": 8,
                "id": 19,
                "likes": 779,
                "reads": 3041,
                "tags": [
                    "science"
                ]
            },
            {
                "author": "Elisha Friedman",
                "authorId": 8,
                "id": 13,
                "likes": 230,
                "reads": 64058,
                "tags": [
                    "design",
                    "tech"
                ]
            },
            {
                "author": "Elisha Friedman",
                "authorId": 8,
                "id": 52,
                "likes": 602,
                "reads": 76359,
                "tags": [
                    "science",
                    "health"
                ]
            },
            {
                "author": "Elisha Friedman",
                "authorId": 8,
                "id": 4,
                "likes": 728,
                "reads": 19645,
                "tags": [
                    "science",
                    "design",
                    "tech"
                ]
            },
            {
                "author": "Elisha Friedman",
                "authorId": 8,
                "id": 10,
                "likes": 853,
                "reads": 35913,
                "tags": [
                    "science",
                    "health",
                    "history"
                ]
            }
        ],
        "totalReadCount": "328829",
        "totalLikeCount": "3876",
        "tags": [
            "science",
            "design",
            "tech",
            "health",
            "history",
            "politics",
            "culture"
        ]
    },
    {
        "bio": "I love writing about tech. Check out my posts and let me know what you think!",
        "firstName": "Rylee",
        "id": 9,
        "lastName": "Paul",
        "posts": [
            {
                "author": "Rylee Paul",
                "authorId": 9,
                "id": 41,
                "likes": 715,
                "reads": 47876,
                "tags": [
                    "design",
                    "health"
                ]
            },
            {
                "author": "Rylee Paul",
                "authorId": 9,
                "id": 92,
                "likes": 203,
                "reads": 82099,
                "tags": [
                    "health"
                ]
            },
            {
                "author": "Rylee Paul",
                "authorId": 9,
                "id": 90,
                "likes": 206,
                "reads": 62359,
                "tags": [
                    "politics"
                ]
            },
            {
                "author": "Rylee Paul",
                "authorId": 9,
                "id": 72,
                "likes": 490,
                "reads": 31099,
                "tags": [
                    "startups"
                ]
            },
            {
                "author": "Rylee Paul",
                "authorId": 9,
                "id": 40,
                "likes": 968,
                "reads": 90784,
                "tags": [
                    "culture",
                    "science"
                ]
            },
            {
                "author": "Rylee Paul",
                "authorId": 9,
                "id": 1,
                "likes": 960,
                "reads": 50361,
                "tags": [
                    "tech",
                    "health"
                ]
            },
            {
                "author": "Rylee Paul",
                "authorId": 9,
                "id": 84,
                "likes": 233,
                "reads": 17854,
                "tags": [
                    "politics",
                    "tech",
                    "history"
                ]
            },
            {
                "author": "Rylee Paul",
                "authorId": 9,
                "id": 73,
                "likes": 315,
                "reads": 8966,
                "tags": [
                    "design"
                ]
            },
            {
                "author": "Rylee Paul",
                "authorId": 9,
                "id": 36,
                "likes": 709,
                "reads": 65277,
                "tags": [
                    "health",
                    "design"
                ]
            },
            {
                "author": "Rylee Paul",
                "authorId": 9,
                "id": 17,
                "likes": 527,
                "reads": 52454,
                "tags": [
                    "science",
                    "health"
                ]
            }
        ],
        "totalReadCount": "509129",
        "totalLikeCount": "5326",
        "tags": [
            "tech",
            "health",
            "science",
            "design",
            "culture",
            "startups",
            "politics",
            "history"
        ]
    },
    {
        "bio": "Favorite topics:\n-science\n-culture\n-design",
        "firstName": "Kinley",
        "id": 10,
        "lastName": "Crosby",
        "posts": [
            {
                "author": "Kinley Crosby",
                "authorId": 10,
                "id": 35,
                "likes": 868,
                "reads": 66926,
                "tags": [
                    "tech"
                ]
            },
            {
                "author": "Kinley Crosby",
                "authorId": 10,
                "id": 70,
                "likes": 632,
                "reads": 15459,
                "tags": [
                    "startups",
                    "health"
                ]
            },
            {
                "author": "Kinley Crosby",
                "authorId": 10,
                "id": 75,
                "likes": 733,
                "reads": 94910,
                "tags": [
                    "science",
                    "design",
                    "culture"
                ]
            },
            {
                "author": "Kinley Crosby",
                "authorId": 10,
                "id": 79,
                "likes": 617,
                "reads": 52494,
                "tags": [
                    "culture",
                    "startups",
                    "history"
                ]
            },
            {
                "author": "Kinley Crosby",
                "authorId": 10,
                "id": 47,
                "likes": 852,
                "reads": 72023,
                "tags": [
                    "culture",
                    "health"
                ]
            },
            {
                "author": "Kinley Crosby",
                "authorId": 10,
                "id": 88,
                "likes": 371,
                "reads": 21916,
                "tags": [
                    "culture",
                    "science",
                    "history"
                ]
            }
        ],
        "totalReadCount": "323728",
        "totalLikeCount": "4073",
        "tags": [
            "tech",
            "culture",
            "health",
            "startups",
            "science",
            "design",
            "history"
        ]
    },
    {
        "bio": "Always looking for new connections.\n\nConnect with me on:\n-Facebook\n-Linkedin",
        "firstName": "Adalyn",
        "id": 11,
        "lastName": "Blevins",
        "posts": [
            {
                "author": "Adalyn Blevins",
                "authorId": 11,
                "id": 12,
                "likes": 590,
                "reads": 80351,
                "tags": [
                    "tech"
                ]
            },
            {
                "author": "Adalyn Blevins",
                "authorId": 11,
                "id": 34,
                "likes": 670,
                "reads": 65450,
                "tags": [
                    "health"
                ]
            },
            {
                "author": "Adalyn Blevins",
                "authorId": 11,
                "id": 69,
                "likes": 425,
                "reads": 5149,
                "tags": [
                    "science",
                    "history"
                ]
            },
            {
                "author": "Adalyn Blevins",
                "authorId": 11,
                "id": 37,
                "likes": 107,
                "reads": 35946,
                "tags": [
                    "tech",
                    "health",
                    "history"
                ]
            },
            {
                "author": "Adalyn Blevins",
                "authorId": 11,
                "id": 89,
                "likes": 251,
                "reads": 75503,
                "tags": [
                    "politics",
                    "startups",
                    "tech",
                    "history"
                ]
            },
            {
                "author": "Adalyn Blevins",
                "authorId": 11,
                "id": 16,
                "likes": 749,
                "reads": 71754,
                "tags": [
                    "design",
                    "history"
                ]
            }
        ],
        "totalReadCount": "334153",
        "totalLikeCount": "2792",
        "tags": [
            "tech",
            "design",
            "history",
            "health",
            "science",
            "politics",
            "startups"
        ]
    },
    {
        "bio": "You can contact me at zack@turner.com!\n\n-CEO\n-Co-founder\n-Writer",
        "firstName": "Zackery",
        "id": 12,
        "lastName": "Turner",
        "posts": [
            {
                "author": "Zackery Turner",
                "authorId": 12,
                "id": 30,
                "likes": 232,
                "reads": 50940,
                "tags": [
                    "culture"
                ]
            },
            {
                "author": "Zackery Turner",
                "authorId": 12,
                "id": 32,
                "likes": 992,
                "reads": 32530,
                "tags": [
                    "health"
                ]
            },
            {
                "author": "Zackery Turner",
                "authorId": 12,
                "id": 50,
                "likes": 898,
                "reads": 4923,
                "tags": [
                    "health",
                    "history"
                ]
            },
            {
                "author": "Zackery Turner",
                "authorId": 12,
                "id": 26,
                "likes": 748,
                "reads": 28239,
                "tags": [
                    "tech"
                ]
            },
            {
                "author": "Zackery Turner",
                "authorId": 12,
                "id": 6,
                "likes": 387,
                "reads": 50062,
                "tags": [
                    "science",
                    "startups"
                ]
            },
            {
                "author": "Zackery Turner",
                "authorId": 12,
                "id": 91,
                "likes": 455,
                "reads": 90395,
                "tags": [
                    "science",
                    "health"
                ]
            },
            {
                "author": "Zackery Turner",
                "authorId": 12,
                "id": 24,
                "likes": 940,
                "reads": 89299,
                "tags": [
                    "culture",
                    "tech",
                    "politics"
                ]
            },
            {
                "author": "Zackery Turner",
                "authorId": 12,
                "id": 63,
                "likes": 682,
                "reads": 54374,
                "tags": [
                    "culture",
                    "design"
                ]
            },
            {
                "author": "Zackery Turner",
                "authorId": 12,
                "id": 2,
                "likes": 469,
                "reads": 90406,
                "tags": [
                    "startups",
                    "tech",
                    "history"
                ]
            }
        ],
        "totalReadCount": "491168",
        "totalLikeCount": "5803",
        "tags": [
            "startups",
            "tech",
            "history",
            "science",
            "culture",
            "politics",
            "health",
            "design"
        ]
    }
]

const sortField = 'firstName';
let firstnameField = 'r'

if(sortField === 'firstName'){newAuthors = newAuthors.sort(compareFirst);}
else if (sortField === 'lastName'){newAuthors = newAuthors.sort(compareLast);}
else {newAuthors = newAuthors.sort(compareID);}


if(firstnameField !== '' && firstnameField !== undefined && firstnameField !== null){
    newAuthors = newAuthors.filter(author => {
        if(author.firstName.includes(firstnameField.toLowerCase()) === false){
            if(author.firstName.includes(firstnameField.toUpperCase()) === false){
                return false;
            }
        }
        return true;
    });
}

console.log('------------------');
console.log('newAuthors = ');
console.log(newAuthors);