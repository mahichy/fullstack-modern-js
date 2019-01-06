
var e ={
    b:59,
    c:"hello world"
}
e.d="hi"
e.b=56
delete e.b
console.log(e)


var a ={
    b:59,
    c:"hello world",
    d:function(){
        console.log("this is d")
    }
}
console.log(a.b)
console.log(a.c)
a.d()


var e ={
    b:59,
    c:"hello world"
}
var f ={
    b:59,
    c:"hello world"
}
console.log(e==f)

var g={
    b:59,
    c:"hello world"
}
var h={
    b:59,
    c:"hello world"
}
var  x=h;
console.log(x==h)


var i = {
    b:59,
    c:"hello world"
}
var j={
    b:59,
    c:"hello world"
}
var x=i
x.b=5
console.log(x.b)

var i = {
    b:59,
    c:"hello world"
}
var j={
    b:59,
    c:"hello world"
}
var x=j
x.b=5
console.log(x.b)
var i = {
    b:59,
    c:"hello world"
}
var j={
    b:59,
    c:"hello world"
}
var x=i
x.b=5
console.log(j.b)

