function isPalindrome(x) {
 let newArr = x.split("")
 let reversedArr = newArr.reverse()
 let newStr = reversedArr.join("") 
 return x.toLowerCase() == newStr.toLowerCase() ? true : false
}
