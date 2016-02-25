// 依路徑讀取檔案 - 通用版
var http = require("http");
var fs = require("fs");
var url = require("url");
var mime = require("mime");

http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;

    if (pathname.substr(pathname.length - 1) === "/") {
        pathname += "index.html";
    }
    
    pathname = "." + pathname;
    
    try{
        if (fs.statSync(pathname).isFile()) {
            response.writeHead(200, {
                "Content-Type": mime.lookup(pathname)
            });
            response.write(fs.readFileSync(pathname));
            response.end();
        } else {
            handleAsNotFound();
        }
        
    } catch (e) {
        handleAsNotFound();
    }
    
    function handleAsNotFound() {
        response.writeHead(404);
        response.write("404 not found.");
        response.end();
    }


}).listen(process.env.PORT || 3000);
