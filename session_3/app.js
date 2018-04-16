
// 12 - JSON serialize
// var http = require('http');
// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'application/json'}); // text/plain ?
//     var obj = {
//         name: "Mohamed",
//         age: "22",
//     }
//     res.end(JSON.stringify(obj));
// }).listen(3000, '127.0.0.1');

// 11 - Templates
// var http = require('http');
// var fs = require('fs');
// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'}); // text/plain ?
//     var html = fs.readFileSync(__dirname + '/index.html', 'utf-8');
//     var message = "Hello from template!"
//     html = html.replace('{Message}', message);
//     res.end(html);
// }).listen(3000, '127.0.0.1');

// 10 - HTML files
// var http = require('http');
// var fs = require('fs');
// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'}); // text/plain ?
//     var html = fs.readFileSync(__dirname + '/index.html');
//     res.end(html);
// }).listen(3000, '127.0.0.1');

// 9 - web server
// var http = require('http');
// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World');
// }).listen(3000, '127.0.0.1');

// 8 - requiring native modules
// var util = require('util');
// var name = 'Mohamed';
// util.log( util.format("Hello, %s", name) );

// 7 - module.js breakpoint
// var logme = require('./logme');
// logme();

// 6 - IIFEs
// var firstname = "Jane";

// (function(lastname) {
//     var firstname = "John";
//     console.log("Name from IIFE: " + firstname + " " + lastname);
// })('Doe');

// var lastname = "Smith";
// console.log("Name from global: " + firstname + " " + lastname);

// 5 - by value vs by reference
// function changeVal(b) {
//     b = 3;
// }
// var a = 2;
// changeVal(a);
// console.log(a);

// function changeRef(d) {
//     d.prop1 = function() {};
//     d.prop2 = {};
// }
// var c = {prop1: 5};
// changeRef(c);
// console.log(c);

// 4 - exporting from logme
// var logme = require('./logme');
// logme(); // will it work ?

// 3 - requireJS
// require('./logme');
// logme(); // will it work ?

// 2 - first-class functions
// function statement
// function greet() {
// 	console.log('hi');
// }
// greet();

// // functions are first-class
// function logGreeting(fn) {
// 	fn();
// }
// logGreeting(greet);

// // function expression
// var greetMe = function() {
// 	console.log('IEEE');
// }
// greetMe();

// // it's first-class
// logGreeting(greetMe);

// // // use a function expression to create a function on the fly
// logGreeting(function() {
// 	console.log('Hello from IEEE!');
// });

// 1 - run in VScode debugger
// var a = 1;
// var b = 2;

// console.log("a + b: " + (a + b));