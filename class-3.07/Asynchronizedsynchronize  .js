console.log(hello world);
setTimeout(f=>console.log("have a nice day"),10000);
console.log("hope you are well");

// doSomething(callback (error,data){});
//doSomething(success(data){},fail(error){});

//promice
//doSomething().then(success(){},fail(){});
/*doSomething()
.then(success(){},fail(){})
.then (function(){})
.catch ( function (error){});
*/
async function(){
    let result = await doSomething();
    console.log(result);
}