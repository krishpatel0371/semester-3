// const { log } = require('console');
// const { lookup } = require('dns');
// const path = require('path');

// const normalizepath = path.normalize("C:/Users/Krish patel/Desktop/B. Tech/sem 3/wt/lab/krish/server")
// console.log("normalize path::",normalizepath)


// const extname = path.extname("C:/Users/Krish patel/Desktop/B. Tech/sem 3/wt/lab/krish/server.txt")
// console.log("Ext name::",extname);

// const basename = path.basename("C:/Users/Krish patel/Desktop/B. Tech/sem 3/wt/lab/krish/server.txt")
// console.log("base name ::",basename);

// const dirname = path.dirname("C:/Users/Krish patel/Desktop/B. Tech/sem 3/wt/lab/krish/server.txt")
// console.log("dir name ::",dirname);

// const joinpath = path.join("C:/Users/Krish patel/Desktop/B. Tech/sem 3/wt/lab/krish/server.txt","abc.txt")
// console.log("join path::",joinpath);






const fs = require('fs');


let data = fs.readFile('demo.txt', 'utf-8');

console.log(data);

fs.renameSync('demo.txt','abc.txt')

fs.appendFileSync('ab.txt','this is a vanillajs')
fs.writeFileSync('abc.txt','this is a me')

let data2 = fs.readFileSync('abc.txt','utf-8')
console.log(data2);

