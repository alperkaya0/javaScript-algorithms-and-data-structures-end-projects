function telephoneCheck(str) {
  //All of these are the specified regexes by the question
  let regex = /^\d{3}-\d{3}-\d{4}$/;
  let regex2 = /^\(\d{3}\)\d{3}-\d{4}$/;
  let regex3 = /^\(\d{3}\) \d{3}-\d{4}$/;
  let regex4 = /^\d{3} \d{3} \d{4}$/;
  let regex5 = /^\d{10}$/;
  let regex6 = /^1 \d{3} \d{3} \d{4}/;
  let regex7 = /^1 \d{3}-\d{3}-\d{4}/;
  let regex8 = /^1 \(\d{3}\) \d{3}-\d{4}/;
  let regex9 = /^1\(\d{3}\)\d{3}-\d{4}/;
  //Test all of them and return true if any of them passes.
  return regex.test(str) || regex2.test(str) || regex3.test(str) || regex4.test(str) || regex5.test(str) || regex6.test(str) || regex7.test(str) || regex8.test(str) || regex9.test(str);
}

console.log(telephoneCheck("1 (555) 555-5555"));//Example
