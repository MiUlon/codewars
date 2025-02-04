// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291

function uniTotal(string) {
    let sum = 0;

    if (string.length > 0) {
        for (let i = 0; i < string.length; i++) {
            sum += string.charCodeAt(i);
        };
    } else {
        return 0;
    };

    return sum;
};

console.log(uniTotal(''));
console.log(uniTotal('a'));
console.log(uniTotal('b'));
console.log(uniTotal('c'));
console.log(uniTotal('d'));
console.log(uniTotal('aaa'));
console.log(uniTotal('Mary Had A Little Lamb'));