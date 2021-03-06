var http = require("http");
var fs = require("fs");
var url = require("url");
var mime = require("mime");
http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    if (pathname.substr(pathname.length - 1) === "/") {
        pathname += "index.html"; //若無帶入檔名預設為index.html
    }
    pathname = (process.argv[2] || ".") + pathname; //最前面補上一個點表示相對路徑
    try {
        if (fs.statSync(pathname).isFile()) {
            response.writeHead(200, {
                "Content-Type": mime.lookup(pathname)
            });
            response.write(fs.readFileSync(pathname));
            response.end();
        } else {
            notFound();
        }
    } catch (e) {
        notFound();
    }
    function notFound() {
        response.writeHead(404);
        response.write("404 not found");
        response.end();
    }
}).listen(process.env.PORT || 3000);
