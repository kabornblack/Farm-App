const fs = require("fs");
const http = require("http");
const url = require("url");

///////////////////////////
//FILES

// Blocking code
//const myInput = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
//console.log(myInput);

//const outOut = `This is what we know about the avacado: ${myInput}. \nCreated on  ${Date.now()}`;

//fs.writeFileSync("./starter/txt/outOut.txt", outOut);
//console.log("File written");

//Non-Blacking code
//fs.readFile("./starter/txt/start.txt", "utf-8", (err, data1) => {
    //if (err) return console.log("ERROR BOOM");
    //fs.readFile(`./starter/txt/${data1}.txt`, "utf-8", (err, data2) => {
        //console.log(data2);
        //fs.readFile(`./starter/txt/append.txt`, "utf-8", (err, data3) => {
            //console.log(data3);

            //fs.writeFile("./starter/txt/final.txt", `${data2} \n ${data3}`, "utf-8", err => {
                //console.log("File has been wrritten");
            //})
        //})
    //})
//});

///////////////////////////////////
//SERVER

const server = http.createServer((req, res) => {

    const pathName = req.url;

    if (pathName === "/" || pathName === "/overview") {
        res.end("This is the OVERVIEW");
    } else if (pathName === "/product") {
        res.end("This is the PRODUCT");
    } else if (pathName === "/api") {

        fs.readFile(`${__dirname}/starter/dev-data/data.json`, "utf-8", (err, data) => {
            const productData = JSON.parse(data);
            res.writeHead(200, {"Content-type": "application/json"});
            res.end(data);
        });
        
    } else {
        res.writeHead(404, {
            "Content-type": "text/html",
            "my-own-header": "Hello world"
        });
        res.end("<h1>page not found!</h1>");
    }
    
});











server.listen(8000, "127.0.0.1", () => {
    console.log("Lestening to request on port 8000");
});
