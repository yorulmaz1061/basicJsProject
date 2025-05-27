function sayHello(name) {
    console.log('Hi ' + name);
}

//sayHello();
const sayMyHello = firstName => console.log('Hi ' + firstName);
const sayMyHello2 = (firstName, phrase) => console.log(phrase + ' ' + firstName);
const sayMyHello3 = () => console.log('Hi hardcoded');
const sayMyHello4 = firstName => 'Hi ' + firstName;

sayMyHello('Ozan');
sayMyHello2('Ozan2', 'Hello');
sayMyHello3();
console.log(sayMyHello4('Ozan4'));

const sayMyHello5 = (firstName, phrase = 'Hi') => console.log(phrase + ' ' + firstName);
sayMyHello5('Ozan5');
sayMyHello5('Selami', "What's up");

function checkInput(cb, ...strings) {
    let hasEmptyString = false;
    for (const text of strings) {
        if (!text) {
            hasEmptyString = true;
            break;
        }
    }
    if (!hasEmptyString) {
        cb();
    }
}

checkInput(() => console.log('All inputs are valid'), 'Hello', 'World');

function checkInput2(cb2, ...numbers) {
    let hasAllNumber = true;
    for (const cbElement of numbers) {
        if (isNaN(cbElement)) {
            hasAllNumber = false;
            break;
        }
    }
    if (hasAllNumber) {
        cb2();
    }
}

checkInput2(() => console.log('All are numbers'), 1, 2, 3, 4, 5);