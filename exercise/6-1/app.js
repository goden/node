// 模組化回傳JSON資料
//
var http = require("http");
var api = require("./api");
var static = require("./static");       // 還是要儘可能少用關鍵字作為變數名稱

http.createServer(function(request, response) {

    api(request, response);
    static(request, response);

}).listen(process.env.PORT || 3000);
