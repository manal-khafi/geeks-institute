//exercice1
const randomNum = Math.floor(Math.random() * 100) + 1;
console.log(`Random number: ${randomNum}`);

for (let i = 0; i <= randomNum; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//exercice2
function capitalize(str) {
    let evenCap = "";
    let oddCap = "";
    
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            evenCap += str[i].toUpperCase();
            oddCap += str[i].toLowerCase();
        } else {
            evenCap += str[i].toLowerCase();
            oddCap += str[i].toUpperCase();
        }
    }
    
    return [evenCap, oddCap];
}

console.log(capitalize("abcdef")); // ['AbCdEf', 'aBcDeF']

//exercice3
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

//exercice4
function biggestNumberInArray(arrayNumber) {
    const numbers = arrayNumber.filter(item => typeof item === 'number');
    if (numbers.length === 0) {
        return 0;
    }
    return Math.max(...numbers);
}

const array = [-1, 0, 3, 100, 99, 2, 99];
const array2 = ['a', 3, 4, 2];
const array3 = [];

console.log(biggestNumberInArray(array)); // 100
console.log(biggestNumberInArray(array2)); // 4
console.log(biggestNumberInArray(array3)); // 0

//exercice5
function getUniqueElements(arr) {
    return [...new Set(arr)];
}

const list = [1, 2, 3, 3, 3, 3, 4, 5];
const newList = getUniqueElements(list);
console.log(newList); // [1, 2, 3, 4, 5]

//exercice6
function createCalendar(year, month) {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    
    let daysOfWeek = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
    daysOfWeek.forEach(day => {
        let th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    let getDayCode = (date) => {
        let day = date.getDay();
        return (day === 0) ? 6 : day - 1;
    };

    let currentDay = new Date(year, month - 1, 1);
    let firstDayIndex = getDayCode(currentDay);

    let row = document.createElement('tr');
    
    for (let i = 0; i < firstDayIndex; i++) {
        let td = document.createElement('td');
        td.textContent = '';
        row.appendChild(td);
    }

    while (currentDay.getMonth() === month - 1) {
        let td = document.createElement('td');
        td.textContent = currentDay.getDate();
        row.appendChild(td);

        if (getDayCode(currentDay) === 6) {
            table.appendChild(row);
            row = document.createElement('tr');
        }
        currentDay.setDate(currentDay.getDate() + 1);
    }

    if (row.children.length > 0 && row.children.length < 7) {
        while (row.children.length < 7) {
            let td = document.createElement('td');
            td.textContent = '';
            row.appendChild(td);
        }
        table.appendChild(row);
    }

    document.body.appendChild(table);
}