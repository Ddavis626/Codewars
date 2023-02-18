function isPangram(string){
  let letters = [];
  for(let i = 0; i < string.length ; i++){
    if(!letters.includes(string[i]) && string[i] !== " " && letters.length < 26){
      letters.push(string[i])
    }
  }
  if(letters.length === 26){
    return true
  }else {
    return false
  }
}
