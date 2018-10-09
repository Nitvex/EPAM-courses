const prototypicalAnimal = function () {
};
prototypicalAnimal.eat = function () {
    console.log('I eat!');
};

const prDog = function () {
};
prDog.prototype=prototypicalAnimal;
prDog.prototype.bark = function () {
    console.log('I bark!');
};
const dog1 = new prDog();
const dog2 = new prDog();

// // Task: Create 2 dogs that would eat and bark

dog1.eat(); // I eat!
dog2.eat(); // I eat!
dog1.bark(); // I bark!
dog2.bark(); // I bark!