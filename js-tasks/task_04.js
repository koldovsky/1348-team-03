/*------Personalized Message------*/

//Yurii Komaniak
function greet(name, owner) {
    if (name === owner) {
        return 'Hello boss';
    }
    else {
        return 'Hello guest';
    }
}
//Oleksandr Krasylnykov
function greet(name, owner) {
    return (name === owner) ? 'Hello boss' : 'Hello guest';
}

//Nikita Zemlianskyi
function greet(name, owner) {
    if (name === owner) return "Hello boss";
    else return "Hello guest";
}