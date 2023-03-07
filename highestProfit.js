function minMax(arr){
  let minMax = []
  minMax.push(Math.min.apply(Math, arr))
  minMax.push(Math.max.apply(Math, arr))
  return minMax
}
