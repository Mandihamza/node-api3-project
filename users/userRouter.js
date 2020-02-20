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
    res.status(500).json({ message: "Error retrieving the users"})
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
    res.status(500).json({ message: "Error retrieving the user"})
    next()
  });
});

router.get('/:id/posts', (req, res, next) => {
  db.getUserPosts(req.params.id)
  .then(posts => {
    res
    .status(200)
    .json(posts)
  }).catch(err => {
    res.status(500).json({
      message: 'Error getting the messages for the specified user'
    })
    next()
  });
});


router.delete('/:id', (req, res) => {
  db.remove(req.params.id)
  .then(count => {
    if (count > 0) {
      res.status(200).json({ message: 'The user has been deleted' });
    } else {
      res.status(404).json({ message: 'The user could not be found' });
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      message: 'Error removing the user',
    });
  });
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
