const productRouter = require('express').Router();
const axios = require('axios');
const config = require('../config.js');
const basePath = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';


let params = {
  headers: { Authorization: config.TOKEN },
};

productRouter.post('/getProductDetails', function (req, res) {
  console.log('POST /getProductDetails endpoint reached!');
  console.log('req.body: ', req.body);
  axios.get(`${basePath}/products/${req.body['product_id']}/`, params)
    .then(function (productData) {
      console.log('productData!!: ', productData.data);
      res.send(productData.data);
      res.end();
    })
});

//productRouter.post('/endpoint', function(req, res) {});

module.exports = productRouter;