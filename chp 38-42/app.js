//-------1
function power(a, b) {
    return Math.pow(a, b);
}
console.log(power(2, 3)); 

//------2
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
console.log(isLeapYear(2020)); 
console.log(isLeapYear(2021)); 

//-------3

function calculateS(a, b, c) {
    return (a + b + c) / 2;
}
function calculateAreaOfTriangle(a, b, c) {
    const s = calculateS(a, b, c);
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
console.log(calculateAreaOfTriangle(3, 4, 5)); 

//-------4

function calculateAverage(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}

function calculatePercentage(marks, totalMarks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return (sum / (totalMarks * marks.length)) * 100;
}

function mainFunction(marks, totalMarks) {
    const average = calculateAverage(marks);
    const percentage = calculatePercentage(marks, totalMarks);

    console.log("Average: " + average);
    console.log("Percentage: " + percentage + "%");
}
mainFunction([85, 90, 95], 100); 

//---------5

function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}
console.log(customIndexOf("hello", "e")); 
console.log(customIndexOf("hello", "a")); 

//--------6

function deleteVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, '');
}
console.log(deleteVowels("This is a test sentence.")); 

//---------7

function countVowelPairs(text) {
    let count = 0;
    text = text.toLowerCase();
    for (let i = 0; i < text.length - 1; i++) {
        let pair = text[i] + text[i + 1];
        switch (pair) {
            case 'aa':
            case 'ae':
            case 'ai':
            case 'ao':
            case 'au':
            case 'ea':
            case 'ee':
            case 'ei':
            case 'eo':
            case 'eu':
            case 'ia':
            case 'ie':
            case 'ii':
            case 'io':
            case 'iu':
            case 'oa':
            case 'oe':
            case 'oi':
            case 'oo':
            case 'ou':
            case 'ua':
            case 'ue':
            case 'ui':
            case 'uo':
            case 'uu':
                count++;
                break;
        }
    }
    return count;
}
console.log(countVowelPairs("This is a beautiful day.")); 

//----------8

function convertToMeters(km) {
    return km * 1000;
}

function convertToFeet(km) {
    return km * 3280.84;
}

function convertToInches(km) {
    return km * 39370.1;
}

function convertToCentimeters(km) {
    return km * 100000;
}

let distanceInKm = 5; 
console.log("Distance in meters: " + convertToMeters(distanceInKm) + " m");
console.log("Distance in feet: " + convertToFeet(distanceInKm) + " ft");
console.log("Distance in inches: " + convertToInches(distanceInKm) + " in");
console.log("Distance in centimeters: " + convertToCentimeters(distanceInKm) + " cm");

//---------9

function calculateOvertimePay(hoursWorked) {
    const overtimeRate = 12.00;
    if (hoursWorked > 40) {
        let overtimeHours = hoursWorked - 40;
        return overtimeHours * overtimeRate;
    } else {
        return 0;
    }
}
let hoursWorked = 45; 
let overtimePay = calculateOvertimePay(hoursWorked);
console.log("Overtime pay: Rs. " + overtimePay);

//---------10

function calculateCurrencyNotes(amount) {
    let hundreds = Math.floor(amount / 100);
    amount = amount % 100;

    let fifties = Math.floor(amount / 50);
    amount = amount % 50;

    let tens = Math.floor(amount / 10);

    return {
        hundreds: hundreds,
        fifties: fifties,
        tens: tens
    };
}
let amountToWithdraw = 580; 
let notes = calculateCurrencyNotes(amountToWithdraw);
console.log("Hundreds: " + notes.hundreds);
console.log("Fifties: " + notes.fifties);
console.log("Tens: " + notes.tens);

