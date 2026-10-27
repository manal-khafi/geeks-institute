//exercice1
function isBlank(str) {
    return str.trim() === "";
}

console.log(isBlank('')); // true
console.log(isBlank('abc')); // false

//exercice2
function abbrevName(str) {
    let nameParts = str.trim().split(" ");
    if (nameParts.length > 1) {
        return nameParts[0] + " " + nameParts[1].charAt(0) + ".";
    }
    return nameParts[0];
}

console.log(abbrevName("Robin Singh")); // "Robin S."

//exercice3
function swapCase(str) {
    let swapped = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toUpperCase()) {
            swapped += char.toLowerCase();
        } else {
            swapped += char.toUpperCase();
        }
    }
    return swapped;
}

console.log(swapCase('The Quick Brown Fox')); // 'tHE qUICK bROWN fOX'

//exercice4
function isOmnipresent(arr, val) {
    return arr.every(subArray => subArray.includes(val));
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); // true
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); // false
