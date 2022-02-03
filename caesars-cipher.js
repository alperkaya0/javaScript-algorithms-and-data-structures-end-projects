function rot13(str) {
  let res = "";
  let alp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q","R", "S","T", "U", "V", "W", "X", "Y", "Z"];

  for (let i = 0; i < str.length; ++i) {
    if (/[\w]/.test(str[i])) {
      let idx = alp.indexOf(str[i])-13;
      if (idx < 0) {
        idx += alp.length;
      }
      res += alp[idx];
    }else {
      res += str[i];
    }
  }
  return res;
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));