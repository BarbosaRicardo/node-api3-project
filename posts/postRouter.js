const express = require('express');
const posts = require("./postDb");

//express Router 
const router = express.Router();

router.get('/', (req, res) => {
  // do your magic!
  res.status(200).json(req.post);
});

//global mw
router.use('/:id', validatePostId)

  // do your magic!
  router.get("/", (req, res) => {
    postDb
    .get()
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      res.status(500).json({message: "No post found"})
    })
  });

router.delete('/:id', (req, res) => {
  // do your magic!
  const { id } = req.params
  postDb
  remove(id)
    .then(post => {
      res.status(200).json({message: `${post} post has been deleted`})
    })
    .catch(err=> {
      res.status(500).json({message: "Error deleting post"})
    })
});

router.put('/:id', (req, res) => {
  // do your magic!
  const { id } = req.post
  postDb.update(id, req.body)
    .then(post => {
      res.status(500).json({message: "unable to update"})
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
  const { id } = req.params;
  postDb
    .getById(id)
    .then(post => {
      if(post) {
        req.post = post;
        next();
      } else {
        res.status(404).json({ message: "invalid id" })
      }
    })
    .catch(err => {
      res.status(500).json({message: "catch error", err});
    })
}


module.exports = router;
