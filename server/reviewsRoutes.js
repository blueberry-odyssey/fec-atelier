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
      product_id: productId
    }
  };

  // retrieve reviews by product id
  axios.get(basePath + '/reviews/', options)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      console.log(err);
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

      res.send(parsedData);
    })
    .catch((err) => {
      console.log(err);
    });
})


// add a review
reviewsRouter.post('/postReview', (req, res) => {
  console.log('server req:', req.body);

  let options = {
    headers: {
      Authorization: config.TOKEN,
      'Content-Type': 'application/json'
    }

  };

  let parsed = {
    product_id: parseInt(req.body.product_id),
    rating: parseInt(req.body.rating),
    summary: req.body.summary,
    body: req.body.body,
    recommend: JSON.parse(req.body.recommend),
    name: req.body.name,
    email: req.body.email,
    photos: req.body.photos,
    characteristics: req.body.characteristics
  };

  console.log('server parsed body:', parsed);

  axios.post('/reviews', parsed, options)
    .then((results) => {
      console.log('axios POST success');
    })
    .catch((err) => {
      console.log('axios POST fail', err);
    });

  res.end();
})


// to report a review
reviewsRouter.put('/report', (req, res) => {
  let reviewId = 800941;

  let options = {
    headers: { Authorization: config.TOKEN },
  };

  axios.put(basePath + '/reviews/' + reviewId + '/report', {}, options)
    .then((result) => {
      console.log('axios report success');
      res.status(204).end();
    })
    .catch((err) => {
      console.log('server axios error message:', err);
    });
})


// to mark reviews as helpful
reviewsRouter.put('/helpful', (req, res) => {
  let reviewId = 781037;

  let options = {
    headers: { Authorization: config.TOKEN }
  };

  axios.put(basePath + '/reviews/' + reviewId + '/helpful', {}, options)
    .then((result) => {
      console.log('axios helpful success');
      res.status(204).end();
    })
    .catch((err) => {
      console.log(err);
    });
})

module.exports = reviewsRouter;