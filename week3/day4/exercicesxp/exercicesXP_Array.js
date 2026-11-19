const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

//exercice 1
colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

colors.includes("Violet") ? console.log("Yeah") : console.log("No...");

//exercice 2
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, index) => {
    const i = index + 1;
    const suffix = (i === 1) ? ordinal[1] : (i === 2) ? ordinal[2] : (i === 3) ? ordinal[3] : ordinal[0];
    console.log(`${i}${suffix} choice is ${color}.`);
});

//exercice 3
// 1
// Output: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// 2
// Output: ['U', 'S', 'A']

// Bonus
// Output: [undefined, undefined]

//exercice 4
const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
const fullStackResidentLastNames = users
    .filter(user => user.role === 'Full Stack Resident')
    .map(user => user.lastName);

//exercice 5
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const combined = epic.reduce((acc, curr) => `${acc} ${curr}`);

//exercice 6
const students = [
    {name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}
];

const passedStudents = students.filter(student => student.isPassed);

students
    .filter(student => student.isPassed)
    .forEach(student => {
        console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
    });