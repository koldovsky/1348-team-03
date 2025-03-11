/*   https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript     */
/* -----  Fun with ES6 Classes #2 - Animals and Inheritance ------*/

/*------- Taras Stets -----------*/
class Shark extends Animal {
  constructor(name, age, status) {
   super(name, age, 0, 'shark', status); 
  }
}

class Cat extends Animal {
 constructor(name, age, status) {
   super(name, age, 4, 'cat', status);
 }
  introduce() {
    return super.introduce() + "  Meow meow!";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master){
    super(name, age, 4, 'dog', status);
    this.master = master
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}


/*------- Oleksandr Krasylnykov ------*/
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status, legs, species) {
    super(name, age, 4, "cat", status);
  }
  
  introduce() {
    return super.introduce() + "  Meow meow!";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master, legs, species) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
