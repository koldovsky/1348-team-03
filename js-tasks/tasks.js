/*------Messi Goals------*/

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

/*------Make negative------*/

function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

/*------Game Move------*/

function move(position, roll) {
  return position + roll * 2;
}

/*------Personalized Message------*/

function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

/*------Keep Hydrated------*/

function litres(time) {
  return (time - (time % 2)) / 2;
}

/*------Opposites Attract------*/

function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 === 1;
}
