/*
var x = function(a){
    return a+1;
}
console.log(x(4))
console.log(x(7))
console.log(x(8))
console.log(x(9))


//new( for one argument)
var x = a=>a+1;

console.log(x(4))
console.log(x(7))
console.log(x(8))
console.log(x(9))

*/
//more than one argument 
var x =( a,b)=>{
    console.log(a);
    console.log(b);
    return a+b;
};

console.log(x(4,3))
console.log(x(7,4))
console.log(x(8,5))
console.log(x(9,4))

(argument,hn,hm,gm)=>{returnexpression}