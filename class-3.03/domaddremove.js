var container = document.querySelector(`.a`);
undefined
container
<div class=​"a">​…​</div>​
container.innerHTML 
"
      <input type="text" class="textinput">
    "
    

container.innerHTML=container.innerHTML+"<b>Hello world</b>";
"
      <input type="text" class="textinput">
    <b>Hello world</b>"
container.querySelector(`b`);
<b>​Hello world​</b>​
container.innerHTML="";

""




newEl = document.createElement('div');
<div>​</div>​
newEl.style.color="#f00";
"#f00"
newEl.innerHTML="hello world";
"hello world"
document.body.appendChild(newEl)
<div style=​"color:​ rgb(255, 0, 0)​;​">​hello world​</div>​
//

document.querySelector('.a').appendChild(newEl);
<div style=​"color:​ rgb(255, 0, 0)​;​">​hello world​</div>​