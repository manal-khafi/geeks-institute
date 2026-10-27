//exercice1
function displayNumbersDivisible(divisor = 23) {
    let numbers = [];
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            numbers.push(i);
            sum += i;
        }
    }
    console.log(numbers.join(" "));
    console.log("Sum : " + sum);
}

displayNumbersDivisible();

//exercice2
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
};  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}; 

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let totalPrice = 0;
    for (let item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            totalPrice += prices[item];
            stock[item] -= 1;
        }
    }
    return totalPrice;
}

console.log(myBill());

//exercice3
function changeEnough(itemPrice, amountOfChange) {
    const values = [0.25, 0.10, 0.05, 0.01];
    let totalChange = 0;
    for (let i = 0; i < amountOfChange.length; i++) {
        totalChange += amountOfChange[i] * values[i];
    }
    return totalChange >= itemPrice;
}

//exercice4
function hotelCost() {
    let nights;
    while (true) {
        let input = prompt("How many nights would you like to stay in the hotel?");
        if (input !== null && input.trim() !== "" && !isNaN(input)) {
            nights = Number(input);
            break;
        }
    }
    return nights * 140;
}

function planeRideCost() {
    let destination;
    while (true) {
        let input = prompt("What is your destination?");
        if (input !== null && input.trim() !== "" && isNaN(input)) {
            destination = input.trim();
            break;
        }
    }
    if (destination.toLowerCase() === "london") {
        return 183;
    } else if (destination.toLowerCase() === "paris") {
        return 220;
    } else {
        return 300;
    }
}

function rentalCarCost() {
    let days;
    while (true) {
        let input = prompt("How many days would you like to rent the car?");
        if (input !== null && input.trim() !== "" && !isNaN(input)) {
            days = Number(input);
            break;
        }
    }
    let cost = days * 40;
    if (days > 10) {
        cost *= 0.95;
    }
    return cost;
}

function totalVacationCost() {
    const car = rentalCarCost();
    const hotel = hotelCost();
    const plane = planeRideCost();
    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}`);
    return car + hotel + plane;
}

totalVacationCost();