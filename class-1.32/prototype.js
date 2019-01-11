var a ={
    b:40,
    c:"hello world"
}
var d = Object.create(a);
d.b=99;
//a.b=60;
console.log(d.hasOwnProperty('b'))
console.log(d.b)
console.log(a.b)
console.log(a.c)