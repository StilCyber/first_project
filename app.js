const http = require("http");

const os = require("os");

const greeting = require("./greeting");
let userName = os.userInfo().username;
console.log(userName)

console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));

const User = require("./user");
let stil = new User("Stil", 32);
stil.sayHi();