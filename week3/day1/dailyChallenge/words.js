function displayInFrame() {
    let input = prompt("Enter several words separated by commas:");
    if (!input) return;

    let words = input.split(",").map(word => word.trim());
    
    let maxLength = 0;
    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }

    let borderLength = maxLength + 4;
    let border = "*".repeat(borderLength);

    console.log(border);
    for (let word of words) {
        let spaces = " ".repeat(maxLength - word.length);
        console.log(`* ${word}${spaces} *`);
    }
    console.log(border);
}

displayInFrame();