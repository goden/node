var http = require("http");

var server = http.createServer((request, response)=> {
    response.write("NodeJS");
    response.end();
});

// Due to cloud9 restrict port usage
server.listen(process.env.PORT || 8080);
