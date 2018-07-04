const times = {
  "unix": '',
  "utc": ''
};


function init(timeString, callback) {
  const checkFormat = this.check(timeString)
  this.fillTimes(checkFormat, timeString);
  callback();
  return times
};

const check = function (time) {
  const isoRegex = /^(\d{4})(-(\d{2}))??(-(\d{2}))??(T(\d{2}):(\d{2})(:(\d{2}))??(\.(\d+))??(([\+\-]{1}\d{2}:\d{2})|Z)??)??$/gm;
  if (time.search(isoRegex) >= 0) {
    return 'ISO'
  } else if (time.search(/[0-9]{10}/g) >= 0) {
    return 'MILLI'
  } else {
    return false
  }
};

const fillTimes = function (check, time) {
  let date = new Date(time)

  switch (check) {
    case 'ISO':
      times.unix = Date.parse(date.toUTCString())
      times.utc = date.toUTCString()
      return times
      break
    case 'MILLI':
      times.unix = Date.parse(date.toUTCString())
      times.utc = date.toUTCString()
      return times
      break
    default:
      const noTime = {
        "error": "Invalid Date"
      };
      return noTime
  }
}


module.exports = {
  init: init,
  check: check,
  fillTimes: fillTimes
}