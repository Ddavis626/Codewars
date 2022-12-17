const sequenceSum = (begin, end, step) => {
  let sum = 0
  let i =begin
  while(i <= end){
    sum+=i;
    i+=step;
  }
  return sum
};

//I saw that a lof of people were using the for loop, which did take less space, I wanted to be a little different and 
//do a while loop
