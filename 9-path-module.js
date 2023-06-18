const { log } = require('console')
const path = require('path')

console.log(path.sep)
console.log(path.join)

const file1 = path.join('/content','mainShows','lyrics.txt')
console.log(file1);

console.log(path.basename(file1))

const absolutePath = path.resolve(__dirname,'content','mains','text.txt')
console.log(absolutePath);