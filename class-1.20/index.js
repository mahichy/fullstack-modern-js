

var msg = document.querySelector("#message");
var btn = document.querySelector("#interact");
var result = document.querySelector("#answer");

btn.addEventListener("click", function() {
  let c = msg.value.toLowerCase();
  let reply = "";
  if (c.match("hello")) {
    reply = "hello there!";
  } else if (c.match("sing for me")) {
    reply = "Amai banglai gan gai";
  } else if (c.match("name")) {
    reply = "my name is mahi chowdhury";
  } else {
    reply = "buji nai";
  }
  result.innerHTML = reply;
  var kotha = new SpeechSynthesisUtterance(reply);
  window.speechSynthesis.speak(kotha);
});
