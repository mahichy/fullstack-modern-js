function average (num1,num2){
  let answer = (num1+num2)/2;
  return answer;
}

let answer = average (6,5);

console.log(answer);
console.log(answer+25);

console.log(average(6,5));
console.log(average(8,5));
console.log(average(9,5));

let megaaverage = average(average(6,5),average(8,5));
console.log(megaaverage);


function hello(){
  console.log("hello world")
}
hello();
hello();

function love(){
  console.log("i love you");
}
love();
