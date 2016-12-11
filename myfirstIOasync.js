var fs = require('fs');

var filePath = process.argv[2];
var lines = 0;

fs.readFile(filePath, function (err, data){
    if (err) {
      return console.log(err)
    }
    lines = data.toString().split("\n").length - 1;
    console.log(lines);
})
