/*
// continue;
// break;
var found = 0;
var target =21;
var iterator = 2;

while (!found){
    let answer = target % iterator;
    if (!answer){
        found = iterator;
    }
    iterator++;
}
console.log(found);
*/

var target =21;
var found =0;
for (let i=2;!found;i++){
    let result = target%i;
    if (!result){
        found = i;
    }
}
console.log(found);