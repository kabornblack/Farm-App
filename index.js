const fs = require("fs");
const http = require("http");

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
    res.end("Hello world from my server");
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Lestening to request on port 8000");
});
