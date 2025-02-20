/*       https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript      */

/*--------------------You Can't Code Under Pressure #1--------------------------*/

/*------------------Yurii Komaniak----------------------*/
function doubleInteger(i) {
  return i * 2;
}

/*       https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript      */

/*--------------------Twice as old--------------------------*/

/*------------------Yurii Komaniak----------------------*/
function twiceAsOld(dadYearsOld, sonYearsOld) {
  let dad = dadYearsOld - sonYearsOld;
  let son = 1;
  for (dad = dad + 1; dad < 100; dad++) {
    if (dad / son === 2) {
      return Math.abs(dadYearsOld - dad);
    } else {
      son++;
    }
  }
}

/*       https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript      */

/*--------------------Get Nth Even Number--------------------------*/

/*------------------Yurii Komaniak----------------------*/
function nthEven(n) {
  return n * 2 - 2;
}

/*       https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript      */

/*--------------------What's the real floor?--------------------------*/

/*------------------Yurii Komaniak----------------------*/
function getRealFloor(n) {
  if (0 <= n && n <= 1) {
    n = 0;
  } else {
    if (2 <= n && n <= 12) {
      n = n - 1;
    } else {
      if (n >= 13) {
        n = n - 2;
      }
    }
  }
  return n;
}

/*       https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript      */

/*--------------------Beginner Series #2 Clock--------------------------*/

/*------------------Yurii Komaniak----------------------*/
function past(h, m, s) {
  return (h * 60 * 60 + m * 60 + s) * 1000;
}

/*       https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript      */

/*--------------------Is n divisible by x and y?--------------------------*/

/*------------------Yurii Komaniak----------------------*/

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}
