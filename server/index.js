const express = require('express');
const app = express();
const port = 3000;
const config = require('../config.js');
const bodyParser = require('body-parser');
const axios = require('axios');
const basePath = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';
const productRouter = require('./productRoutes.js');
const reviewsRouter = require('./reviewsRoutes.js');

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('client/dist'));

app.use('/products', productRouter);
app.use('/reviews', reviewsRouter);

app.post('/interactions', function (req, res) {
  console.log(req.body);
  axios.post(basePath + '/interactions', req.body, params)
    .then((results) => {
      console.log('axios Interaction success: ', results.status);
      res.status(201).send(results.data);
    })
    .catch((err) => {
      console.log('axios Interaction fail', err);
      res.status(422).send(err);
    });
})


app.listen(port, () => {
  console.log(`FEC app listening at http://localhost:${port}`)
});