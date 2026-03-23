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

document.getElementById("registresanas").onsubmit = async (e) => {
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
  vards.value = "";
  lietotajvards.value = "";
  parole.value = "";
  e_pasts.value = "";
} else {
  alert(result.error);
}
}

console.log("Submitting form");


document.getElementById("log_in").onsubmit = async (e) => {
  e.preventDefault();
  const lietotajvards_log = document.getElementById("lietotajvards_log");
  const parole_log = document.getElementById("parole_log");

  
  const response = await fetch("/log_in", {method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      lietotajvards: lietotajvards_log.value,
      parole: parole_log.value,
    })});
  const result = await response.json();

  if (response.ok) {
    alert(lietotajvards_log.value + " login successful!");
    lietotajvards_log.value = "";
    parole_log.value = "";
  } else {
    alert(result.error);
  }
}
  console.log("Submitting form");

async function checkHeart() {

  try {
    const response = await fetch("/are_u_loged_in", {
      method: "GET"
    });

    if (!response.ok) {
      // User not logged in
      alert ("You need to log in to see the heart ❤️");
      return;
    }

    const result = await response.json();

    if (result.ok) {
      // Logged in → show the heart alert
      alert("❤️");
    } else {
      alert ("You need to log in to see the heart ❤️");
    }

  } catch (err) {
    console.error(err);
    alert( "Error checking login");
  }
}

document.getElementById("logoutBtn").addEventListener("click", async () => {
  try {
    const response = await fetch("/log_out", {
      method: "POST"
    });

    const result = await response.json();

    if (result.ok) {
      alert("Logged out successfully!");
    } else {
      alert("Logout failed");
    }

  } catch (err) {
    console.error(err);
    alert("An error occurred");
  }
});

document.getElementById("change_password").onsubmit = async (e) => {
  e.preventDefault();
  const old_password = document.getElementById("parole_old");
  const new_password = document.getElementById("parole_new");

  
  const response = await fetch("/change_password", {method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      old_password: old_password.value,
      new_password: new_password.value,
    })});
  const result = await response.json();

  if (response.ok) {
    alert("password change successful!");
    old_password.value = "";
    new_password.value = "";
  } else {
    alert(result.error);
  }
}
  console.log("Submitting form");

document.getElementById("rezultats_form").onsubmit = async (e) => {
  e.preventDefault();
  const rezultats = document.getElementById("rezultats");

  const response = await fetch("/send_result", {method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      rezultats: rezultats.value
    })});
  const results = await response.json();

  if (response.ok) {
    alert("rezultats ir ievadits!");
  } else {
    alert(results.error);
  }}

const paraditBtn = document.getElementById("paradit_rez");

if (paraditBtn) {
  paraditBtn.addEventListener("click", paradit_rez);
}
async function paradit_rez() {

  try {
    const response = await fetch("/paradit_rez", {
      method: "GET"
    });

    if (!response.ok) {
      // User not logged in
      alert ("Jūs neesat pieslēdzies");
      return;
    }

    const result = await response.json();

    if (result.ok) {
      alert("Your results: " + JSON.stringify(result.rezultati));
      let data = result.rezultati;
      let text = "";

      for (let i = 0; i < data.length; i++) {
        text += data[i][0] + "% <br>";
      }

document.getElementById("paradit_button").innerHTML = text;
    } else {
      alert ("Jūs neesat pieslēdzies.");
    }

  } catch (err) {
    console.error(err);
    alert( "Error checking login");
  }
}





const bones = [
  {name: "Pieres kauls", latin: "Os frontale", x: 270, y: 45},
  {name: "Paura kauls", latin: "Os parietale", x: 270, y: 15},
  {name: "Deniņu kauls", latin: "Os temporale", x: 240, y: 70},
  {name: "Lemesis", latin: "Vomer", x: 270, y: 75},
  {name: "Atslēgas kauls", latin: "Clavicula", x: 230, y: 140},
  {name: "Lāpstiņa", latin: "Scapula", x: 200, y: 160},
  {name: "Krūšu kauls", latin: "Sternum", x: 273, y: 165},
  {name: "Ribas", latin: "Costa", x: 320, y: 200},
  {name: "Krustu kauls", latin: "Os sacrum", x: 290, y: 340},
  {name: "Augšdelma kauls", latin: "Humerus", x: 180, y: 210},
  {name: "Spieķkauls", latin: "Radius", x: 160, y: 320},
  {name: "Elkoņa kauls", latin: "Ulna", x: 160, y: 290},
  {name: "Rokas pirkstu falangas", latin: "Phalanges manus", x: 140, y: 440},
  {name: "Gūžas kauls", latin: "Os coxae", x: 220, y: 390},
  {name: "Augšstilba kauls", latin: "Femur", x: 215, y: 460},
  {name: "Ceļa kauls", latin: "Patella", x: 232, y: 565},
  {name: "Lielais lielakauls", latin: "Tibia", x: 295, y: 650},
  {name: "Mazais lielakauls", latin: "Fibula", x: 315, y: 670}
];

