const express = require('express');
const app = express();
const port = 3000;
const config = require('../config.js');
const bodyParser = require('body-parser');
const axios = require('axios');
const basePath = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';

let params = {
  headers: { Authorization: config.TOKEN },
};

module.exports = {

  findRelated() {
    return app.get('/findRelatedItems', (req, res) => {
      console.log("req received", req.query.id);
      let productId = req.query.id;
      axios.get(basePath + `/products/${productId}/related`, params)
        .then(result => {
          // console.log('incoming data', result.data);
          res.send(result.data);
        })
        .catch(err => { throw err; })
    })
  },

  apple: 'cow'

};
