const express = require('express');
const app = express();
const auth = require('../routes/auth');

app.use('/api/auth', auth);

app.use( (err, req, res, next) => {
  res.status(err.code || 500).json({ error: err.error || 'Server Error', msg: err.msg });
})

module.exports = app;
