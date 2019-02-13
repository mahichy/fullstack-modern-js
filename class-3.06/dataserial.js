var a = {name:"mahi",age:37}
undefined
a
{name: "mahi", age: 37}
JSON.stringify(a);
"{"name":"mahi","age":37}"
var b = JSON.stringify(a);
undefined
b
"{"name":"mahi","age":37}"
a
{name: "mahi", age: 37}
JSON.parse(b);
{name: "mahi", age: 37}

//local storage 
//add
localStorage.setItem("anam","he is a teacher of my java script");
undefined
localStorage
Storage {anam: "he is a teacher of my java script", length: 1}

//remove
localStorage.removeItem("anam");
undefined
localStorage.clear();

//json

var a = {name:"mahi",age:37};
undefined
a
{name: "mahi", age: 37}
var b = JSON.stringify(a);
undefined
b
"{"name":"mahi","age":37}"
localStorage.setItem("my_secret_data",b);
undefined

localStorage
Storage {my_secret_data: "{"name":"mahi","age":37}", length: 1}
localStorage.getItem("my_secret_data")
"{"name":"mahi","age":37}"
var c = localStorage.getItem("my_secret_data");
undefined
c
"{"name":"mahi","age":37}"
c=JSON.parse(c);
{name: "mahi", age: 37}
c
{name: "mahi", age: 37}
sessionStorage.setItem("tom", "he is a star");
undefined
sessionStorage
Storage {tom: "he is a star", length: 1}