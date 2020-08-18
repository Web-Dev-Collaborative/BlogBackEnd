const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const logger = require('../middleware/logger');

const usersRouter = require("../users/user-router");
const loginRouter = require("../auth/login-router.js");
const registerRouter = require("../auth/register-router.js");

const authorsRouter = require('../authors/authorsRouter.js');
const postsRouter = require('../posts/postsRouter.js');
const tagsRouter = require('../tags/tagsRouter.js');

// authors endpoint fields:  bio, firstName, authorsid (id), lastName, posts, tags, totalLikeCount, totalReadCount
	// queries:  
// posts endpoint fields:  author, authorId, id, likes, reads, tags
  // queries:  

// export getTagsByAuthor, getTagsByPost from tags model
// export getPosts, getPostsByAuthor, getTotalReadsCount, getTotalLikesCount from posts model
// still need /api/ping and query parameters

const server = express();

server.use(helmet());
server.use(logger);
server.use(express.json());
server.use(cors());

// standard auth routers
server.use("/api/login", loginRouter);
server.use("/api/register", registerRouter);
server.use("/api/users", usersRouter);

// authors router
server.use('/api/authors', authorsRouter);

// posts router
server.use('/api/posts', postsRouter);

// tags router
server.use('/api/tags', tagsRouter);

// unsecured/unlogged-in response
server.get('/', (req, res) => {
  res.send('<h1>🎣</h1>');
})

module.exports = server;