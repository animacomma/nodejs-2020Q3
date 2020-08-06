/*
 * Write a program which reads a string from the standard input `stdin`,
 * reverses it and then writes it to the standard output `stdout`.
 * • The program should be started from `npm script` via nodemon (i.e. npm run task1).
 * • The program should be running in a stand-by mode and should not be terminated after the first-string processing.
 *
 * For example:
 *   > 12345 678
 *   >> 876 54321
 *
 *   > test data
 *   >> atad tset
 *
 * */

import readline from 'readline';

console.log('\n ********** Please enter your string to reverse **********');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line: string) {
    const reversedLine = [ ...line.trim() ].reverse().join('');

    console.log(reversedLine);
}).on('close', () => {
    console.log('Have a great day!');
});
