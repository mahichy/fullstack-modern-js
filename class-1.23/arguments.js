//arguments

/*
function average(){
    let answer = (arguments[0]+arguments[1])/2;
    return answer;
}
console.log(average(25,35));


function average(a,b){
    let answer = (arguments[0]+b)/2;
    return answer;
}
console.log(average(65,85));


function average (a,b){
    let answer = (arguments[0]+b)/2;
    console.log(arguments[2])
    return answer;
}
console.log(average(85,65,21));
*/

function average (a,b){
    if (!(a && b)){
        return 0;
    }
    let answer = (arguments[0]+b)/2;
    console.log(arguments[2]);
    return answer;
}
console.log(average(24,34,85));
