function positiveSum(arr) {
  //go thru the array
  //take out any positive number
  //get the sum of numbers
  for(let i = 0; i < arr.length; i++){
    let positives = arr.filter(arr[i > 0])
    positives += arr[i]
  }
}
