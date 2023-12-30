


const fullPhrase=()=>{
const wordOne = document.getElementById('word-1').value;
const wordTwo = document.getElementById("word-2").value;
const wordThree = document.getElementById('word-3').value;
const input = document.getElementById('input');

const phrase = [
    `You know ${wordTwo} is a ${wordThree} ${wordOne}bunny!`,
    `Loving ${wordOne} is the best thing that you can ${wordTwo} when on a ${wordThree} trip.`,
    `${wordOne} loves to ${wordTwo} all the ${wordThree}`,
    `${wordOne} brings all of the ${wordTwo} to the ${wordThree} game!`,
    `I saw ${wordOne} kissing ${wordTwo} underneath the ${wordThree} last night`,
    `Do you want a ${wordOne} from ${wordTwo}? I bet that would make you so ${wordThree}!`,
    `How much ${wordOne} could you ${wordTwo} in a ${wordThree} eating contest`,
    `Have you sever seen a ${wordOne} sit on a ${wordTwo} just for ${wordThree}?`,
    `'One ${wordOne} went fishing while a ${wordTwo} swam across the ${wordThree}.'`,
    `My favorite game is ${wordOne}. I love to ${wordTwo} all day while eating ${wordThree}.`,
    `${wordOne} loves to sing ${wordTwo} songs all day when drivnig in a ${wordThree}.`,
    `Momma ${wordOne} loves to hold ${wordTwo} goats all day when lounging in the ${wordThree}.`
];

const random = Math.floor(Math.random() * phrase.length);
result = (phrase[random]);
document.getElementById('input').innerHTML = result;
console.log(fullPhrase());
};





