const express = require('express');
const app = express();
const port = 3000;
const config = require('../config.js');
const bodyParser = require('body-parser');
const axios = require('axios');
const basePath = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';
const productRouter = require('./productRoutes.js');

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

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('client/dist'));
app.use('/products', productRouter);

// ============ RATINGS & REVIEWS ================ //

// grab reviews, sort reviews
app.get('/reviews', (req, res) => {

})

// get metadata/characteristics of product
app.get('/reviews/meta', (req, res) => {

})

// add a review
app.post('/reviews', (req, res) => {

})

// to mark reviews either as helpful or to report
app.put('/reviews', (req, res) => {

})


app.listen(port, () => {
  console.log(`FEC app listening at http://localhost:${port}`)
});