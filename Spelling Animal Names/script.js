// Spelling gam
const userName = 'Cookie the Cat'; // -- will be an input field and stored in local storage
const userInput = 'HIPPO';
// constructor for animals to spell which will include: animal name, url for image, array of letters in the animal name

class Animals{
    constructor(name, imgUrl){
        this.name = name,
        this.url = imgUrl
    }
    nameArray(){
        return this.name.split('')
    }
}
//animal class array
const animalArray = [
    new Animals('hippo', './achicken'),
    new Animals('chicken', './chickennoodle'),
    new Animals('fish', './fish/cheese'),
];
//Game Class Constructor and methods for animal array nodes

class Game{
    constructor(animalArr){
        this.animalArr = animalArr,
        this.current = this.animalArr[0]
    }
// Compare the user input result against the correct answer
    compareResults(){
        return userInput.toLowerCase() != this.current.name.toLowerCase() ? `Try Again ${userName}` : `Great Job ${userName}!`
    }
// Get the next animal in the animal array
    getNextAnimal(){
        let currentVal = this.current;
        let currentIndex = this.animalArr.findIndex(e => e === this.current);
        if(currentVal === this.current && currentIndex < this.animalArr.length -1){
            currentVal = this.animalArr[currentIndex + 1];
            this.current = currentVal;
        } else {
            currentVal = this.animalArr[0];
            this.current = currentVal;
        }
        return
    }
// To be used for backwards traversal of the animal array
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
        return 
    } 
// scramble letters of the current animal --- to be used as selectable character blocks to spell the animal name
// Using Fisher–Yates shuffle algorithm to produce the result
    scrambleNameLetters() {
        let array = this.current.nameArray();
        let currentIndex = array.length,  randomIndex;
        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
            return array;
    }        
}
//create test game instance
const game = new Game(animalArray);
//console log testing
console.log(`Animal Name: ${game.current.name} --- User Input: ${userInput}. ${game.compareResults()}`);
game.getNextAnimal();
console.log(`Animal Name: ${game.current.name} --- User Input: ${userInput}. ${game.compareResults()}`);


