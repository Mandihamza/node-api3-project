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

router.get('/:id', validateUserId(), (req, res) => {
  res.status(200).json(req.user)
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

router.put('/:id', (req, res, next) => {
  db.update(req.params.id, req.body)
  .then(users => {
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(404).json({ message: 'The user could not be found' });
    }
  })
  .catch(error => {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error updating the user',
    });
  });
});

//custom middleware

function validateUserId() {
    return (req, res, next) => {
      db.getById(req.params.id)
      .then((user) => {
        if(user) {
          req.user = user
          next()
        } else {
          res.status(404).json({
            message: "User not found"
          })
        }
      }).catch((err) => {
        console.log(err)
        res.status(500).json({
          message: "Error retrieving the user"
        })
      });
  }
}
function validateUser(req, res, next) {
  
}

function validatePost(req, res, next) {
  
}

module.exports = router;
