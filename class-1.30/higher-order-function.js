function generate (type){
    if (type ==='plus'){
        return(a,b)=>a+b;
    }
    else if (type==='minus'){
        return(a,b)=>a-b;
    }
    else if (type==='multiply'){
        return(a,b)=>a*b;
    }
    else if (type==='devide'){
        return (a,b)=>a/b;
    }
}
var d = generate('multiply');
console.log(d(4,6))

function caller(){
    return function(name){
        return 'caller colling you' + name;
    }
}
var a = caller()(' mahi');
console.log(a);