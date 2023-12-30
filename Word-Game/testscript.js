
let colorChange = document.getElementById('word-1').value;
colorChange.style.color = 'red';


function fullPhrase() {
    //Variables for html text box words
    let wordOne = document.getElementById('word-1').value; 

    const wordTwo = document.getElementById("word-2").value;
    const wordThree = document.getElementById('word-3').value;
    //where the phrase and input variables will be displayed, used later in the function
    const input = document.getElementById('input');

    //Phrases to be randomly selected  to output once submitted
    const phrase = [
        `You know ${wordTwo} is the ${wordThree} of a ${wordOne}! I always wanted to be a ${wordOne}'s ${wordThree}`,
        `Loving ${wordOne} is the best thing that you can ${wordTwo} when your falling in ${wordThree}.`,
        `${wordOne} loves to ${wordTwo} all day. The first time you ${wordTwo} you will feel all of the ${wordTwo} you could possibly dream of!`,
        `${wordOne} brings all of the ${wordTwo} to the baseball game! Every time I have a little ${wordTwo} it makes me ${wordThree}.`,
        `I saw ${wordOne} kissing ${wordTwo} Claus underneath the ${wordThree} last night`,
        `Do you want a ${wordOne} from ${wordTwo}? I bet that would make you such a ${wordThree}!`,
        `How much ${wordOne} could you eat in a ${wordThree} eating contest? I bet you are going to win the first prize ${wordTwo}!`,
        `Have you ever seen a ${wordOne} sit on a ${wordTwo} just for ${wordThree}?`,
        `${wordOne} went fishing while a ${wordTwo} swam across the lake. The whole time I was thinking ${wordThree}.`,
        `My favorite game is ${wordOne}. I love to ${wordTwo} after playing ${wordOne} because it makes me ${wordThree}.`,
        `${wordOne} loves to sing ${wordTwo} songs all day when driving to the mountains. We were in the car when dad starting ${wordThree}ing.`,
        `Momma ${wordOne} loves to hold ${wordTwo} goats all day while lounging in the ${wordThree}.`,
        `${wordOne} is the name of you magic pet. ${wordTwo} is what he does all day when they are not ${wordThree}.`,
        `I didn't think I would like eating ${wordOne} but I was really suprised when ${wordTwo} became my favorite ${wordThree}.`,
        `If ${wordOne} could be my ${wordTwo} present, I would be really ${wordThree}.`,
        `Good morning! It's time to get up to get ready for ${wordOne}. We need to make sure to brush our ${wordTwo} and comb our ${wordThree} so we are 
    looking our best for ${wordOne}.`,
        `One day Super Mario was looking for ${wordOne} when he saw a ${wordTwo} eating a ${wordThree} with a lot of cheese on it.`,
        `Hey its a robot ${wordOne} robot ${wordTwo}  robot ${wordThree}.`,
        `You can have ${wordOne} right now ${wordTwo} my little ${wordThree}.`,
        `My ${wordOne} really enjoys reading about a ${wordTwo} while spending a fun afternoon at the ${wordThree}`,
        `${wordOne} always makes me laugh. My mom told me that ${wordOne} is really a ${wordTwo} but I think ${wordOne} really a ${wordThree}`
    ];
    
    //nested function to generate random phrase from "phrases"
    function getRandomItem() {

        // generates random value based on phrase length
        const randomIndex = Math.floor(Math.random() * phrase.length);

        // Gets phrase from array
        const randomPhrase = phrase[randomIndex];
        return randomPhrase;
    };
    const result = getRandomItem();


    document.getElementById('text-return').innerHTML = result;
}



  
const textarea = document.querySelector(".input"),
voiceList = document.querySelector("select"),
speechBtn = document.querySelector("button");

let synth = speechSynthesis,
isSpeaking = true;

voices();

function voices(){
    for(let voice of synth.getVoices()){
        let selected = voice.name === "Google US English" ? "selected" : "";
        let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
        voiceList.insertAdjacentHTML("beforeend", option);
    }
}

synth.addEventListener("voiceschanged", voices);

function textToSpeech(text){
    let utterance = new SpeechSynthesisUtterance(text);
    for(let voice of synth.getVoices()){
        if(voice.name === voiceList.value){
            utterance.voice = voice;
        }
    }
    synth.speak(utterance);
}

speechBtn.addEventListener("click", e =>{
    e.preventDefault();
    if(textarea.value !== ""){
        if(!synth.speaking){
            textToSpeech(textarea.value);
        }
        if(textarea.value.length > 80){
            setInterval(()=>{
                if(!synth.speaking && !isSpeaking){
                    isSpeaking = true;
                    speechBtn.innerText = "Convert To Speech";
                }else{
                }
            }, 500);
            if(isSpeaking){
                synth.resume();
                isSpeaking = false;
                speechBtn.innerText = "Pause Speech";
            }else{
                synth.pause();
                isSpeaking = true;
                speechBtn.innerText = "Resume Speech";
            }
        }else{
            speechBtn.innerText = "Convert To Speech";
        }
    }
});