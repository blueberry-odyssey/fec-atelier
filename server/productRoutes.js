const productRouter = require('express').Router();
const axios = require('axios');
const config = require('../config.js');
const basePath = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';


let params = {
  headers: { Authorization: config.TOKEN },
};

productRouter.get('/getProductDetails', function (req, res) {
  // console.log('POST /getProductDetails endpoint reached!');
  axios.get(`${basePath}/products/${req.query['product_id']}/`, params)
    .then(function (productData) {
      //console.log('productData!!: ', productData.data);
      // console.log(typeof productData.data.id);
      res.send(productData.data);
      res.end();
    })
    .catch(function (err) {
      console.log('error in /getProductDetails: ', err);
      res.send(err);
      res.end();
    })
});

productRouter.get('/getStyles', function (req, res) {
  //console.log('/getStyles reached: ', req.query['product_id']);
  axios.get(`${basePath}/products/${req.query['product_id']}/styles`, params)
    .then(function (styles) {
      //console.log('styles!!: ', styles.data);
      res.send(styles.data.results);
      res.end();
    })
    .catch(function (err) {
      console.log('err in /getStyles productRoutes: ', err);
      res.end();
    })
})

//productRouter.post('/endpoint', function(req, res) {});

productRouter.get('/findRelatedItems', (req, res) => {
  let productID = req.query.id;
  axios.get(basePath + `/products/${productID}/related`, params)
    .then(result => {
      // console.log('incoming data', result.data);
      res.send(result.data);
    })
    .catch(err => {
      console.log(err)
      res.end(err);
    })
})

// ***This 'relatedProductsAndStyles' route handles 2 different API requests***
// Both take an array of product IDs and a 'styles' string
// For just the related products use: { params: {productIDArray, styles: '' }}
// For the styles, (which contain images) use: { params: {productIDArray, styles: '/styles' }}

productRouter.get('/relatedProductsAndStyles', (req, res) => {
  let styles = req.query.styles;
  let productIDs = req.query.productIDArray;
  //console.log('req styles present?', req.query);
  let relatedProductData = [];
  productIDs.forEach(item => {
    relatedProductData.push(
      axios.get(basePath + `/products/${item + styles}`, params)
        .then(result => {
          return result.data
        })
        .catch(err => {
          console.log(err)
          res.end(err);
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
    .catch(err => {
      console.log(err)
      res.end(err);
    })
})

module.exports = productRouter;