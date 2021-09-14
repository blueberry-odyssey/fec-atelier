const express = require('express');
const app = express();
const port = 3000;
const config = require('../config.js');
const bodyParser = require('body-parser');
const axios = require('axios');
const basePath = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';

//FOR AXIOS REQUEST OPTIONS
// let options = {
//   url: basePath,
//   method: 'GET',
//   headers: {
//     'Authorization': config.TOKEN
//   }
// };

let params = {
  headers: { Authorization: config.TOKEN },
};

app.use(express.json())

app.use(express.static('client/dist'));

app.get('/findRelatedItems', (req, res) => {
  console.log("req received", req.query.id);
  let productId = req.query.id;
  axios.get(basePath + `/products/${productId}/related`, params)
    .then(result => {
      // console.log('incoming data', result.data);
      res.send(result.data);
    })
    .catch(err => { throw err; })
})

app.get('/relatedProducts', (req, res) => {
  let styles = '/styles'
  if (!req.query.styles) { styles = '' }
  let productIDs = req.query.data;
  let relatedProductData = [];

  productIDs.forEach(item => {
    relatedProductData.push(
      axios.get(basePath + `/products/${item + styles}`, params)
        .then(result => {
          return result.data
        })
    )
  })
  // console.log('nothing', relatedProductData);
  axios.all(
    relatedProductData
  )
    .then(axios.spread((...results) => {
      // console.log('incoming data', results);
      res.send(results);
    }))
    .catch(err => { throw err; })
})

app.listen(port, () => {
  console.log(`FEC app listening at http://localhost:${port}`)
})