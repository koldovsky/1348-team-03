/*------Make negative------*/

//Yurii Komaniak
function makeNegative(num) {
    if (num > 0) {
        return -num;
    }
    else {
        return num;
    }
}

//Oleksandr Krasylnykov
function makeNegative(num) {
    let res = (num < 0) ? num : -num;
    return res;
}

//Nikita Zemlianskyi
function makeNegative(num) {
    if (Number(num) >= 0) return 0 - Number(num);
    else return Number(num);
}