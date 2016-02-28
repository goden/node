//
// 依路徑讀取檔案-支援中文路徑
// 中文網址會被編碼，使用decodeURI函式可以還原編碼過的中文字。
var http = require("http");
var fs = require("fs");
var url = require("url");
var mime = require("mime");

http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    if (pathname.substr(pathname.length - 1) === "/") {
        pathname += "index.html"; //若無帶入檔名預設為index.html
    } else {
        var paths = pathname.split("/").pop();
        if (paths.indexOf(".") === -1) {
            response.writeHead(301, {
                "Location": pathname + "/" + (url.parse(request.url).search || "")
            });
            response.end();
            return;
        }
    }
    pathname = (process.argv[2] || ".") + pathname; //若有傳入參數則使用參數的路徑
    pathname = decodeURI(pathname);                 //因為中文網址會被編碼，使用此原生函式可以還原編碼過的中文字

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
