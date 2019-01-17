var d = new Date()
console.log(d.toDateString());
console.log(d.toTimeString());

var d = new Date(`1982-06-04 10:34 AM`)
console.log(d.toDateString());
console.log(d.toTimeString());

var d = new Date(0)
console.log(d.toDateString());
console.log(d.toTimeString());

var d = new Date();
var v = d.getHours();

console.log(v);

var d = new Date();
var v = d.getMinutes();

console.log(v);

var d = new Date();
var v = d.getSeconds();

console.log(v);

var d = new Date();
var v = d.getFullYear();

console.log(v);

var d = new Date();
var v = d.getMonth();

console.log(v);

var d = new Date();
d.setDate(3);
console.log(d.toDateString());
console.log(d.toTimeString());

var d = new Date();
d.setMonth(3);
console.log(d.toDateString());
console.log(d.toTimeString());

var d = new Date();
d.setHours(10);
console.log(d.toDateString());
console.log(d.toTimeString());

var d = new Date();
d.setDate(3);
console.log(d.toUTCString());

setTimeout(()=>{console.log("hello world")},5000);
