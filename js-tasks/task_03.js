/*  https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript  */
/*--------Understanding closures - the basics---------*/

/*--------Yurii Komaniak----------*/

function buildFun(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
      (function(i) {
          res.push(function() {
              return i; 
          });
      })(i);
  }
  return res;
}

