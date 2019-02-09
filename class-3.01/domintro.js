document
#document
document.children
HTMLCollection [html]
document.children[0]
<html lang=​"en">​<head>​…​</head>​<body>​…​</body>​</html>​
document.children[0].children
HTMLCollection(2) [head, body]
document.children[0].children[1]
<body>​<div>​…​</div>​<div>​
        another div
    ​</div>​</body>​
document.children[0].children[0]
<head>​…​</head>​
document.children[0].children[1]
<body>​…​</body>​
document.children[0].children[1].children[0]
<div>​…​</div>​
document.children[0].children[0].children[0]
<meta charset=​"UTF-8">​
document.children[0].children[1]
<body>​…​</body>​
document.children[0]
<html lang=​"en">​<head>​…​</head>​<body>​<div>​…​</div>​<div>​
        another div
    ​</div>​</body>​</html>​
document.children[0].children[1].children[1]
<div>​
        another div
    ​</div>​
document.children[0].children[1].children[2]
undefined
document.children[0].children[1].children[0]
<div>​<p>​"
            Hello "<b>​World​</b>​</p>​<span>​
            some other info
        ​</span>​</div>​
document.children[0].children[1].children[0]
<div>​<p>​"
            Hello "<b>​World​</b>​</p>​<span>​
            some other info
        ​</span>​</div>​
VM1065:2 Uncaught SyntaxError: Invalid or unexpected token

document.getElementById("mahi")
<p id=​"mahi">​…​</p>​

document.querySelector(`#mahi`)
<p id=​"mahi">​…​</p>​
document.querySelector(`div`)
<div>​…​</div>​
document.querySelector(`mahi`)
null
document.querySelector(`span`)
<span>​
            some other info
        ​</span>​
document.querySelectorAll(`div`)
NodeList(2) [div, div]

var myParagraph = document.querySelector(`#mahi`)
undefined
myParagraph
<p id=​"mahi">​…​</p>​
myParagraph.style
CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}
myParagraph.style.backgroundColor="#f00";
"#f00"