const router = require('express').Router();
const jsonParser = require('body-parser').json();
const token = require('../lib/token');

router.get('/token', (req, res) => {
  return token.sign()
  .then(token => res.json(token));
});

module.exports = router;
