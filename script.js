function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var message = document.querySelector(".message");
console.log(message);
var input = document.querySelector(".input-number");
console.log(input);
var start = document.querySelector(".start");
console.log(start);
var check = document.querySelector(".check");
console.log(check);
start.onclick = function () {
    randomNumber = getRandomInt(100) + 1;
    start.disabled = true;
}

check.onclick = () => {
    if(parseInt(input.value) === randomNumber) {
        message.innerHTML = "That's a win"
        start.disabled = false;

    } else if (input.value < randomNumber) {
        message.innerHTML = "Bigger"
    } else if (input.value > randomNumber) {
        message.innerHTML = "Smaller"
    }
}