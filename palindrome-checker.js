function palindrome(str) {
  str = str.replace(/[\W_]/g,"").toLowerCase();
  if (str.length % 2 !== 0) {
    str = str.split("");
    str.splice(str.length/2,1);
    str = str.join("");
  }
  if (str.length % 2 === 0) {
    let temp = str.slice(str.length/2);
    let sec = [];

    for (let i = 0; i < temp.length; ++i) {
      sec.unshift(temp[i]);
    }
    str = str.split("");
    str.splice(str.length/2,str.length/2);
    let res = true;
    for (let i = 0; i < str.length; ++i) {
      if (str[i] !== sec[i]) {
        res = false;
        break;
      }
    }
    return res
  }
}

console.log(palindrome("A man, a plan, a canal. Panama"));