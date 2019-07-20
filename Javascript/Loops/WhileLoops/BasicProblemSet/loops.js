console.log("Print all numbers between -10 and 19");

var firstDataSet = -10;
while (firstDataSet <= 19) {
    console.log(firstDataSet);
    firstDataSet++;
}


console.log("Print all even numbers between 10 and 40");

var secondDataSet = 10;
while (secondDataSet <= 40) {
    console.log(secondDataSet);
    secondDataSet += 2;
}


console.log("Print all odd numbers between 300 and 333");

var thirdDataSet = 300;
while (thirdDataSet <= 333) {
    console.log(thirdDataSet + 1);
    thirdDataSet += 2;
}


console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");

var fourthDataSet = 5;
while (fourthDataSet <= 50) {
    if ((fourthDataSet % 5 === 0) && (fourthDataSet % 3 === 0)) {
        console.log(fourthDataSet);
    }
    fourthDataSet++;
}