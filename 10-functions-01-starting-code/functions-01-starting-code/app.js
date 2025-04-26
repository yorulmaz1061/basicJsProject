const startGameBtn = document.getElementById('start-game-btn');
//direct execution
function startGame() {
    console.log('Game started!');
}
// you can store a function in an object
const person = {
   name: 'John',
    greet: function greet() {
        console.log('Hello There! ' + person.name);
    }
};
person.greet();

//indirect execution
startGameBtn.addEventListener('click', startGame);


