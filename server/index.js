const express = require('express');
const app = express();
const port = 3000;
const config = require('../config.js');
const bodyParser = require('body-parser');
const axios = require('axios');
const compression = require('compression');
const basePath = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';
const productRouter = require('./productRoutes.js');
const reviewsRouter = require('./reviewsRoutes.js');

let params = {
  headers: { Authorization: config.TOKEN },
};

app.use(compression({level: 6}))
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
// app.use(express.static('client/dist'));

app.use('/products', productRouter);
app.use('/reviews', reviewsRouter);

app.use('/:id/', express.static('client/dist'));
//tell express the second slash is optional

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