let currentBoneIndex = 0;
let score = 0;
let studyMode = false;

const startBtn = document.getElementById('start-btn');
const studyBtn = document.getElementById('study-btn');
const endStudyBtn = document.getElementById('end-study-btn');
const exitBtn = document.getElementById('exit-btn');
const boneNameDiv = document.getElementById('bone-name');
const gameContainer = document.getElementById('game-container');
const scoreDiv = document.getElementById('score');

// Shuffle function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startGame() {
  studyMode = false;
  shuffleArray(bones);
  currentBoneIndex = 0;
  score = 0;
  scoreDiv.textContent = '';
  startBtn.style.display = 'none';
  studyBtn.style.display = 'none';
  endStudyBtn.style.display = 'none';
  exitBtn.style.display = 'inline-block';
  showBone();
}

function showBone() {
  const bone = bones[currentBoneIndex];
  boneNameDiv.textContent = `${bone.name} — ${bone.latin}`;

  gameContainer.querySelectorAll('.dot').forEach(d => d.remove());

  bones.forEach((bone, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.left = bone.x + 'px';
    dot.style.top = bone.y + 'px';
    dot.addEventListener('click', () => checkAnswer(dot, index));
    gameContainer.appendChild(dot);
  });
}

function checkAnswer(dot, index) {
  if (studyMode) return;

  const correctIndex = currentBoneIndex;
  if (index === correctIndex) {
    dot.classList.add('correct');
    score++;
  } else {
    dot.classList.add('wrong');
    gameContainer.querySelectorAll('.dot')[correctIndex].classList.add('correct');
  }

  setTimeout(() => {
    currentBoneIndex++;
    if (currentBoneIndex < bones.length) {
      showBone();
    } else {
      showScore();
    }
  }, 800);
}

function showScore() {
  boneNameDiv.textContent = '';
  scoreDiv.textContent = `Tavs rezultāts: ${score}/${bones.length} (${Math.round(score/bones.length*100)}%)`;
  startBtn.textContent = "Sākt spēli no sākuma";
  startBtn.style.display = 'inline-block';
  studyBtn.style.display = 'inline-block';
  exitBtn.style.display = 'none';
}

// STUDY MODE
function startStudy() {
  studyMode = true;
  boneNameDiv.textContent = "Nospied uz punkta, lai redzētu kaulu";
  scoreDiv.textContent = '';
  startBtn.style.display = 'none';
  studyBtn.style.display = 'none';
  endStudyBtn.style.display = 'inline-block';
  exitBtn.style.display = 'none';

  gameContainer.querySelectorAll('.dot').forEach(d => d.remove());

  bones.forEach((bone) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.left = bone.x + 'px';
    dot.style.top = bone.y + 'px';

    dot.addEventListener('click', () => {
      boneNameDiv.textContent = `${bone.name} — ${bone.latin}`;
    });

    gameContainer.appendChild(dot);
  });
}

function endStudy() {
  studyMode = false;
  resetToMenu();
}

// EXIT GAME
function exitGame() {
  studyMode = false;
  resetToMenu();
}

// RESET
function resetToMenu() {
  boneNameDiv.textContent = '';
  scoreDiv.textContent = '';
  gameContainer.querySelectorAll('.dot').forEach(d => d.remove());

  startBtn.style.display = 'inline-block';
  studyBtn.style.display = 'inline-block';
  endStudyBtn.style.display = 'none';
  exitBtn.style.display = 'none';
}

// EVENTS
startBtn.addEventListener('click', startGame);
studyBtn.addEventListener('click', startStudy);
endStudyBtn.addEventListener('click', endStudy);
exitBtn.addEventListener('click', exitGame);