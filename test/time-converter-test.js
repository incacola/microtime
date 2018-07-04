const assert = require('assertthat')
const time = require('../modules/time-converter')

test('The checkTime function will return a ISO Format.', () => {
  var times = time.check('1988-01-14');
  assert.that(times).is.equalTo('ISO')
});

test('The check function will return MILLI.', () => {
  var times = time.check('1450137600');
  assert.that(times).is.equalTo('MILLI')
});

test('The fillTimes function will return error.', () => {
  var filler = time.fillTimes('');
  assert.that(filler).is.equalTo({
    "error": "Invalid Date"
  })
});

test('The fillTimes function will return Times from ISO.', () => {
  var filler = time.fillTimes('ISO', '1988-01-14');
  assert.that(filler).is.equalTo({
    "unix": 569116800000,
    "utc": "Thu, 14 Jan 1988 00:00:00 GMT"
  })
});