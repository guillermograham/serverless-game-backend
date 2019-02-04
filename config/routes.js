const express = require('express');
const router  = express.Router();

const users = require('require-dir')('../controllers/users');

router
  .route('/users/:userId')
  .get(users.getOne);

router
  .route('/users')
  .post(users.create);

module.exports = router;
