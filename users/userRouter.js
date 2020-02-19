const express = require('express');
const router = express.Router();
const db = require('./userDb')

router.post('/', (req, res) => {
  
});

router.post('/:id/posts', (req, res) => {
  
});

router.get('/', (req, res, next) => {
  db.get()
  .then((users) => {
    res
    .status(200)
    .json(users)
  }).catch((err) => {
    //console.log(err)
    res.status(500).json({ message: "Error retrieving the hubs"})
    next()
  });
});

router.get('/:id', (req, res, next) => {
  db.getById(req.params.id)
  .then((users) => {
    res
    .status(200)
    .json(users)
  }).catch((err) => {
    next()
  });
});

router.get('/:id/posts', (req, res) => {
  
});

router.delete('/:id', (req, res) => {
  
});

router.put('/:id', (req, res) => {
  
});

//custom middleware

function validateUserId(req, res, next) {
  
}

function validateUser(req, res, next) {
  
}

function validatePost(req, res, next) {
  
}

module.exports = router;
