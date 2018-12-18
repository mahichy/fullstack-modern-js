
var target =21;
var found =0;
for (let i=2;!found;i++){
    let result = target%i;
    if (!result){
        found = i;
    }
}
console.log(found);


var target =21;
var found =0;
for (let i=2;i<=target/2;i++){
    let result = target%i;
    if (!result){
      found =i;
        break;
    }
}
console.log(found);


var target =21;
var target2 =90;
var found =0;
for (let i=2;i<target/2;i++){
    let result = target%i;
    if (result){
        continue;
    }
    let result2=target2%i;
    if(!result2){
      found=i;
      break;
    }
}
console.log(found);

