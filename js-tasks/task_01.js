//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
/*------Geometry Basics: Circle Circumference in 2D------*/

/*-------- Yurii Komaniak---------*/

function circleCircumference(circle) {
  return 2*Math.PI*circle.radius.toFixed(6);
  }

/*------- Nikita Zemlianskyi ------*/
const circleCircumference = circle => 2 * Math.PI * circle.radius;

/*------- Oleksandr Krasylnykov ------*/
function circleCircumference(circle) {
  return parseFloat((2 * Math.PI * circle.radius).toFixed(6));
}

/*-------- Taras Stets -------*/
function circleCircumference(circle) {
 return 2*(Math.PI * circle.radius)
}
