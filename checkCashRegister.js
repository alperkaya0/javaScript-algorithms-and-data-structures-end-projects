function checkCashRegister(price, cash, cid) {
  //penny 1 cent, nickel 5 cent, dime 10 cent, quarter 25 cent
  let change = [];
  let sumCid = 0;
  for (let i = 0; i < cid.length; ++i) {
    sumCid += cid[i][1];
  }
  if (cash - price === sumCid) {
    return {status: "CLOSED", change: cid};
  }
  if (price > cash || sumCid < price || sumCid < cash) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  let numChange = cash-price+0.00000000000006;
  let i = 0;
  while (numChange > 0 && i < 2000) {
    ++i;
    if (numChange >= 100 && cid[8][1] > 0) {
      change.push(["ONE HUNDRED", 100]);
      numChange -= 100;
      cid[8][1] -= 100;
    }else if (numChange >= 20 && cid[7][1] > 0) {
      change.push(["TWENTY", 20]);
      numChange -= 20;
      cid[7][1] -= 20;
    }else if (numChange >= 10 && cid[6][1] > 0) {
      change.push(["TEN", 10]);
      numChange -= 10;
      cid[6][1] -= 10;
    }else if (numChange >= 5 && cid[5][1] > 0) {
      change.push(["FIVE", 5]);
      numChange -= 5;
      cid[5][1] -= 5;
    }else if (numChange >= 1 && cid[4][1] > 0) {
      change.push(["ONE", 1]);
      numChange -= 1;
      cid[4][1] -= 1;
    }else if (numChange >= 0.25 && cid[3][1] > 0) {
      change.push(["QUARTER", 0.25]);
      numChange -= 0.25;
      cid[3][1] -= 0.25;
    }else if (numChange >= 0.10 && cid[2][1] > 0) {
      change.push(["DIME", 0.10]);
      numChange -= 0.10;
      cid[2][1] -= 0.10;
    }else if (numChange >= 0.05 && cid[1][1] > 0) {
      change.push(["NICKEL", 0.05]);
      numChange -= 0.05;
      cid[1][1] -= 0.05;
    }else if (numChange >= 0.01 && cid[0][1] > 0) {
      change.push(["PENNY", 0.01]);
      numChange -= 0.01;
      cid[0][1] -= 0.01;
    }
  }
  let newChange = [];
  console.log(numChange);
  for (let i = 0; i < cid.length; ++i) {
    let amount = 0;
    for (let y = 0; y < change.length; ++y) {
      if (change[y][0] === cid[i][0]) {
        amount += change[y][1];
      }
    }
    if (amount > 0) {
      newChange.unshift([cid[i][0],amount]);
    }
    
  }

  return {status: "OPEN",change: newChange};
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
