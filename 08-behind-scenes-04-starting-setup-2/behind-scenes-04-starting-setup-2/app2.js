function getName(){
    return prompt('What is your name?');
}
function greet(){
    const userName = getName()
        console.log('Hello ' + userName);
}
greet();