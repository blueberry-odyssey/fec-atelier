const express = require('express');
const app = express();
const port = 3000;
// const config = require('../config.js');


//FOR AXIOS REQUEST OPTIONS
// let options = {
//   url: ,
//   method: ,
//   headers: {
//     'User-Agent': 'request',
//     'Authorization': `token ${config.TOKEN}`
//   }
// };


app.use(express.static('client/dist'));

app.listen(port, () => {
  console.log(`FEC app listening at http://localhost:${port}`)
})