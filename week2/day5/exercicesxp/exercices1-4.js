// exercice1
const people = ["Greg", "Mary", "Devon", "James"];

// Part I
people.shift();
people[people.indexOf("James")] = "Jason";
people.push("Yourname");
console.log(people.indexOf("Mary"));

const copy = people.slice(1, 3);
console.log(people.indexOf("Foo"));

const last = people[people.length - 1];

// Part II
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
        break;
    }
}

// exercice2
const colors = ["blue", "red", "green", "yellow", "purple"];
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
    let suffix = (i < 3) ? suffixes[i] : "th";
    console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
}

// exercice3
let num;
do {
    num = Number(prompt("Enter a number:"));
} while (num < 10);

// exercice4
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
};

console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);
console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0]);

let sarahRent = building.numberOfRoomsAndRent.sarah[1];
let davidRent = building.numberOfRoomsAndRent.david[1];
let danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}

