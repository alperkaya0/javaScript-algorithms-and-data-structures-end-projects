function rot13(str) {
  let res = ""; //this will be the result that we will return
  //this is an alphabet array which I think easier to use than default functions
  let alp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q","R", "S","T", "U", "V", "W", "X", "Y", "Z"];
  
  for (let i = 0; i < str.length; ++i) {
    if (/[\w]/.test(str[i])) {//check if the char consists of alphanumeric elements
      let idx = alp.indexOf(str[i])-13;//find the alphabet place of the char and return the element 13 before
      if (idx < 0) {//you may think this as we are making alp array a linked list that shapes a circle (the element after the last element is the first element)
        idx += alp.length;
      }
      res += alp[idx];//building our result char by char
    }else {
      res += str[i];//building our result char by char (But the difference here is IF the char is not alphanumeric we don't change it)
    }
  }
  return res;//returning our result
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));// Example
