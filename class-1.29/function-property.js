/*
function a(b,c){
    console.log("this is a function call.....")
    console.log(this);
    console.log(b);
    console.log(c); 
}
a(3,4)

function a(b,c){
    console.log("this is a function call...")
    console.log(this);
    console.log(b);
    console.log(c);
}
var d = a.bind(7);
d(5,9);


function a(b,c){
    console.log("this is a function call...")
    console.log(this);
    console.log(b);
    console.log(c);
}
a.call("hello",5,7)
*/
function a (b,c){
    console.log("this is a function call....");
    console.log(this);
    console.log(b);
    console.log(c);

}
a.apply("hello",[3,5])


