function palindrome(str) {
  str = str.replace(/[\W_]/g,"").toLowerCase();// Delete everything that's not alphanumeric and is "_" , and make str all lower case.
  if (str.length % 2 !== 0) {//If string length is not divisible by 2, delete the middle element since it has no affect on the result.
    str = str.split("");
    str.splice(str.length/2,1);
    str = str.join("");
  }
  if (str.length % 2 === 0) {//after our last process every string will be divisible by 2
    let temp = str.slice(str.length/2);//Extract elements middle to end
    let sec = [];

    for (let i = 0; i < temp.length; ++i) {//Reverse the temp, and save it to sec
      sec.unshift(temp[i]);
    }
    str = str.split("");//Turn str into an array so that it's going to be mutable(strings are immutable)
    str.splice(str.length/2,str.length/2);//Delete the elements starting from middle to end
    let res = true;//This will be our result, I have started it true because only 1 violation is enough to make it false, this way we can use for-if-break structure
    for (let i = 0; i < str.length; ++i) {//Compare str and sec, basically compare first part of the string with last part of the string
      if (str[i] !== sec[i]) {
        res = false;//if there is any violation make res false and break out of the for loop
        break;
      }
    }
    return res//return the result
  }
}

console.log(palindrome("A man, a plan, a canal. Panama"));//Example
