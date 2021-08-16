let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595";
let request=require("request");
let cheerio=require("cheerio");
let scoreCardObj=require("./scorecard")
 request(url,cb);
 function cb(error,response,html){
     if(error){
         console.log(error);//print the error
     }else if(response.statuscode==404){
      console.log("page not found")
     }
     else{
         dataExtracter(html);
     }
 }
 function dataExtracter(html){
     let searchTool=cheerio.load(html);
     let anchorrep=searchTool('a[data-hover="View All Results"]');
     let link=anchorrep.attr("href");
     //console.log("link",link)
     let fullAllmatchPageLink=`https://www.espncricinfo.com${link}`;
     console.log(fullAllmatchPageLink);
     //go to all match page
     request(fullAllmatchPageLink,allMatchPageCb);
 }
 function allMatchPageCb(error,response,html){
    if(error){
        console.log(error);//print the error
    }else if(response.statuscode==404){
     console.log("page not found")
    }
    else{
       console.log(html); //print the html for the request made
       getAllScoreCardLink(html);
    }
 }
 function getAllScoreCardLink(html){
     console.log("///////");
     let searchTool=cheerio.load(html);
     let scorecardsArr=searchTool("a[data-hover='Scorecard']");
     for(let i=0;i<scorecardsArr.length;i++){
         let link=searchTool(scorecardsArr[i]).attr("href");
         let fullAllmatchPageLink=`https://www.espncricinfo.com${link}`;
         console.log(fullAllmatchPageLink);
     }
     console.log("`````````````````");
    
    }