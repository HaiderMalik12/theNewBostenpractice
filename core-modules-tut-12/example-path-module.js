var path = require('path');
var websiteHome = "E:/7th Semester/Node.js/Node js Tuts TheNewBosten";
var websiteAbout = 'E:\7th Semester\Node.js\Node js Tuts TheNewBosten\Notes Text Files\core-modules-tut-12\cron.txt';
console.log(path.normalize(websiteAbout));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));