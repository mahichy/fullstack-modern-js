var array1 = [1,2,3]
var array2 = [4,5,6]

var thirdArray = array1.concat(array2);
console.log(thirdArray);

var myArray = [0,1,2,3,4,5,6];
var newArray = myArray.slice(1,4);
console.log(newArray)

var myArray = [2,4,6,8,9];

var evenNumber = function(num){
    var vagSesh = num%2;
    if (vagSesh===0)
    return true;
    return false;
}
console.log(evenNumber(2));

var myArray = [2,4,6,8,9];

var evenNumber = function(num){
    var vagSesh = num%2;
    if (vagSesh===0)
    return true;
    return false;
}
console.log(myArray.every(evenNumber));


var myArray = [2,4,6,8,9];

var oddNumber = function(num){
    var vagSesh = num%2;
    if (vagSesh===0)
    return false;
    return true;
}
console.log(myArray.every(oddNumber));

var myArray = [2,4,6,8,9];

var oddNumber = function(num){
    var vagSesh = num%2;
    if (vagSesh===0)
    return false;
    return true;
}
console.log(myArray.some(oddNumber));

var myArray = [2,4,6,8,5,3,9];

var oddNumber = function(num){
    var vagSesh = num%2;
    if (vagSesh===0)
    return false;
    return true;
}
var oddArray = myArray.filter(oddNumber);
console.log(oddArray)


var myArray = [2,4,6,5,3,5]
myArray.splice(1,2,"alu","mula","shim")

console.log(myArray)


var myArray = [2,4,6,5,3,5]

var newArray = myArray.reduce((a,b)=>{
    console.log(a,b)
},0)



var myArray = [2,4,6,8,24]

var newArray = myArray.reduce((a,b)=>{
console.log(a,b)
return a+b;
},0)

console.log(newArray);

