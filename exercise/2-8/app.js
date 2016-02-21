// 依傳入參數取得某個環境變數

var argv = process.env[process.argv[2]];

if (argv) {
    console.log(argv);
} else {
    console.log("無此變數!");
}
