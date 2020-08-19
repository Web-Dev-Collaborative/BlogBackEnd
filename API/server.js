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
const pingRouter = require('../ping/pingRouter.js');
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

// ping endpoint
server.use('/api/ping', pingRouter);

// unsecured/unlogged-in response
server.get('/', (req, res) => {
  res.send('<h1>🎣  You must log in to view users, posts, authors, and tags.</h1>');
})

module.exports = server;