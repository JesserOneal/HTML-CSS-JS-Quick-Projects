// Variables
//You are getting ready to face Brock for the Boulder Badge. 
//You want three pokemon on your team that each have evolved at least once. 
//Create a pokemon constructor with name, evolution name, currrent state, evo level, current level, and rare candies for quick level up
//build out a team of 3 pokemon
//create update function in the pokemon class to evolve the pokemon after eating rare candies
//console.log the pokemons name from the team to ensure the name changes after reaching the evo level
class Pokemon{
    constructor(pokeName,eName,hasEvolved,cLevel,eLevel){
        this.pokeName = pokeName,
        this.evolutionName = eName
        this.hasEvolved = hasEvolved,
        this.currentLevel = cLevel,
        this.evolvedLevel = eLevel,
        this.rareCandyEvolve = 0
    }
    update(){
        if(this.rareCandyEvolve = 3){
            this.currentLevel += 1
        }
        if(this.currentLevel >= this.evolvedLevel)
        {this.pokeName = this.evolutionName}
    }
}

const pokemonOne = new Pokemon('bulbasaur','venosaur', false, 15,16)
const pokemonTwo = new Pokemon('caterpie','butterfree', false, 1,7)
const pokemonThree = new Pokemon('weedle','poop', false,1,7)

class PokeTeam{
    constructor(pokemon,pokemon2,pokemon3){
        this.pOne = pokemon,
        this.pTwo = pokemon2,
        this.pThree = pokemon3
    }
}

const myTeam = new PokeTeam(pokemonOne,pokemonTwo,pokemonThree)

//current level is 15 so name should be equal to base form 'bulbasaur'
console.log(myTeam.pOne.pokeName)

//3 rare candy should up the level to the min for evolution
pokemonOne.rareCandyEvolve = 3;
//perform update and console.log the pokemon's name after evolution to validate if evolution was successful
pokemonOne.update()
console.log(pokemonOne.pokeName)

