
exports.min = function min (array) {
  if (arguments.length && array.length) {
    return Math.min.apply(null, array);
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  if (arguments.length && array.length) {
    return Math.max.apply(null, array);
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (arguments.length && array.length) {
    let sum = array.reduce((a, b) => a + b, 0);
    return sum / array.length;
  } else {
    return 0;
  }
}
