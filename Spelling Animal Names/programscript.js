
const userName = 'Cookie the Cat'; // -- will be an input field and stored in local storage
const userInput = 'HIPPO';

class Animals{
    constructor(name, imgUrl){
        this._name = name,
        this._url = imgUrl
    }
    getName(){
        return this._name
    }
    getImage(){
        return this._url
    }
    nameArray(){
        return this.getName().split('')
    }
}

const animalArray = [
    new Animals('hippo', './images/hippo-img.jpg'),
    new Animals('chicken', './images/chicken.jpg'),
    new Animals('fish', './images/fish.jpg'),
];

class Game{
    constructor(animalArr){
        this.animalArr = animalArr,
        this.current = this.animalArr[0],
        this.nameScramble = this.scrambleNameLetters()
    }
    compareResults(){
         if(document.querySelector('.user-input').innerHTML == game.current.getName()){
            document.querySelector('.response').innerHTML = "You Win!!!!"
            setTimeout(() => {
                game.getNextAnimal()
            }, 3000);
        }
        
    }
    getNextAnimal(){
        let currentVal = this.current;
        let currentIndex = this.animalArr.findIndex(e => e === this.current);
        document.querySelector('.user-input').innerHTML = null;
        document.querySelector('.response').innerHTML = null;
        if(currentVal === this.current && currentIndex < this.animalArr.length -1){
            currentVal = this.animalArr[currentIndex + 1];
            this.current = currentVal;
        } else {
            currentVal = this.animalArr[0];
            this.current = currentVal;
        }
        startGame()
        return
    }
    getPreviousAnimal(){
        let currentVal = this.current;
        let currentIndex = this.animalArr.findIndex(e => e === this.current);
        if(currentVal === this.current && currentIndex > 0){
            currentVal = this.animalArr[currentIndex - 1];
            this.current = currentVal;
        } else {
            currentVal = this.animalArr[this.animalArr.length -1];
            this.current = currentVal;
        }
        startGame()
        return 
    } 
    scrambleNameLetters() {
        let array = this.current.nameArray();
        let currentIndex = array.length,  randomIndex;
        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
            return this.nameScramble = array;
    }
    unscrambleNameLetters(){
        return this.current.nameArray()
    }     
}

const game = new Game(animalArray);

const scrambledLetters = document.querySelector('.scrambled-letters');

function startGame(){
    const numOfScrambleBoxes = game.scrambleNameLetters();
    let animalImage = document.querySelector('.animal-img');
    scrambledLetters.innerHTML = '';

    for(let i = 0; i < numOfScrambleBoxes.length; i++){
        scrambledLetters.innerHTML += 
        `<div class='inputs' id='${i}'>${numOfScrambleBoxes[i]}</div>`
    }
    animalImage.src = game.current.getImage();
    const scrambledInputClick = [...document.querySelectorAll('.inputs')];

    scrambledInputClick.forEach(function(e){
    e.addEventListener('click', function(){
        document.querySelector('.user-input').innerHTML += e.innerHTML;
        e.style.backgroundColor = 'pink';
        game.compareResults()
    })
})
}

const getNext = document.querySelector('#next-btn');
getNext.addEventListener('click', () => {
    game.getNextAnimal()
})

const getPrevious = document.querySelector('#previous-btn');
getPrevious.addEventListener('click', () => {
    game.getPreviousAnimal()
})

