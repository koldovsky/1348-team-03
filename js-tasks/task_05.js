/*------Keep Hydrated------*/

//Yurii Komaniak
function litres(time) {
  return (Math.trunc(time / 2))
}

//Oleksandr Krasylnykov
function litres(time) {
  return (time - time % 2) / 2;
}

//Nikita Zemlianskyi
function litres(time) {
  return Number(time) * 0.5 - ((Number(time) * 0.5) % 1);
}