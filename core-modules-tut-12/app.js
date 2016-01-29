var fs=require('fs');
fs.writeFileSync('corn.txt','Corn is Good');

console.log(fs.readFileSync('corn.txt').toString());