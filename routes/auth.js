const router = require('express').Router();
const jsonParser = require('body-parser').json();
const token = require('../lib/token');

router.get('/token', (req, res) => {
  return token.sign()
  .then(token => res.send(token))
  .catch( err => {
    res.status(500).json({ reason: 'Token Signing failure'});
  });
});

router.post('/decode', jsonParser, (req, res) => {
  const requestToken = req.body.token;

  return token.decode(requestToken)
  .then( object => {
    res.json(object);
  })
  .catch( err => {
    res.status(500).json({ reason: 'Token Decoding failure'});
  });
})

module.exports = router;
