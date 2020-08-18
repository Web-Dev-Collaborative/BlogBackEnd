exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('customers')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('customers').insert([
                {
                    postsid: 15,
                    authorsid: 1,
                    likes: 560,
                    reads: 81549
                },
                {
                    postsid: 21,
                    authorsid: 1,
                    likes: 406,
                    reads: 88797
                },
                {
                    postsid: 29,
                    authorsid: 1,
                    likes: 598,
                    reads: 50661
                },
                {
                    postsid: 33,
                    authorsid: 1,
                    likes: 289,
                    reads: 31629
                },
                {
                    postsid: 44,
                    authorsid: 1,
                    likes: 450,
                    reads: 95611
                },
                {
                    postsid: 55,
                    authorsid: 1,
                    likes: 554,
                    reads: 42654
                },
                {
                    postsid: 76,
                    authorsid: 1,
                    likes: 122,
                    reads: 75771
                },
                {
                    postsid: 80,
                    authorsid: 1,
                    likes: 874,
                    reads: 9002
                },
                {
                    postsid: 82,
                    authorsid: 1,
                    likes: 140,
                    reads: 3201
                },
                {
                    postsid: 96,
                    authorsid: 1,
                    likes: 395,
                    reads: 99575
                },
                {
                    postsid: 97,
                    authorsid: 1,
                    likes: 382,
                    reads: 47484
                },
                {
                    postsid: 38,
                    authorsid: 2,
                    likes: 105,
                    reads: 45896
                },
                {
                    postsid: 39,
                    authorsid: 2,
                    likes: 307,
                    reads: 89454
                },
                {
                    postsid: 59,
                    authorsid: 2,
                    likes: 971,
                    reads: 36154
                },
                {
                    postsid: 64,
                    authorsid: 2,
                    likes: 163,
                    reads: 22095
                },
                {
                    postsid: 83,
                    authorsid: 2,
                    likes: 667,
                    reads: 93563
                },
                {
                    postsid: 98,
                    authorsid: 2,
                    likes: 934,
                    reads: 17307
                },
                {
                    postsid: 99,
                    authorsid: 2,
                    likes: 473,
                    reads: 97868
                },
                {
                    postsid: 18,
                    authorsid: 3,
                    likes: 983,
                    reads: 33952
                },
                {
                    postsid: 22,
                    authorsid: 3,
                    likes: 138,
                    reads: 58200
                },
                {
                    postsid: 51,
                    authorsid: 3,
                    likes: 487,
                    reads: 98798
                },
                {
                    postsid: 9,
                    authorsid: 4,
                    likes: 165,
                    reads: 31367
                },
                {
                    postsid: 43,
                    authorsid: 4,
                    likes: 149,
                    reads: 77776
                },
                {
                    postsid: 46,
                    authorsid: 4,
                    likes: 89,
                    reads: 79298
                },
                {
                    postsid: 62,
                    authorsid: 4,
                    likes: 135,
                    reads: 87712
                },
                {
                    postsid: 71,
                    authorsid: 4,
                    likes: 321,
                    reads: 29331
                },
                {
                    postsid: 78,
                    authorsid: 4,
                    likes: 539,
                    reads: 13562
                },
                {
                    postsid: 87,
                    authorsid: 4,
                    likes: 619,
                    reads: 61622
                },
                {
                    postsid: 95,
                    authorsid: 4,
                    likes: 985,
                    reads: 55875
                },
                {
                    postsid: 3,
                    authorsid: 5,
                    likes: 425,
                    reads: 11381
                },
                {
                    postsid: 8,
                    authorsid: 5,
                    likes: 735,
                    reads: 8504
                },
                {
                    postsid: 14,
                    authorsid: 5,
                    likes: 311,
                    reads: 25644
                },
                {
                    postsid: 20,
                    authorsid: 5,
                    likes: 266,
                    reads: 63470
                },
                {
                    postsid: 58,
                    authorsid: 5,
                    likes: 466,
                    reads: 17389
                },
                {
                    postsid: 60,
                    authorsid: 5,
                    likes: 52,
                    reads: 39800
                },
                {
                    postsid: 65,
                    authorsid: 5,
                    likes: 498,
                    reads: 85870
                },
                {
                    postsid: 66,
                    authorsid: 5,
                    likes: 224,
                    reads: 20532
                },
                {
                    postsid: 67,
                    authorsid: 5,
                    likes: 903,
                    reads: 26815
                },
                {
                    postsid: 74,
                    authorsid: 5,
                    likes: 660,
                    reads: 51324
                },
                {
                    postsid: 77,
                    authorsid: 5,
                    likes: 407,
                    reads: 664
                },
                {
                    postsid: 93,
                    authorsid: 5,
                    likes: 881,
                    reads: 73964
                },
                {
                    postsid: 5,
                    authorsid: 6,
                    likes: 44,
                    reads: 94293
                },
                {
                    postsid: 42,
                    authorsid: 6,
                    likes: 452,
                    reads: 39721
                },
                {
                    postsid: 49,
                    authorsid: 6,
                    likes: 437,
                    reads: 79986
                },
                {
                    postsid: 54,
                    authorsid: 6,
                    likes: 723,
                    reads: 312
                },
                {
                    postsid: 81,
                    authorsid: 6,
                    likes: 552,
                    reads: 22975
                },
                {
                    postsid: 85,
                    authorsid: 6,
                    likes: 25,
                    reads: 16861
                },
                {
                    postsid: 94,
                    authorsid: 6,
                    likes: 313,
                    reads: 48256
                },
                {
                    postsid: 7,
                    authorsid: 7,
                    likes: 499,
                    reads: 95434
                },
                {
                    postsid: 11,
                    authorsid: 7,
                    likes: 750,
                    reads: 6183
                },
                {
                    postsid: 23,
                    authorsid: 7,
                    likes: 501,
                    reads: 20545
                },
                {
                    postsid: 27,
                    authorsid: 7,
                    likes: 324,
                    reads: 73428
                },
                {
                    postsid: 28,
                    authorsid: 7,
                    likes: 713,
                    reads: 89173
                },
                {
                    postsid: 31,
                    authorsid: 7,
                    likes: 980,
                    reads: 94798
                },
                {
                    postsid: 45,
                    authorsid: 7,
                    likes: 31,
                    reads: 63432
                },
                {
                    postsid: 48,
                    authorsid: 7,
                    likes: 201,
                    reads: 13867
                },
                {
                    postsid: 53,
                    authorsid: 7,
                    likes: 62,
                    reads: 68047
                },
                {
                    postsid: 57,
                    authorsid: 7,
                    likes: 933,
                    reads: 80057
                },
                {
                    postsid: 61,
                    authorsid: 7,
                    likes: 108,
                    reads: 5103
                },
                {
                    postsid: 68,
                    authorsid: 7,
                    likes: 11,
                    reads: 80121
                },
                {
                    postsid: 86,
                    authorsid: 7,
                    likes: 873,
                    reads: 53869
                },
                {
                    postsid: 100,
                    authorsid: 7,
                    likes: 573,
                    reads: 89894
                },
                {
                    postsid: 4,
                    authorsid: 8,
                    likes: 728,
                    reads: 19645
                },
                {
                    postsid: 10,
                    authorsid: 8,
                    likes: 853,
                    reads: 35913
                },
                {
                    postsid: 13,
                    authorsid: 8,
                    likes: 230,
                    reads: 64058
                },
                {
                    postsid: 19,
                    authorsid: 8,
                    likes: 779,
                    reads: 3041
                },
                {
                    postsid: 25,
                    authorsid: 8,
                    likes: 365,
                    reads: 32949
                },
                {
                    postsid: 52,
                    authorsid: 8,
                    likes: 602,
                    reads: 76359
                },
                {
                    postsid: 56,
                    authorsid: 8,
                    likes: 319,
                    reads: 96864
                },
                {
                    postsid: 1,
                    authorsid: 9,
                    likes: 960,
                    reads: 50361
                },
                {
                    postsid: 17,
                    authorsid: 9,
                    likes: 527,
                    reads: 52454
                },
                {
                    postsid: 36,
                    authorsid: 9,
                    likes: 709,
                    reads: 65277
                },
                {
                    postsid: 40,
                    authorsid: 9,
                    likes: 968,
                    reads: 90784
                },
                {
                    postsid: 41,
                    authorsid: 9,
                    likes: 715,
                    reads: 47876
                },
                {
                    postsid: 72,
                    authorsid: 9,
                    likes: 490,
                    reads: 31099
                },
                {
                    postsid: 73,
                    authorsid: 9,
                    likes: 315,
                    reads: 8966
                },
                {
                    postsid: 84,
                    authorsid: 9,
                    likes: 233,
                    reads: 17854
                },
                {
                    postsid: 90,
                    authorsid: 9,
                    likes: 206,
                    reads: 62359
                },
                {
                    postsid: 92,
                    authorsid: 9,
                    likes: 203,
                    reads: 82099
                },
                {
                    postsid: ,
                    authorsid: 10,
                    likes: ,
                    reads: 
                },
                {
                    postsid: ,
                    authorsid: 10,
                    likes: ,
                    reads: 
                },
                {
                    postsid: ,
                    authorsid: 10,
                    likes: ,
                    reads: 
                },
                {
                    postsid: ,
                    authorsid: 10,
                    likes: ,
                    reads: 
                },
                {
                    postsid: ,
                    authorsid: 10,
                    likes: ,
                    reads: 
                },
                {
                    postsid: ,
                    authorsid: 10,
                    likes: ,
                    reads: 
                },
                {
                    postsid: ,
                    authorsid: 11,
                    likes: ,
                    reads: 
                },
                {
                    postsid: ,
                    authorsid: 11,
                    likes: ,
                    reads: 
                },
                {
                    postsid: ,
                    authorsid: 11,
                    likes: ,
                    reads: 
                },
                {
                    postsid: ,
                    authorsid: 11,
                    likes: ,
                    reads: 
                },
                {
                    postsid: ,
                    authorsid: 11,
                    likes: ,
                    reads: 
                },
                {
                    postsid: ,
                    authorsid: 11,
                    likes: ,
                    reads: 
                }
                
			]);
		});
};