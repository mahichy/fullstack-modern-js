document.querySelector(`p>b`);
<b>​World​</b>​
var boldPart = document.querySelector(`p>b`);
undefined
boldPart
<b>​World​</b>​
boldPart.addEventListener(`click`,e=>{console.log(e)})
undefined

......
var t = document.querySelector(`.textinput`);
undefined
t
<input type=​"text" class=​"textinput">​
t.addEventListener(`keyup`,e=>{console.log(e)})
undefined
VM368:1 KeyboardEvent {isTrusted: true, key: "a", code: "KeyA", location: 0, ctrlKey: false, …}
VM368:1 KeyboardEvent {isTrusted: true, key: "s", code: "KeyS", location: 0, ctrlKey: false, …}
VM368:1 KeyboardEvent {isTrusted: true, key: "d", code: "KeyD", location: 0, ctrlKey: false, …}
t.addEventListener(`keyup`,e=>{console.log(t.value)})
undefined
VM368:1 KeyboardEvent {isTrusted: true, key: "a", code: "KeyA", location: 0, ctrlKey: false, …}
VM434:1 a
VM368:1 KeyboardEvent {isTrusted: true, key: "s", code: "KeyS", location: 0, ctrlKey: false, …}
VM434:1 as
VM368:1 KeyboardEvent {isTrusted: true, key: "d", code: "KeyD", location: 0, ctrlKey: false, …}
VM434:1 asd