const reviewsRouter = require('express').Router();
const axios = require('axios');
const config = require('../config.js');
const basePath = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';


// grab reviews, sort reviews
reviewsRouter.get('/getAllReviews', (req, res) => {
  let productId = parseInt(req.query.product_id);

  let options = {
    headers: { Authorization: config.TOKEN },
    params: {
      product_id: productId,
      count: 50
    }
  };

  // retrieve reviews by product id
  axios.get(basePath + '/reviews/', options)
    .then((results) => {
      //console.log('axios getReviews response: ', results.data);
      res.send(results.data);
    })
    .catch((err) => {
      console.log('axios GET reviews failed');
      res.status(400).send(err);
    });
})


// get metadata/characteristics of product
reviewsRouter.get('/meta/getMeta', (req, res) => {
  let productId = parseInt(req.query.product_id);

  let options = {
    headers: { Authorization: config.TOKEN },
    params: {
      product_id: productId
    }
  };

  axios.get(basePath + '/reviews/meta/', options)
    .then((results) => {
      let parsedData = {
        characteristics: results.data.characteristics
      };

      //parse ratings average here
      let average;
      let totalVotes = 0;
      let totalScore = 0;
      let votes = Object.values(results.data.ratings);

      votes.forEach(vote => {
        totalVotes += parseInt(vote);
      });

      for (var key in results.data.ratings) {
        totalScore += parseInt(key) * parseInt(results.data.ratings[key]);
      }

      average = totalScore / totalVotes;
      parsedData["average"] = parseInt(average.toFixed(2));

      //parse recommended percentage here
      let falseRec = results.data.recommended.false;
      let trueRec = results.data.recommended.true;
      let recommended = trueRec / falseRec;
      parsedData["recommended"] = recommended;

      // console.log('reviews server parsed data:', parsedData);
      res.send(parsedData);
    })
    .catch((err) => {
      console.log('axios GET reviews/meta failed');
      res.status(400).send(err);
    });
})


// add a review
reviewsRouter.post('/postReview', (req, res) => {
  console.log('server req:', req.body.params);

  let options = {
    headers: {
      Authorization: config.TOKEN,
      'Content-Type': 'application/json'
    }
  };

  let params = req.body.params;

  axios.post(basePath + '/reviews', params, options)
    .then((results) => {
      console.log('axios POST success');
      res.status(201).send(results.data);
    })
    .catch((err) => {
      console.log('axios POST fail', err);
      res.status(400).send(err);
    });
})


// to report a review
reviewsRouter.put('/report', (req, res) => {

  //console.log('checking server req.body.params: ', req.body.params);
  let reviewId = req.body.params.reviewId;

  let options = {
    headers: { Authorization: config.TOKEN },
  };

  axios.put(basePath + '/reviews/' + reviewId + '/report', {}, options)
    .then((result) => {
      // console.log('axios report success');
      res.status(204).end();
    })
    .catch((err) => {
      console.log('server axios error message:');
      res.status(400).send(err);
    });
})


// to mark reviews as helpful
reviewsRouter.put('/helpful', (req, res) => {
  let reviewId = req.body.params.reviewId;

  let options = {
    headers: { Authorization: config.TOKEN }
  };

  axios.put(basePath + '/reviews/' + reviewId + '/helpful', {}, options)
    .then((result) => {
      console.log('axios PUT reviews/helpful success');
      res.status(204).end();
    })
    .catch((err) => {
      console.log('axios PUT reviews/helpful failed');
      res.status(400).send(err);
    });
})

module.exports = reviewsRouter;