//傳入多個參數並取得多個環境變數

var argv = process.argv.slice(2);
console.log(argv.map(function(a) {
    return process.env[a];
}));