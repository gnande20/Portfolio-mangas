// Quiz interactif
const quizData = [
  {
    question: "Quel langage est utilisé pour le style des pages web ?",
    answers: ["HTML", "CSS", "JavaScript", "Python"],
    correct: "CSS"
  },
  {
    question: "Quel langage ajoute de l’interactivité à un site web ?",
    answers: ["CSS", "Python", "JavaScript", "HTML"],
    correct: "JavaScript"
  },
  {
    question: "Quelle balise HTML définit un paragraphe ?",
    answers: ["<div>", "<p>", "<h1>", "<span>"],
    correct: "<p>"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  // Générer les boutons
  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.classList.add("btn"); // ajoute style bouton
    btn.addEventListener("click", () => selectAnswer(answer, btn));
    answersEl.appendChild(btn);
  });
}

function selectAnswer(answer, btn) {
  const correctAnswer = quizData[currentQuestion].correct;
  if (answer === correctAnswer) {
    btn.style.background = "#4caf50"; // vert si correct
    score++;
  } else {
    btn.style.background = "#f44336"; // rouge si incorrect
  }
  // Désactiver tous les boutons
  Array.from(answersEl.children).forEach(b => b.disabled = true);
  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if(currentQuestion < quizData.length){
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    questionEl.textContent = "Quiz terminé !";
    answersEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.textContent = `Ton score : ${score} / ${quizData.length}`;
  }
});

// Charger la première question au chargement
window.addEventListener("load", loadQuestion);
