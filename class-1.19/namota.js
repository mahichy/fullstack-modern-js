
let num = +process.argv[2];
if (!Number.isInteger(num)){
    console.log("the provided valu is not a number");
    process.exit();
}
console.log(`${num}x1 = ${num*1}`);
console.log(`${num}x2 = ${num*2}`);
console.log(`${num}x3 = ${num*3}`);
console.log(`${num}x4 = ${num*4}`);
console.log(`${num}x5 = ${num*5}`);
console.log(`${num}x6 = ${num*6}`);
console.log(`${num}x7 = ${num*7}`);
console.log(`${num}x8 = ${num*8}`);
console.log(`${num}x9 = ${num*9}`);
console.log(`${num}x10 = ${num*10}`);


let num = +process.argv[2];

if (!Number.isInteger(num)){
    console.log("This valu is not a provided number");
    process.exit();
}
var i = 1;
for (let i=1; i<=10;i++){
    console.log(`${num}x${i} = ${num*i}`);
}



