var fs = require("fs");
List = require("./list");

// function createArr(file) {
//     var arr = fs.readFile(file).split("\n");
//     for (var i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].trim();
//     }
//     return arr;
// }
//
//
// console.log(createArr("./list.films.txt"))
fs.readFile("./list.films.txt",'utf-8',function(err,data){
    console.log(data);
});
