var r = RegExp('abc',"i");

var s = "abcccccc";

console.log(r.test(s));

var r = /ab(c+)/i;

var t = "abcccccc";

console.log(r.exec(t));

// valid varible
var a = RegExp ('^[a-z_][a-z0-9_]*',"i");

var b = "mahi";
console.log(a.test(b));

var a = RegExp ('^[a-z_][a-z0-9_]*',"i");

var b = "_mahi";
console.log(a.test(b));


var a = RegExp ('^[a-z_][a-z0-9_]*',"i");

var b = "5mahi";
console.log(a.test(b));

var c = /abc+/i;
var d = "abcccc";
console.log(d.match(c))

var c = /ab(c+)/i;
var d = "abcccc";
console.log(d.match(c))

var c = /abc+/i;
var d = "ab";
console.log(d.match(c))

var c = /abc+/i;
var d = "abcccc";
console.log(c.exec(d))

var c = /ab(c+)/i;
var d = "abcccc";
console.log(d.match(c))


var n = "1971 ";

var changed= n.replace( /1/g,"১");
var changed= changed.replace( /2/g,"২");
var changed= changed.replace( /3/g,"৩");
var changed= changed.replace( /4/g,"৪");
var changed= changed.replace( /5/g,"৫");
var changed= changed.replace( /6/g,"৬");
var changed= changed.replace( /7/g,"৭");
var changed= changed.replace( /8/g,"৮");
var changed= changed.replace( /9/g,"৯");
var changed= changed.replace( /0/g,"০");

console.log(changed)
 

















