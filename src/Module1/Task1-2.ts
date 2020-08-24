/*
 * Write a program which should do the following:
 *
 * [*] Read the content of csv file from ./csv directory.
 * [*] Use the csvtojson package (https://github.com/Keyang/node-csvtojson) to convert csv file to json object.
 * [*] Write the csv file content to a new txt file. Use the provided format.
 * [*] Do not load all the content of the csv file into RAM via stream (read/write file content line by line).
 * [*] In case of read/write errors, log them in the console.
 * [*] The program should be started via npm script using nodemon (i.e. npm run task2)*
 *
 * */

import fs from 'fs';
import csvtojson from 'csvtojson';

const csvFilePath = './csv/nodejs-hw1-ex1.csv';
const txtFilePath = './csv/nodejs-hw1-ex1.txt';

/*
 * Read the content of csv file
 * */
fs.createReadStream(csvFilePath)
    /*
     * Convert csv file to json object with formatting
     * */
    .pipe(
        csvtojson({
            colParser: {
                Amount: 'omit',
            },
        })
    )
    /*
     * Write the csv file content to a new txt file
     * */
    .pipe(
        fs
            .createWriteStream(txtFilePath)
            .on('finish', () => {
                console.log('************* Complete file transformation');
            })
            .on('error', (error) => {
                console.error('************ Error writing to txt file: ', error);
            })
    );
