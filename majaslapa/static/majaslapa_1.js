function myFunction1() { 
  document.getElementById("one").innerHTML = "Hello JavaScript!";
}
function myFunction2() {
  document.getElementById("two").style.fontSize = "25px";
  document.getElementById("two").style.color = "red";
  document.getElementById("two").style.backgroundColor = "yellow";
}
function myFunction3() {
  document.getElementById("three").innerHTML = "Paragraph changed.";
  document.getElementById("three_1").innerHTML = "Changed.";
  document.getElementById("three_2").innerHTML = "Changed.";
}

let a = false;

function setTrue() {
  a = true;
}
function setFalse() {
  a = false;
}
if (a === true) {
  console.log("a is true");
}

function myFunction_4() {
  var x = document.getElementById("frm1");
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value + "<br>";
  }
  document.getElementById("demo").innerHTML = text;
}

let x = 5;
let y = 6;
let z = x + y;

//sending info to python...hopefully
//const data = {
  //vards: "Laura",
  //lietotajvards: "Laurina",
  //parole: "123a",
  //e_pasts: "Laura_Ozola@gmail.com"};

document.getElementById("form").onsubmit = async (e) => {
  e.preventDefault();

  const vards = document.getElementById("vards");
  const lietotajvards = document.getElementById("lietotajvards");
  const parole = document.getElementById("parole");
  const e_pasts = document.getElementById("e_pasts");

  const response = await fetch("/register", {method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      vards: vards.value,
      lietotajvards: lietotajvards.value,
      parole: parole.value,
      e_pasts: e_pasts.value
    })});
  const result = await response.json();

if (response.ok) {
  alert("Registration successful!");
} else {
  alert(result.error);
}
}

console.log("Submitting form");
