//www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
/*------Convert a string to an array------*/

function stringToArray(string) {
  return string.split(" ");
}

//www.codewars.com/kata/dna-to-rna-conversion/train/javascript
/*------DNA to RNA Conversion------*/

function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}

/*  https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript   */
/*--------Find Maximum and Minimum Values of a List---------*/

var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

/*   https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript     */
/* -----  Smallest value of an array ------*/

function min(arr, toReturn) {
  const smallest = Math.min(...arr);
  return toReturn === "value" ? smallest : arr.indexOf(smallest);
}

/*       https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript      */

/*--------------------You Can't Code Under Pressure #1--------------------------*/

function doubleInteger(i) {
  return i * 2;
}

/*       https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript      */

/*--------------------Twice as old--------------------------*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

/*       https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript      */

/*--------------------Get Nth Even Number--------------------------*/

function nthEven(n) {
  return n * 2 - 2;
}

/*       https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript      */

/*--------------------What's the real floor?--------------------------*/

function getRealFloor(n) {
  return n >= 13 ? n - 2 : n > 0 ? n - 1 : n;
}

/*       https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript      */

/*--------------------Beginner Series #2 Clock--------------------------*/

function past(h, m, s) {
  return (h * 60 * 60 + m * 60 + s) * 1000;
}

/*       https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript      */

/*--------------------Is n divisible by x and y?--------------------------*/

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}
