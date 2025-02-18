/*------Opposites Attract------*/

//Yurii Komaniak
function lovefunc(flower1, flower2) {
    // moment of truth
    return (flower1 + flower2) % 2 === 1;
}

//Oleksandr Krasylnykov
function lovefunc(flower1, flower2) {
    return (flower1 % 2 === 0 && flower2 % 2 === 1) || (flower1 % 2 === 1 && flower2 % 2 === 0)
}

//Nikita Zemlianskyi
function lovefunc(flower1, flower2) {
    return (Number(flower1) + Number(flower2)) % 2 === 1;
}