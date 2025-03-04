// Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

// snoopy.bark(); // return "Woof"
// scoobydoo.bark(); // undefined
// Use method prototypes to enable all Dogs to bark.

function Dog (breed) {
    this.breed = breed;
};
  
const snoopy = new Dog("Beagle");
  
snoopy.bark = function() {
    return "Woof";
  };
  
const scoobydoo = new Dog("Great Dane");

scoobydoo.bark = function() {
    return "Woof";
};
  

console.log(snoopy.bark() === "Woof");
console.log(scoobydoo.bark() === "Woof");