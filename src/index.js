
exports.min = function min(arr) {
  if (!arr || arr.length === 0) return 0
  return Math.min.apply(null, arr);
}

exports.max = function max(arr) {
  if (!arr || arr.length === 0) return 0

  return Math.max.apply(null, arr);
}

exports.avg = function avg(arr) {
  if (!arr || arr.length === 0) return 0
  let sum = 0
  for (let elem of arr) {
    sum += elem
  }
  return sum / arr.length
}
