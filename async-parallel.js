let fs=require("fs");
console.log("Before");
fs.readFile("f1.txt",cb);
fs.readFile("f2.txt",cb);
fs.readFile("f3.txt",cb);
function cb(err,content){
    console.log("content"+content);
}
// function cb1(err,content){
//     console.log("content"+content);
// }
// function cb2(err,content){
//     console.log("content"+content);
// }
console.log("after");