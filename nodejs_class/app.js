var cl = require("./cl");
const fs = require("fs");
// console.log(fs);

let data = fs.open("test.txt", "r", (err, fd) => {
    // console.log(fd);
  
});

var pl = new cl(1,2);
console.log(pl);
pl.add();