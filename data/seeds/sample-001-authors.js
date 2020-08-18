exports.seed = function (knex) {
    
	return knex('customers')
		.del()
		.then(function () {
            
			return knex('customers').insert([
                {
                    "authors": [
                        {
                            "bio": "I really enjoy writing. It is one of my favourite hobbies.\n\nFollow me on:\n-Instagram\n-Snapchat",
                            "firstName": "Lainey",
                            "id": 1,
                            "lastName": "Ritter",
                            "posts": [
                                {
                                    "author": "Lainey Ritter",
                                    "authorId": 1,
                                    "id": 15,
                                    "likes": 560,
                                    "popularity": 0.8,
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
                                    "id": 21,
                                    "likes": 406,
                                    "popularity": 0.81,
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
                                    "popularity": 0.78,
                                    "reads": 50661,
                                    "tags": [
                                        "startups"
                                    ]
                                },
                                {
                                    "author": "Lainey Ritter",
                                    "authorId": 1,
                                    "id": 33,
                                    "likes": 289,
                                    "popularity": 0.73,
                                    "reads": 31629,
                                    "tags": [
                                        "science"
                                    ]
                                },
                                {
                                    "author": "Lainey Ritter",
                                    "authorId": 1,
                                    "id": 44,
                                    "likes": 450,
                                    "popularity": 0.88,
                                    "reads": 95611,
                                    "tags": []
                                },
                                {
                                    "author": "Lainey Ritter",
                                    "authorId": 1,
                                    "id": 55,
                                    "likes": 554,
                                    "popularity": 0.05,
                                    "reads": 42654,
                                    "tags": [
                                        "startups"
                                    ]
                                },
                                {
                                    "author": "Lainey Ritter",
                                    "authorId": 1,
                                    "id": 76,
                                    "likes": 122,
                                    "popularity": 0.01,
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
                                    "id": 80,
                                    "likes": 874,
                                    "popularity": 0.47,
                                    "reads": 9002,
                                    "tags": [
                                        "politics",
                                        "history"
                                    ]
                                },
                                {
                                    "author": "Lainey Ritter",
                                    "authorId": 1,
                                    "id": 82,
                                    "likes": 140,
                                    "popularity": 0.09,
                                    "reads": 3201,
                                    "tags": [
                                        "tech"
                                    ]
                                },
                                {
                                    "author": "Lainey Ritter",
                                    "authorId": 1,
                                    "id": 96,
                                    "likes": 395,
                                    "popularity": 0.44,
                                    "reads": 99575,
                                    "tags": [
                                        "science",
                                        "history"
                                    ]
                                },
                                {
                                    "author": "Lainey Ritter",
                                    "authorId": 1,
                                    "id": 97,
                                    "likes": 382,
                                    "popularity": 0.83,
                                    "reads": 47484,
                                    "tags": [
                                        "politics",
                                        "science",
                                        "design",
                                        "culture"
                                    ]
                                }
                            ],
                            "tags": [
                                "design",
                                "science",
                                "culture",
                                "health",
                                "politics",
                                "startups",
                                "tech",
                                "history"
                            ],
                            "totalLikeCount": 4770,
                            "totalReadCount": 625934
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
                                    "id": 38,
                                    "likes": 105,
                                    "popularity": 0.45,
                                    "reads": 45896,
                                    "tags": [
                                        "design",
                                        "history"
                                    ]
                                },
                                {
                                    "author": "Tia Roberson",
                                    "authorId": 2,
                                    "id": 39,
                                    "likes": 307,
                                    "popularity": 0.61,
                                    "reads": 89454,
                                    "tags": [
                                        "politics",
                                        "history"
                                    ]
                                },
                                {
                                    "author": "Tia Roberson",
                                    "authorId": 2,
                                    "id": 59,
                                    "likes": 971,
                                    "popularity": 0.21,
                                    "reads": 36154,
                                    "tags": [
                                        "politics",
                                        "tech"
                                    ]
                                },
                                {
                                    "author": "Tia Roberson",
                                    "authorId": 2,
                                    "id": 64,
                                    "likes": 163,
                                    "popularity": 0.34,
                                    "reads": 22095,
                                    "tags": [
                                        "politics",
                                        "history"
                                    ]
                                },
                                {
                                    "author": "Tia Roberson",
                                    "authorId": 2,
                                    "id": 83,
                                    "likes": 667,
                                    "popularity": 0.48,
                                    "reads": 93563,
                                    "tags": [
                                        "culture",
                                        "politics"
                                    ]
                                },
                                {
                                    "author": "Tia Roberson",
                                    "authorId": 2,
                                    "id": 98,
                                    "likes": 934,
                                    "popularity": 0.5,
                                    "reads": 17307,
                                    "tags": [
                                        "design"
                                    ]
                                },
                                {
                                    "author": "Tia Roberson",
                                    "authorId": 2,
                                    "id": 99,
                                    "likes": 473,
                                    "popularity": 0.34,
                                    "reads": 97868,
                                    "tags": [
                                        "culture",
                                        "startups",
                                        "tech"
                                    ]
                                }
                            ],
                            "tags": [
                                "culture",
                                "design",
                                "politics",
                                "startups",
                                "tech",
                                "history"
                            ],
                            "totalLikeCount": 3620,
                            "totalReadCount": 402337
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
                                    "id": 18,
                                    "likes": 983,
                                    "popularity": 0.09,
                                    "reads": 33952,
                                    "tags": [
                                        "tech",
                                        "history"
                                    ]
                                },
                                {
                                    "author": "Jaden Bryant",
                                    "authorId": 3,
                                    "id": 22,
                                    "likes": 138,
                                    "popularity": 0.64,
                                    "reads": 58200,
                                    "tags": []
                                },
                                {
                                    "author": "Jaden Bryant",
                                    "authorId": 3,
                                    "id": 51,
                                    "likes": 487,
                                    "popularity": 0.01,
                                    "reads": 98798,
                                    "tags": [
                                        "design",
                                        "startups",
                                        "tech"
                                    ]
                                }
                            ],
                            "tags": [
                                "design",
                                "startups",
                                "tech",
                                "history"
                            ],
                            "totalLikeCount": 1608,
                            "totalReadCount": 190950
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
                                    "id": 9,
                                    "likes": 165,
                                    "popularity": 0.32,
                                    "reads": 31367,
                                    "tags": [
                                        "politics"
                                    ]
                                },
                                {
                                    "author": "Jon Abbott",
                                    "authorId": 4,
                                    "id": 43,
                                    "likes": 149,
                                    "popularity": 0.07,
                                    "reads": 77776,
                                    "tags": [
                                        "science",
                                        "tech"
                                    ]
                                },
                                {
                                    "author": "Jon Abbott",
                                    "authorId": 4,
                                    "id": 46,
                                    "likes": 89,
                                    "popularity": 0.96,
                                    "reads": 79298,
                                    "tags": [
                                        "culture",
                                        "tech"
                                    ]
                                },
                                {
                                    "author": "Jon Abbott",
                                    "authorId": 4,
                                    "id": 62,
                                    "likes": 135,
                                    "popularity": 0.83,
                                    "reads": 87712,
                                    "tags": [
                                        "culture",
                                        "science"
                                    ]
                                },
                                {
                                    "author": "Jon Abbott",
                                    "authorId": 4,
                                    "id": 71,
                                    "likes": 321,
                                    "popularity": 0.69,
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
                                    "id": 78,
                                    "likes": 539,
                                    "popularity": 0.45,
                                    "reads": 13562,
                                    "tags": [
                                        "health"
                                    ]
                                },
                                {
                                    "author": "Jon Abbott",
                                    "authorId": 4,
                                    "id": 87,
                                    "likes": 619,
                                    "popularity": 0.66,
                                    "reads": 61622,
                                    "tags": [
                                        "culture",
                                        "startups",
                                        "science"
                                    ]
                                },
                                {
                                    "author": "Jon Abbott",
                                    "authorId": 4,
                                    "id": 95,
                                    "likes": 985,
                                    "popularity": 0.42,
                                    "reads": 55875,
                                    "tags": [
                                        "politics",
                                        "tech",
                                        "health",
                                        "history"
                                    ]
                                }
                            ],
                            "tags": [
                                "science",
                                "culture",
                                "health",
                                "politics",
                                "startups",
                                "tech",
                                "history"
                            ],
                            "totalLikeCount": 3002,
                            "totalReadCount": 436543
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
                                    "id": 3,
                                    "likes": 425,
                                    "popularity": 0.68,
                                    "reads": 11381,
                                    "tags": [
                                        "startups",
                                        "health"
                                    ]
                                },
                                {
                                    "author": "Trevon Rodriguez",
                                    "authorId": 5,
                                    "id": 8,
                                    "likes": 735,
                                    "popularity": 0.76,
                                    "reads": 8504,
                                    "tags": [
                                        "culture",
                                        "history"
                                    ]
                                },
                                {
                                    "author": "Trevon Rodriguez",
                                    "authorId": 5,
                                    "id": 14,
                                    "likes": 311,
                                    "popularity": 0.67,
                                    "reads": 25644,
                                    "tags": [
                                        "tech",
                                        "history"
                                    ]
                                },
                                {
                                    "author": "Trevon Rodriguez",
                                    "authorId": 5,
                                    "id": 20,
                                    "likes": 266,
                                    "popularity": 0.78,
                                    "reads": 63470,
                                    "tags": [
                                        "politics"
                                    ]
                                },
                                {
                                    "author": "Trevon Rodriguez",
                                    "authorId": 5,
                                    "id": 58,
                                    "likes": 466,
                                    "popularity": 0.1,
                                    "reads": 17389,
                                    "tags": [
                                        "science",
                                        "tech"
                                    ]
                                },
                                {
                                    "author": "Trevon Rodriguez",
                                    "authorId": 5,
                                    "id": 60,
                                    "likes": 52,
                                    "popularity": 0.07,
                                    "reads": 39800,
                                    "tags": [
                                        "health"
                                    ]
                                },
                                {
                                    "author": "Trevon Rodriguez",
                                    "authorId": 5,
                                    "id": 65,
                                    "likes": 498,
                                    "popularity": 0.87,
                                    "reads": 85870,
                                    "tags": [
                                        "history"
                                    ]
                                },
                                {
                                    "author": "Trevon Rodriguez",
                                    "authorId": 5,
                                    "id": 66,
                                    "likes": 224,
                                    "popularity": 0.05,
                                    "reads": 20532,
                                    "tags": [
                                        "health"
                                    ]
                                },
                                {
                                    "author": "Trevon Rodriguez",
                                    "authorId": 5,
                                    "id": 67,
                                    "likes": 903,
                                    "popularity": 0.71,
                                    "reads": 26815,
                                    "tags": [
                                        "health",
                                        "history"
                                    ]
                                },
                                {
                                    "author": "Trevon Rodriguez",
                                    "authorId": 5,
                                    "id": 74,
                                    "likes": 660,
                                    "popularity": 0.95,
                                    "reads": 51324,
                                    "tags": [
                                        "science"
                                    ]
                                },
                                {
                                    "author": "Trevon Rodriguez",
                                    "authorId": 5,
                                    "id": 77,
                                    "likes": 407,
                                    "popularity": 0.21,
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
                                    "id": 93,
                                    "likes": 881,
                                    "popularity": 0.41,
                                    "reads": 73964,
                                    "tags": [
                                        "tech",
                                        "history"
                                    ]
                                }
                            ],
                            "tags": [
                                "science",
                                "culture",
                                "health",
                                "politics",
                                "startups",
                                "tech",
                                "history"
                            ],
                            "totalLikeCount": 5828,
                            "totalReadCount": 425357
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
                                    "id": 5,
                                    "likes": 44,
                                    "popularity": 0.57,
                                    "reads": 94293,
                                    "tags": [
                                        "startups",
                                        "health"
                                    ]
                                },
                                {
                                    "author": "Bryson Bowers",
                                    "authorId": 6,
                                    "id": 42,
                                    "likes": 452,
                                    "popularity": 0.08,
                                    "reads": 39721,
                                    "tags": [
                                        "design"
                                    ]
                                },
                                {
                                    "author": "Bryson Bowers",
                                    "authorId": 6,
                                    "id": 49,
                                    "likes": 437,
                                    "popularity": 0.95,
                                    "reads": 79986,
                                    "tags": [
                                        "startups"
                                    ]
                                },
                                {
                                    "author": "Bryson Bowers",
                                    "authorId": 6,
                                    "id": 54,
                                    "likes": 723,
                                    "popularity": 0.56,
                                    "reads": 312,
                                    "tags": [
                                        "culture",
                                        "tech"
                                    ]
                                },
                                {
                                    "author": "Bryson Bowers",
                                    "authorId": 6,
                                    "id": 81,
                                    "likes": 552,
                                    "popularity": 0.09,
                                    "reads": 22975,
                                    "tags": [
                                        "design",
                                        "history"
                                    ]
                                },
                                {
                                    "author": "Bryson Bowers",
                                    "authorId": 6,
                                    "id": 85,
                                    "likes": 25,
                                    "popularity": 0.18,
                                    "reads": 16861,
                                    "tags": [
                                        "tech"
                                    ]
                                },
                                {
                                    "author": "Bryson Bowers",
                                    "authorId": 6,
                                    "id": 94,
                                    "likes": 313,
                                    "popularity": 0.09,
                                    "reads": 48256,
                                    "tags": []
                                }
                            ],
                            "tags": [
                                "culture",
                                "design",
                                "health",
                                "startups",
                                "tech",
                                "history"
                            ],
                            "totalLikeCount": 2546,
                            "totalReadCount": 302404
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
                                    "id": 7,
                                    "likes": 499,
                                    "popularity": 0.93,
                                    "reads": 95434,
                                    "tags": [
                                        "science",
                                        "health"
                                    ]
                                },
                                {
                                    "author": "Ahmad Dunn",
                                    "authorId": 7,
                                    "id": 11,
                                    "likes": 750,
                                    "popularity": 0.54,
                                    "reads": 6183,
                                    "tags": [
                                        "science",
                                        "design"
                                    ]
                                },
                                {
                                    "author": "Ahmad Dunn",
                                    "authorId": 7,
                                    "id": 23,
                                    "likes": 501,
                                    "popularity": 0.71,
                                    "reads": 20545,
                                    "tags": [
                                        "politics",
                                        "culture"
                                    ]
                                },
                                {
                                    "author": "Ahmad Dunn",
                                    "authorId": 7,
                                    "id": 27,
                                    "likes": 324,
                                    "popularity": 0.98,
                                    "reads": 73428,
                                    "tags": [
                                        "health"
                                    ]
                                },
                                {
                                    "author": "Ahmad Dunn",
                                    "authorId": 7,
                                    "id": 28,
                                    "likes": 713,
                                    "popularity": 0.8,
                                    "reads": 89173,
                                    "tags": [
                                        "design"
                                    ]
                                },
                                {
                                    "author": "Ahmad Dunn",
                                    "authorId": 7,
                                    "id": 31,
                                    "likes": 980,
                                    "popularity": 0.63,
                                    "reads": 94798,
                                    "tags": [
                                        "startups"
                                    ]
                                },
                                {
                                    "author": "Ahmad Dunn",
                                    "authorId": 7,
                                    "id": 45,
                                    "likes": 31,
                                    "popularity": 0.89,
                                    "reads": 63432,
                                    "tags": [
                                        "science",
                                        "history"
                                    ]
                                },
                                {
                                    "author": "Ahmad Dunn",
                                    "authorId": 7,
                                    "id": 48,
                                    "likes": 201,
                                    "popularity": 0.57,
                                    "reads": 13867,
                                    "tags": [
                                        "politics",
                                        "health"
                                    ]
                                },
                                {
                                    "author": "Ahmad Dunn",
                                    "authorId": 7,
                                    "id": 53,
                                    "likes": 62,
                                    "popularity": 0.62,
                                    "reads": 68047,
                                    "tags": [
                                        "politics",
                                        "health"
                                    ]
                                },
                                {
                                    "author": "Ahmad Dunn",
                                    "authorId": 7,
                                    "id": 57,
                                    "likes": 933,
                                    "popularity": 0.68,
                                    "reads": 80057,
                                    "tags": []
                                },
                                {
                                    "author": "Ahmad Dunn",
                                    "authorId": 7,
                                    "id": 61,
                                    "likes": 108,
                                    "popularity": 0.51,
                                    "reads": 5103,
                                    "tags": [
                                        "startups",
                                        "health"
                                    ]
                                },
                                {
                                    "author": "Ahmad Dunn",
                                    "authorId": 7,
                                    "id": 68,
                                    "likes": 11,
                                    "popularity": 0.23,
                                    "reads": 80121,
                                    "tags": [
                                        "startups"
                                    ]
                                },
                                {
                                    "author": "Ahmad Dunn",
                                    "authorId": 7,
                                    "id": 86,
                                    "likes": 873,
                                    "popularity": 0.91,
                                    "reads": 53869,
                                    "tags": [
                                        "startups",
                                        "history"
                                    ]
                                },
                                {
                                    "author": "Ahmad Dunn",
                                    "authorId": 7,
                                    "id": 100,
                                    "likes": 573,
                                    "popularity": 0.43,
                                    "reads": 89894,
                                    "tags": [
                                        "science",
                                        "design",
                                        "history"
                                    ]
                                }
                            ],
                            "tags": [
                                "science",
                                "culture",
                                "design",
                                "politics",
                                "health",
                                "startups",
                                "history"
                            ],
                            "totalLikeCount": 6559,
                            "totalReadCount": 833951
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
                                    "id": 4,
                                    "likes": 728,
                                    "popularity": 0.88,
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
                                    "popularity": 0.6,
                                    "reads": 35913,
                                    "tags": [
                                        "science",
                                        "health",
                                        "history"
                                    ]
                                },
                                {
                                    "author": "Elisha Friedman",
                                    "authorId": 8,
                                    "id": 13,
                                    "likes": 230,
                                    "popularity": 0.31,
                                    "reads": 64058,
                                    "tags": [
                                        "design",
                                        "tech"
                                    ]
                                },
                                {
                                    "author": "Elisha Friedman",
                                    "authorId": 8,
                                    "id": 19,
                                    "likes": 779,
                                    "popularity": 0.91,
                                    "reads": 3041,
                                    "tags": [
                                        "science"
                                    ]
                                },
                                {
                                    "author": "Elisha Friedman",
                                    "authorId": 8,
                                    "id": 25,
                                    "likes": 365,
                                    "popularity": 0.12,
                                    "reads": 32949,
                                    "tags": [
                                        "politics",
                                        "tech"
                                    ]
                                },
                                {
                                    "author": "Elisha Friedman",
                                    "authorId": 8,
                                    "id": 52,
                                    "likes": 602,
                                    "popularity": 0.26,
                                    "reads": 76359,
                                    "tags": [
                                        "science",
                                        "health"
                                    ]
                                },
                                {
                                    "author": "Elisha Friedman",
                                    "authorId": 8,
                                    "id": 56,
                                    "likes": 319,
                                    "popularity": 0.49,
                                    "reads": 96864,
                                    "tags": [
                                        "design",
                                        "health",
                                        "culture"
                                    ]
                                }
                            ],
                            "tags": [
                                "design",
                                "science",
                                "culture",
                                "health",
                                "politics",
                                "tech",
                                "history"
                            ],
                            "totalLikeCount": 3876,
                            "totalReadCount": 328829
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
                                    "id": 1,
                                    "likes": 960,
                                    "popularity": 0.13,
                                    "reads": 50361,
                                    "tags": [
                                        "tech",
                                        "health"
                                    ]
                                },
                                {
                                    "author": "Rylee Paul",
                                    "authorId": 9,
                                    "id": 17,
                                    "likes": 527,
                                    "popularity": 0.88,
                                    "reads": 52454,
                                    "tags": [
                                        "science",
                                        "health"
                                    ]
                                },
                                {
                                    "author": "Rylee Paul",
                                    "authorId": 9,
                                    "id": 36,
                                    "likes": 709,
                                    "popularity": 0.08,
                                    "reads": 65277,
                                    "tags": [
                                        "health",
                                        "design"
                                    ]
                                },
                                {
                                    "author": "Rylee Paul",
                                    "authorId": 9,
                                    "id": 40,
                                    "likes": 968,
                                    "popularity": 0.54,
                                    "reads": 90784,
                                    "tags": [
                                        "culture",
                                        "science"
                                    ]
                                },
                                {
                                    "author": "Rylee Paul",
                                    "authorId": 9,
                                    "id": 41,
                                    "likes": 715,
                                    "popularity": 0.69,
                                    "reads": 47876,
                                    "tags": [
                                        "design",
                                        "health"
                                    ]
                                },
                                {
                                    "author": "Rylee Paul",
                                    "authorId": 9,
                                    "id": 72,
                                    "likes": 490,
                                    "popularity": 0.86,
                                    "reads": 31099,
                                    "tags": [
                                        "startups"
                                    ]
                                },
                                {
                                    "author": "Rylee Paul",
                                    "authorId": 9,
                                    "id": 73,
                                    "likes": 315,
                                    "popularity": 0.13,
                                    "reads": 8966,
                                    "tags": [
                                        "design"
                                    ]
                                },
                                {
                                    "author": "Rylee Paul",
                                    "authorId": 9,
                                    "id": 84,
                                    "likes": 233,
                                    "popularity": 0.65,
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
                                    "id": 90,
                                    "likes": 206,
                                    "popularity": 0.74,
                                    "reads": 62359,
                                    "tags": [
                                        "politics"
                                    ]
                                },
                                {
                                    "author": "Rylee Paul",
                                    "authorId": 9,
                                    "id": 92,
                                    "likes": 203,
                                    "popularity": 0.49,
                                    "reads": 82099,
                                    "tags": [
                                        "health"
                                    ]
                                }
                            ],
                            "tags": [
                                "science",
                                "culture",
                                "health",
                                "politics",
                                "design",
                                "startups",
                                "tech",
                                "history"
                            ],
                            "totalLikeCount": 5326,
                            "totalReadCount": 509129
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
                                    "popularity": 0.2,
                                    "reads": 66926,
                                    "tags": [
                                        "tech"
                                    ]
                                },
                                {
                                    "author": "Kinley Crosby",
                                    "authorId": 10,
                                    "id": 47,
                                    "likes": 852,
                                    "popularity": 0.25,
                                    "reads": 72023,
                                    "tags": [
                                        "culture",
                                        "health"
                                    ]
                                },
                                {
                                    "author": "Kinley Crosby",
                                    "authorId": 10,
                                    "id": 70,
                                    "likes": 632,
                                    "popularity": 0.6,
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
                                    "popularity": 0.98,
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
                                    "popularity": 0.07,
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
                                    "id": 88,
                                    "likes": 371,
                                    "popularity": 0.35,
                                    "reads": 21916,
                                    "tags": [
                                        "culture",
                                        "science",
                                        "history"
                                    ]
                                }
                            ],
                            "tags": [
                                "design",
                                "science",
                                "culture",
                                "health",
                                "tech",
                                "startups",
                                "history"
                            ],
                            "totalLikeCount": 4073,
                            "totalReadCount": 323728
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
                                    "popularity": 0.32,
                                    "reads": 80351,
                                    "tags": [
                                        "tech"
                                    ]
                                },
                                {
                                    "author": "Adalyn Blevins",
                                    "authorId": 11,
                                    "id": 16,
                                    "likes": 749,
                                    "popularity": 0.29,
                                    "reads": 71754,
                                    "tags": [
                                        "design",
                                        "history"
                                    ]
                                },
                                {
                                    "author": "Adalyn Blevins",
                                    "authorId": 11,
                                    "id": 34,
                                    "likes": 670,
                                    "popularity": 0.24,
                                    "reads": 65450,
                                    "tags": [
                                        "health"
                                    ]
                                },
                                {
                                    "author": "Adalyn Blevins",
                                    "authorId": 11,
                                    "id": 37,
                                    "likes": 107,
                                    "popularity": 0.55,
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
                                    "id": 69,
                                    "likes": 425,
                                    "popularity": 0.56,
                                    "reads": 5149,
                                    "tags": [
                                        "science",
                                        "history"
                                    ]
                                },
                                {
                                    "author": "Adalyn Blevins",
                                    "authorId": 11,
                                    "id": 89,
                                    "likes": 251,
                                    "popularity": 0.6,
                                    "reads": 75503,
                                    "tags": [
                                        "politics",
                                        "startups",
                                        "tech",
                                        "history"
                                    ]
                                }
                            ],
                            "tags": [
                                "science",
                                "design",
                                "politics",
                                "health",
                                "startups",
                                "tech",
                                "history"
                            ],
                            "totalLikeCount": 2792,
                            "totalReadCount": 334153
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
                                    "id": 2,
                                    "likes": 469,
                                    "popularity": 0.68,
                                    "reads": 90406,
                                    "tags": [
                                        "startups",
                                        "tech",
                                        "history"
                                    ]
                                },
                                {
                                    "author": "Zackery Turner",
                                    "authorId": 12,
                                    "id": 6,
                                    "likes": 387,
                                    "popularity": 0.83,
                                    "reads": 50062,
                                    "tags": [
                                        "science",
                                        "startups"
                                    ]
                                },
                                {
                                    "author": "Zackery Turner",
                                    "authorId": 12,
                                    "id": 24,
                                    "likes": 940,
                                    "popularity": 0.74,
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
                                    "id": 26,
                                    "likes": 748,
                                    "popularity": 0.75,
                                    "reads": 28239,
                                    "tags": [
                                        "tech"
                                    ]
                                },
                                {
                                    "author": "Zackery Turner",
                                    "authorId": 12,
                                    "id": 30,
                                    "likes": 232,
                                    "popularity": 0.65,
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
                                    "popularity": 0.84,
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
                                    "popularity": 0.96,
                                    "reads": 4923,
                                    "tags": [
                                        "health",
                                        "history"
                                    ]
                                },
                                {
                                    "author": "Zackery Turner",
                                    "authorId": 12,
                                    "id": 63,
                                    "likes": 682,
                                    "popularity": 0.62,
                                    "reads": 54374,
                                    "tags": [
                                        "culture",
                                        "design"
                                    ]
                                },
                                {
                                    "author": "Zackery Turner",
                                    "authorId": 12,
                                    "id": 91,
                                    "likes": 455,
                                    "popularity": 0.19,
                                    "reads": 90395,
                                    "tags": [
                                        "science",
                                        "health"
                                    ]
                                }
                            ],
                            "tags": [
                                "design",
                                "science",
                                "culture",
                                "health",
                                "tech",
                                "politics",
                                "startups",
                                "history"
                            ],
                            "totalLikeCount": 5803,
                            "totalReadCount": 491168
                        }
                    ]
                }
                
			]);
		});
};