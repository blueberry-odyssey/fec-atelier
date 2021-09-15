const productRouter = require('express').Router();
const axios = require('axios');
const basePath = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';
const config = require('../config.js');

let params = {
  headers: { Authorization: config.TOKEN },
};

// productRouter.get('/testing', function (req, res) {
//   console.log('overviewRouter NEWWWW GET /testing endpoint reached!');
//   res.end();
// });

//productRouter.post('/endpoint', function(req, res) {});

productRouter.get('/findRelatedItems', (req, res) => {
  let productId = req.query.id;
  axios.get(basePath + `/products/${productId}/related`, params)
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