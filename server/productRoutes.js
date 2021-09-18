const productRouter = require('express').Router();
const axios = require('axios');
const config = require('../config.js');
const basePath = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';


let params = {
  headers: { Authorization: config.TOKEN },
};

productRouter.post('/getProductDetails', function (req, res) {
  // console.log('POST /getProductDetails endpoint reached!');
  // console.log('req.body: ', req.body);
  axios.get(`${basePath}/products/${req.body['product_id']}/`, params)
    .then(function (productData) {
      // console.log('productData!!: ', productData.data);
      res.send(productData.data);
      res.end();
    })
});

//productRouter.post('/endpoint', function(req, res) {});

productRouter.get('/findRelatedItems', (req, res) => {
  let productID = req.query.id;
  axios.get(basePath + `/products/${productID}/related`, params)
    .then(result => {
      // console.log('incoming data', result.data);
      res.send(result.data);
    })
    .catch(err => { throw err; })
})

// ***This 'relatedProductsAndStyles' route handles 2 different API requests***
// Both take an array of product IDs and a 'styles' string
// For just the related products use: { params: {productIDArray, styles: '' }}
// For the styles, (which contain images) use: { params: {productIDArray, styles: '/styles' }}

productRouter.get('/relatedProductsAndStyles', (req, res) => {
  let styles = req.query.styles;
  let productIDs = req.query.productIDArray;
  // console.log('req styles present?', req.query, 'styllles:', styles);
  let relatedProductData = [];
  productIDs.forEach(item => {
    relatedProductData.push(
      axios.get(basePath + `/products/${item + styles}`, params)
        .then(result => {
          return result.data
        })
    )
  })
  axios.all(
    relatedProductData
  )
    .then(axios.spread((...results) => {
      // console.log('incoming data', results);
      res.send(results);
    }))
    .catch(err => { throw err; })
})

module.exports = productRouter;