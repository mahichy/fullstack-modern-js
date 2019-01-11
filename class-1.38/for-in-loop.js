var bajar = ["alu","potol","maris","vandi"];

console.log(bajar[3]);
console.log(bajar[2]);
console.log(bajar[1]);
console.log(bajar[0]) 
//00
var bajar = ["alu","potol","maris","vandi"];

console.log(bajar.indexOf("mula"))
console.log(bajar.indexOf("alu"))
console.log(bajar.indexOf("vandi"))
console.log(bajar.indexOf("potol"))
console.log(bajar.indexOf("papi"))

//111
var bajar = ["alu","potol","maris","vandi"];

console.log(bajar.length)

var bajar = ["alu","potol","maris","vandi"];

for(let i=0;i<bajar.length;i++){
    console.log(bajar[i])
}
//add
var bajar = ["alu","potol","maris","vandi"];

bajar.push("puiShak")

console.log(bajar)

//delate
var bajar = ["alu","potol","maris","vandi"];

bajar.pop()
console.log(bajar)

var bajar = ["alu","potol","maris","vandi"];

var li = bajar.pop()
console.log(li)
console.log(bajar);

//add 2
var bajar = ["alu","potol","maris","vandi"];
bajar.unshift("chaal")
console.log(bajar)
//delate 2
var bajar = ["alu","potol","maris","vandi"];
bajar.shift()
console.log(bajar)

var manush = {
    name:"anam",
    age:36,
    talk(){
        console.log("hello world")
    }
}
console.log(manush["name"])
console.log(manush["age"])
manush["talk"]()

