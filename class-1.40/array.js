/*
var bajar = ["beef","alu","gorom mosola"];

for (let i =0;i<bajar.length;i++){
    console.log(bajar[i])
}

var bajar = ["beef","alu","gorom mosola"];

bajar.forEach(item=>{
    console.log(item)
})

var bajar = ["beef","alu","gorom mosola"];

var newArray=[];
bajar.forEach(item=>{
    newArray.push(item+" done")
})
console.log(newArray)

var bajar = ["beef","alu","gorom mosola"];

var newArray=bajar.map(item=>{
    return item+" done"
})
console.log(newArray)

var bajar = ["beef","alu","gorom mosola","kathal"];

newArray=bajar.reverse();
console.log(newArray)
*/
var myString="mahi chowdhury"

var devidedString=myString.split(" ");
console.log(devidedString);

var myString = "mahi";
var devidedString=myString.split("")
console.log(devidedString)

var myString = "mahi chowdhury";

var devidedString = myString.split("h")
console.log(devidedString)

var myString = "mahi chowdhury"

var devidedStringArray = myString.split("")
var reversedStringArray= devidedStringArray.reverse();
console.log(reversedStringArray)

var myString = "mahi chowdhury";

var devidedStringArray=myString.split("")
var reversedStringArray = devidedStringArray.reverse();
var result = reversedStringArray.join("")
console.log(result)

var l = [10,1,22,210,101,30];

console.log(l.sort())

var l = [10,1,22,210,101,30];

var sorted=l.sort((a,b)=>{
    return a-b;
})
console.log(sorted)

var l = [10,1,22,210,101,30];

var sorted=l.sort((a,b)=>{
    return b-a;
})
console.log(sorted)

var l = [10,1,22,210,101,30];

var sorted=l.sort((a,b)=>{
    console.log(`A:${a} B:${b}`)
    console.log(`${b-a}`)
    return b-a;
})
console.log(sorted)