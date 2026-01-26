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
  document.getElementById("three_1").innerHTML = "Paragraph changed.";
}

let a = false;

function boolean(){
    a = true;
}
function boolean_false(){
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
const data = {
  vards: "Elza",
  lietotajvards: "Elza.B",
  parole: "123e",
  e_pasts: "Elza.B@gmail.com"
};

print(data)

fetch("http://127.0.0.1:5000/data", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
.then(res => res.json())
.then(result => {
  console.log("Server response:", result);
});
