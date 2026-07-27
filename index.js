console.log("Pipelines Hello")

const search = require("./array-search")

const flag = search.arraySearch([1, 2, 3], 2)

if(flag === -1) console.log("Target not found")
else console.log("Target found at index", flag)

