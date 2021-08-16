//highest wicket tacker name
let request = require("request");
let cheerio = require("cheerio");

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";
request(url, callbackFun);

function callbackFun(err, response, body) {
    if (err) {
        console.log("Error occured ", err);
    } else if (response.statusCode == 404) {
        console.log("Page Not Found 😟");
    } else {
        // console.log(body);
        dataExtractor(body);
    }
}

function dataExtractor(html) {
    let searchTool = cheerio.load(html);
    let bowlers = searchTool(".table.bowler tbody tr");

    for (let i = 0; i < bowlers.length; i++) {
        let cols = searchTool(bowlers[i]).find('td');
        let name = searchTool(cols[0]).text();
        let wickets = searchTool(cols[4]).text();

        console.log("name:" + name + ' wickets:' + wickets);
    }
}