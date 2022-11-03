const http = require("http");

function countup(startNum, endNum) {
    if (startNum > endNum) {
        return [];
    } else {
        const countArray = countup(startNum, endNum - 1);
        countArray.push(endNum);
        return countArray;
    }
}
console.log(countup(4, 8));