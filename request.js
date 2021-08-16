let request=require("request");
//npm i cheerio to download the module
let cheerio =require("cheerio");
//data extract -->cheerio
// request('http://www.google.com',cb);
// function cb(error,response,html){
//     //console.error("error:",error);
//     //console.log("body",html);
//     if(error){
//         console.log(error); //print the error if one occured
//     }else if(response.statusCode==404){
//         console.log("Page not found");
//     }else{
//         console.log("html");
//     }
// }
console.log("Before");
request('https://www.npmjs.com/package/cheerio',cb);
function cb(error,response,html){
    // console.error('error:',error); //print the eroor
    //console.log('body:',html);
    if(error){
     console.log(error); //print the error if one occured
    }else if(response.statusCode==404){
    console.log("Page not found");
    }
    else{
        //console.log(html); //print the html for the request
        dataExtracter(html);
    }
}
function dataExtracter(html){
    //search tool
    let searchTool=cheerio.load(html);
    // css selector ->elem
    let elemRep=searchTool("#readme>h1");
    //text
    let moduleName=elemRep.text().trim();
    console.log("moduleName",moduleName);
}
console.log("After");