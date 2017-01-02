function sequare(num) {
    console.log(num, num * num);
}

var nums = [1, 2, 3, 45, 6];
nums.forEach(sequare);

function isEven(num) {
    return num % 2 == 0;
}
nums = [2, 4, 6, 8, 10];
var even = nums.every(isEven);
if (even) {
    console.log("All numbers are even")
} else {
    console.log("Not all numbers are even")
}

function add(runningTotal, currentValue) {
    return runningTotal + currentValue;
}
var sum = nums.reduce(add);
console.log(sum);