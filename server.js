const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send(`2>Let's write some middleware!</h2>`);
});

//custom middleware

/**
 * logger logs to the console the following information 
 * about each request:
 * request method
 * request url
 * and a timestamp
 * 
 * This mw runs on every request made to the API
 */

 //create a mw function for requestTime
//  var requestTime = function(req, res, next) {
//    req.requestTime = Date.now()
//    next()
//  }

function logger(req, res, next) {}
  const { method, url, requestTime } = req
  const agent = req.get("User-Agent")
  req.requestTime = Date.now()

  console.log(` ${method} ${url} ${requestTime} ${agent}`)

  
module.exports = server;
