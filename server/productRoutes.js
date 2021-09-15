const productRouter = require('express').Router();
const axios = require('axios');

productRouter.get('/testing', function (req, res) {
  console.log('overviewRouter NEWWWW GET /testing endpoint reached!');
  res.end();
});

//productRouter.post('/endpoint', function(req, res) {});

module.exports = productRouter;