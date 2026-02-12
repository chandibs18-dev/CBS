const http = require("http");
const url = require("url");

const server = http.createServer((req,res) => {
    const parsedUrl = url.parse(req.url,true);
    const path = parsedUrl.pathname;
    const method = req.method;

    if (path === "/api/users" && method === "GET"){
        const users = [
            {id:1,name:"Chandima"},
            {id:2,name:"Bodhini"},
        ];
        res.writeHead(200, { "Content-Type": "application/json" });
        // 2. Convert JavaScript object to a JSON string and send it
        res.end(JSON.stringify(users));
    } else if (path === "/api/users" && method === "POST"){
        let body ="";
        req.on("data",(chunk) => {
            body += chunk.toString();
        });
        req.on("end",() =>{
            const newUser = JSON.parse(body);
            res.writeHead(201,{ "Content-Type": "application/json"});
            res.end(JSON.stringify(newPage));
        });

    }
});

server.listen(3000,() => {
    console.log("server listening on port 3000");
});