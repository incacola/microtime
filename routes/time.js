const express = require('express');
const router = express.Router();
const timeConverter = require('../modules/time-converter')

/* GET users listing.*/
router.get('/:time', function (req, res, next) {
  timeConverter.init(req.params.time, () => {
    console.log('Time hast been checked!');
  });
  //res.send(req.params.time);
  res.send(timeConverter.init(req.params.time, () => {
    console.log("Times have been generated!\n");
  }));
});

module.exports = router;