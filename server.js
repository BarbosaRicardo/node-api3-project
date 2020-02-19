const express = require('express');
const helmet = require("helmet");
const postRouter = require("./posts/postRouter");
const userRouter = require("./users/userRouter");

//3rd party mw
const server = express();
const morgan = require("morgan");

//3rd party mw
server.use(helmet());
server.use(morgan);

//global mw
server.use(express.json());
server.use(logger);
server.use(userRouter)
server.use(postRouter)

module.exports = server;

//custom mw
function logger(req, res, next) {
  console.log(
    `${req.method} Request to ${req.originalUrl} 
      at ${new Date().toISOString()}`
  );
  next();
}

  

