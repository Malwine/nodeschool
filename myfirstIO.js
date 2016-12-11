var fs = require('fs');

var filePath = process.argv[2];

var input = fs.readFileSync(filePath).toString();

var inputArray = input.split("\n");

var length = inputArray.length - 1;
console.log(length);
