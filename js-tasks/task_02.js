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

/*------- Oleksandr Krasylnykov ------*/
function giveMeFive(obj){
  let arr = []; 
  for (let [key, value] of Object.entries(obj)){
    if (key.length === 5) arr.push(key);
    if (value.length === 5) arr.push(value);
  }
  return arr;
}



/*------- Taras Stets ------*/
function giveMeFive(obj){
  let arr = [];
  for(let key in obj) {
    if (key.length === 5) {
      arr.push(key);
    }
     if (obj[key].length === 5) {
      arr.push(obj[key]);
    }
  }
  
  return arr;
}
