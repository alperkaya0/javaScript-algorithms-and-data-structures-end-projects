// FROM WIKIPEDIA : Subtractive notation is also used for 40 (XL), 90 (XC), 400 (CD) and 900 (CM).[7] These are the only subtractive forms in standard use.
// After learning this, it's very easy to code, just prioritize XL over X, XC over L, CD over C, CM over D.
// So that you won't be spamming CCCC just to write 400 (CD).
function convertToRoman(num) {
  let res = "";
  while (num > 0) {
    if (num >= 1000) {
      res += "M";
      num -= 1000;
    }else if (num >= 900) {
      res += "CM";
      num -= 900;
    }else if (num >= 500) {
      res += "D";
      num -= 500;
    }else if (num >= 400) {
      res += "CD";
      num -= 400;
    }else if (num >= 100) {
      res += "C";
      num -= 100;
    }else if (num >= 90) {
      res += "XC";
      num -= 90;
    }else if (num >= 50) {
      res += "L";
      num -= 50;
    }else if (num >= 40) {
      res += "XL";
      num -= 40;
    }else if (num >= 10) {
      res += "X";
      num -= 10;
    }else if (num >= 9) {
      res += "IX";
      num -= 9;
    }else if (num >= 5) {
      res += "V";
      num -= 5;
    }else if (num >= 4) {
      res += "IV";
      num -= 4;
    }else if (num >= 1) {
      res += "I";
      num -= 1;
    }
  }
 return res;//return the result
}

console.log(convertToRoman(29));//Example
