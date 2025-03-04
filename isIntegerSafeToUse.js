// Not all integers can be represented by JavaScript/TypeScript. It has space to to represent 53bit signed integers. In this Kata, we've to 
// determine if it is safe to use the integer or not. Make use of the latest ES6 features to find this.

function SafeInteger(n) {
    if (n > Number.MAX_SAFE_INTEGER) {
        return false;
    } else {
        return true;
    };
};

console.log(SafeInteger(9007199254740992), false, 'Value returned should be false');
console.log(SafeInteger(9007199254740990), true, 'Value returned should be true');