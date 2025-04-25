const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
if (randomNumber >= 0.7) {
    alert('number is greater or equal than 0.7 ' + randomNumber);
}
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
for (const number of arr) {
    console.log(number);
}
let counter = 0;
while (counter < arr.length) {
    console.log(arr[counter]);
    counter++;
}

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

const randomNumber2 = Math.random();
if ((randomNumber > 0.7 && randomNumber2 > 0.7) || randomNumber < 0.2 || randomNumber2 < 0.2) {
    alert('conditions are met for task-4');
}