// Can you implement a function that will return number of words in a string?

// You have to ensure that spaces in string is a whitespace for real.

// Let's take a look on some examples:

// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// // ... and so on
// What kind of tests we made for your code:

// Function have to count words and not spaces. You have to be sure that you doing it right
// Empty string has no words.
// String with spaces around should be trimmed.
// Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
// Doublecheck that words with chars like -, ', ` are counted right.

function countWords(str) {
    str = str.trim();
    str = str.replace(/[\ufeff\ufeff]/g, " ");

    let wordsCount = 0;

    if (str === '') {
        return 0;
    };

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ' && str[i+1] !== ' ') {
            wordsCount++
        };
    };

    wordsCount++;

    return wordsCount;
  };

console.log(countWords("Hello"), 1);
console.log(countWords("Hello, World!"), 2);
console.log(countWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), 19);
console.log(countWords(""), 0);
console.log(countWords("With! Symbol@ #Around! (Every) %Word$"), 5);
console.log(countWords("Dear   Victoria, I love  to press   space button."), 8);
console.log(countWords(" Arthur "), 1);
console.log(countWords(" David"), 1);
console.log(countWords("Nelson "), 1);
console.log(countWords("  Hello Gomer  "), 2);
console.log(countWords("  Hello     Bart  "), 2);
console.log(countWords("﻿Hello﻿World "), 2);
console.log(countWords("Hello﻿World"), 2);