const quiz = [
  { question: "Solve: 3x − 5 = 16", answer: "7" },
  { question: "Area of a square with side 5", answer: "25" },
  { question: "√81", answer: "9" },
  { question: "Sum of angles in a triangle", answer: "180" },
  { question: "Positive solution of x² = 4", answer: "2" }
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("questionText");
const answerInput = document.getElementById("answerInput");
const feedback = document.getElementById("feedback");
const progress = document.getElementById("progress");
const finalScore = document.getElementById("finalScore");
const checkBtn = document.getElementById("checkBtn");

function loadQuestion() {
  const q = quiz[currentQuestion];
  questionText.textContent = q.question;
  answerInput.value = "";
  feedback.textContent = "";
  updateProgress();
}

function updateProgress() {
  progress.style.width = ((currentQuestion) / quiz.length) * 100 + "%";
}

checkBtn.addEventListener("click", () => {
  const userAnswer = answerInput.value.trim();

  if (userAnswer === "") return;

  if (userAnswer === quiz[currentQuestion].answer) {
    feedback.textContent = "Correct!";
    feedback.className = "correct";
    score++;
  } else {
    feedback.textContent = "Incorrect!";
    feedback.className = "incorrect";
  }

  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion < quiz.length) {
      loadQuestion();
    } else {
      showScore();
    }
  }, 800);
});

function showScore() {
  document.querySelector(".card").style.display = "none";
  progress.style.width = "100%";
  finalScore.classList.remove("hidden");
  finalScore.textContent = `Final Score: ${score} / ${quiz.length}`;
}

loadQuestion();