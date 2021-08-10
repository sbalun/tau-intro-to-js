// The curly brackets after the variable are enought to declare an object
// This is an object literal
const bass = {
    name: "Modulus Quantum 5",
    strings: 5,
    wood: "Bubinga",
    playBass: function (){
        console.log("I'm playing a " + this.name);
    }
};

// DEV console will report the bass object properties
console.log(bass.name);
bass.playBass();

// Change the bass name
bass.name = "Music Man Stingray Special"

// DEV console will report the updated bass name
console.log(bass);

// Declaring a class
// You have to use a captial first letter in the class name
class Bass{
    constructor(name, strings, wood){
        this.name = name;
        this.strings = strings;
        this.wood = wood;
    }
    // functions in a class don't have the function keyword
    playBass(){
        console.log("I'm playing a " + this.name);
    }
}

// Instantiating a new object of class Bass
const myBass = new Bass("Fender Precision Bass", 5, "Ash");
console.log(myBass);
myBass.playBass();