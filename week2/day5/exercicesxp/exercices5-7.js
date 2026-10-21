// exercice5
const family = {
    father: "John",
    mother: "Jane",
    son: "Mark",
    daughter: "Lily"
};

for (let key in family) {
    console.log(key);
}

for (let key in family) {
    console.log(family[key]);
}

// exercice6
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
};

let result = "";
for (let key in details) {
    result += key + " " + details[key] + " ";
}
console.log(result.trim());

// exercice7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const secretName = names.map(name => name[0]).sort().join("");
console.log(secretName);