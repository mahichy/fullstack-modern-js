document.body.innerHTML="";
""
for (let i =0;i<10;i++){
let newEl = document.createElement(`div`);
newEl.innerHTML=`element ${i}`;
document.body.appendChild(newEl);  






}
<div>​element 9​</div>​
var divCol = document.querySelector(`div`)
undefined
divCol
<div>​element 0​</div>​
var divCol = document.querySelectorAll(`div`)
undefined
divCol
NodeList(10) [div, div, div, div, div, div, div, div, div, div]
divCol.forEach(e=>e.style.color="#f00");
undefined
var divArr = Array.prototype.slice.call(divCol);
undefined
divArr
(10) [div, div, div, div, div, div, div, div, div, div]
var divArr = Array.prototype.map.call(divCol,(e)=>console.log(e));
VM176:1 <div style=​"color:​ rgb(255, 0, 0)​;​">​element 0​</div>​
VM176:1 <div style=​"color:​ rgb(255, 0, 0)​;​">​element 1​</div>​
VM176:1 <div style=​"color:​ rgb(255, 0, 0)​;​">​element 2​</div>​
VM176:1 <div style=​"color:​ rgb(255, 0, 0)​;​">​element 3​</div>​
VM176:1 <div style=​"color:​ rgb(255, 0, 0)​;​">​element 4​</div>​
VM176:1 <div style=​"color:​ rgb(255, 0, 0)​;​">​element 5​</div>​
VM176:1 <div style=​"color:​ rgb(255, 0, 0)​;​">​element 6​</div>​
VM176:1 <div style=​"color:​ rgb(255, 0, 0)​;​">​element 7​</div>​
VM176:1 <div style=​"color:​ rgb(255, 0, 0)​;​">​element 8​</div>​
VM176:1 <div style=​"color:​ rgb(255, 0, 0)​;​">​element 9​</div>​
undefined
[].map.call(divCol,e=>console.log(e))