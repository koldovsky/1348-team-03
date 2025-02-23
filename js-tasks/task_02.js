//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
/*------Training JS #12: loop statement --for..in and for..of------*/

/*-------- Yurii Komaniak---------*/

function giveMeFive(obj){
 let res=[];
 for (let key in obj) {
   if (key.length===5)res.push(key);
   if (obj[key].length===5)res.push(obj[key]);
 }
 return res;
}

/*------- Nikita Zemlianskyi ------*/
function giveMeFive(obj) {
  const values = [];
  for (let key in obj) {
      key.length === 5 ? values.push(key) : null;
      obj[key].length === 5 ? values.push(obj[key]) : null;
  }
  return values;
}