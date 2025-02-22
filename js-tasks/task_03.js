/*  https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript   */
/*--------Find Maximum and Minimum Values of a List---------*/

/*--------Yurii Komaniak----------*/

var min = function (list) {
  minNumber = list[0];
  for (i = 1; i < list.length; i++) {
    if (minNumber > list[i]) {
      minNumber = list[i];
    }
  }
  return minNumber;
};

var max = function (list) {
  maxNumber = list[0];
  for (i = 1; i < list.length; i++) {
    if (maxNumber < list[i]) {
      maxNumber = list[i];
    }
  }
  return maxNumber;
};


/*------- Oleksandr Krasylnykov ------*/
var min = function(list){
    return Math.min(...list);
}

var max = function(list){
    return Math.max(...list);
}

/*------- Nikita Zemlianskyi ------*/
const min = arr => Math.min(...arr);
const max = arr => Math.max(...arr);

/*------- Viacheslav Simkiv ------*/
const min = (list) => (list.length ? Math.min(...list) : null);
const max = (list) => (list.length ? Math.max(...list) : null);
