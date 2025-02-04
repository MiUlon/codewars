// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str){
    let firstName = '';
    let lastNameArray = str.split("");

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            firstName += str[i];
            lastNameArray.splice(lastNameArray[i], 1);
        } else if (str[i] === ' ') {
            lastNameArray.splice(lastNameArray[i], 1);
            i = str.length + 1;
        };
    };

    const lastName = lastNameArray.join("");

    return lastName + ' ' + firstName;
};

console.log(nameShuffler('Jonas Jonaitis'));