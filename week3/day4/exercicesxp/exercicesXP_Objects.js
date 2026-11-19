//exercice 1
// Output: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

//exercice 2
function displayStudentInfo({first, last}){
    return `Your full name is ${first} ${last}`;
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

//exercice 3
const users = { user1: 18273, user2: 92833, user3: 90315 };

const usersArray = Object.entries(users);
console.log(usersArray);

const modifiedUsersArray = Object.entries(users).map(([key, value]) => [key, value * 2]);
console.log(modifiedUsersArray);

//exercice 4
// Output: object

//exercice 5
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

//exercice 6
// 1. Evaluation:
// [2] === [2] -> false (different references in memory)
// {} === {} -> false (different references in memory)

// 2. Value of the property number:
// console.log(object2.number) -> 4
// console.log(object3.number) -> 4
// console.log(object4.number) -> 5
// Why: object1, object2, and object4 reference the same object in memory, so mutating object1 affects object2 and object3, whereas object4 is a completely separate object.

// 3. Classes implementation:
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }

  sound(animalSound) {
    return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooo"));