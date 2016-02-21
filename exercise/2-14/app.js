var fs = require("fs");

// read file asynchronously.
// text-encoding(2nd paramter) can be ignored.
fs.readFile("abc.txt", "utf8", (err, data) => {
    if (err) {
        throw err;
            
    }
    console.log("data:" + "%s", data);
});