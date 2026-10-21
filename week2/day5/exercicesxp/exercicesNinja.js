// exercice1
const person1 = {
    FullName: "John Doe",
    Mass: 75,
    Height: 1.78,
    calcBMI: function() {
        return this.Mass / (this.Height * this.Height);
    }
};

const person2 = {
    FullName: "Jane Smith",
    Mass: 62,
    Height: 1.65,
    calcBMI: function() {
        return this.Mass / (this.Height * this.Height);
    }
};

function compareBMI(p1, p2) {
    let bmi1 = p1.calcBMI();
    let bmi2 = p2.calcBMI();

    if (bmi1 > bmi2) {
        console.log(`${p1.FullName} has the largest BMI.`);
    } else if (bmi2 > bmi1) {
        console.log(`${p2.FullName} has the largest BMI.`);
    } else {
        console.log("Both have the same BMI.");
    }
}

compareBMI(person1, person2);

// exercice2
function checkPassOrFail(average) {
    if (average > 65) {
        console.log("You passed!");
    } else {
        console.log("You failed and must repeat the course.");
    }
}

function findAvg(gradesList) {
    let sum = 0;
    for (let i = 0; i < gradesList.length; i++) {
        sum += gradesList[i];
    }
    let average = sum / gradesList.length;
    console.log(`The average is: ${average}`);
    
    checkPassOrFail(average);
}
// Example usage:
findAvg([80, 90, 45, 60, 70]);