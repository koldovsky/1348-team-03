//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
/*------Geometry Basics: Circle Circumference in 2D------*/



function circleCircumference(circle) {
    return 2*Math.PI*circle.radius.toFixed(6);
    }

    
 //https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
/*------Training JS #12: loop statement --for..in and for..of------*/



function giveMeFive(obj){
    let res=[];
    for (let key in obj) {
      if (key.length===5)res.push(key);
      if (obj[key].length===5)res.push(obj[key]);
    }
    return res;
   }   