/*   https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript     */
/* -----  Smallest value of an array ------*/

/*--------Yurii Komaniak---------*/

function min(arr, toReturn) {
  let minNumber = arr[0];
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (minNumber > arr[i]) {
      minNumber = arr[i];
      index = i;
    }
  }
  return toReturn === "value" ? minNumber : index;
}


/*------- Oleksandr Krasylnykov ------*/

}
