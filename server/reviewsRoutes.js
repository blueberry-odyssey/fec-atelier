const reviewsRouter = require('express').Router();
const axios = require('axios');
const $ = require('jquery');
const config = require('../config.js');
const basePath = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';
const AWS = require('aws-sdk');
const fileType = require('file-type');
const fs = require('fs');
const multer  = require('multer');
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);
const upload = multer({ dest: 'uploads/' });

const region = config.AWS_REGION;
const id = config.AWS_ID;
const key = config.AWS_KEY;

// connect to AWS-S3 bucket
const s3 = new AWS.S3({
  region: region,
  accessKeyId: id,
  secretAccessKey: key
});

// to upload image to s3 bucket
function uploadImage(file) {
  let fileStream = fs.createReadStream(file.path)
  let params = {
    Body: fileStream,
    Bucket: config.AWS_BUCKET,
    Key: file.filename,
  };
  return s3.upload(params).promise()
}

// to get file path of image from s3 bucket
function getFileStream(fileKey) {
  let params = {
    Key: fileKey,
    Bucket: config.AWS_BUCKET
  }
  return s3.getObject(params).createReadStream();
}

// SERVER get request for file path from s3 bucket
reviewsRouter.get('/images/:key', (req, res) => {
  let key = req.params.key;
  let readStream = getFileStream(key);

  readStream.pipe(res);
});

// SERVER post request to upload image to s3 bucket
reviewsRouter.post('/images', upload.single('image'), async (req, res) => {
  let file = req.file;
  // upload image to s3 bucket
  let result = await uploadImage(file);
  // remove image from server/local host
  await unlinkFile(file.path);
  res.send({
    imagePath: `/images/${result.Key}`
  });
  console.log('success upload');
});



reviewsRouter.get('/getAllReviews', (req, res) => {
  let productId = parseInt(req.query.product_id);
  let options = {
    headers: { Authorization: config.TOKEN },
    params: {
      product_id: productId,
      count: req.query.count,
      sort: req.query.sort,
      page: req.query.page
    }
  };
  axios.get(basePath + '/reviews/', options)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      console.log('axios GET reviews failed');
      res.status(400).send(err);
    });
});


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
        characteristics: results.data.characteristics,
        totalRatings: results.data.ratings
      };
      //parse ratings average here
      let average;
      let totalVotes = 0;
      let totalScore = 0;
      if (Object.keys(results.data.ratings).length > 0) {
        let votes = Object.values(results.data.ratings);
        votes.forEach(vote => {
          totalVotes += parseInt(vote);
        });
        for (var key in results.data.ratings) {
          totalScore += parseInt(key) * parseInt(results.data.ratings[key]);
        }
        average = totalScore / totalVotes;
        average = average.toFixed(1);
        parsedData["average"] = Number(average);
      } else if (Object.keys(results.data.ratings).length === 0) {
        parsedData["average"] = 0;
      }
      //parse recommended percentage here
      if (Object.keys(results.data.recommended).length > 0) {
        let trueRec = Number(results.data.recommended.true);
        let falseRec = Number(results.data.recommended.false);
        let total =  falseRec + trueRec;
        let recommended;
        if (falseRec === 0) {
          recommended = trueRec.toFixed(2);
          parsedData["recommended"] = Number(trueRec)
        } else if (trueRec === 0) {
          parsedData["recommended"] = 0;
        } else {
          let recommended = (trueRec / total) * 100;
          recommended = recommended.toFixed(2);
          parsedData["recommended"] = Number(recommended);
        }
      } else if (Object.keys(results.data.recommended).length === 0) {
        parsedData["recommended"] = 0;
      }
      res.send(parsedData);
    })
    .catch((err) => {
      console.log('axios GET reviews/meta failed');
      res.status(400).send(err);
    });
});


reviewsRouter.post('/postReview', (req, res) => {
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
});


reviewsRouter.put('/report', (req, res) => {
  let reviewId = req.body.params.reviewId;
  let options = {
    headers: { Authorization: config.TOKEN },
  };
  axios.put(basePath + '/reviews/' + reviewId + '/report', {}, options)
    .then((result) => {
      res.status(204).end();
    })
    .catch((err) => {
      console.log('server axios error message:');
      res.status(400).send(err);
    });
})


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
});

module.exports = reviewsRouter;