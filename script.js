const quiz = [
  { question: "Solve: 3x − 5 = 16", answer: "7" },
  { question: "Area of a square with side 5", answer: "25" },
  { question: "√81", answer: "9" },
  { question: "Sum of angles in a triangle", answer: "180" },
  { question: "Positive solution of x² = 4", answer: "2" },
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

const questionText = document.getElementById("questionText");
const answerInput = document.getElementById("answerInput");
const feedback = document.getElementById("feedback");
const progress = document.getElementById("progress");
const finalScore = document.getElementById("finalScore");
const checkBtn = document.getElementById("checkBtn");
const questionCounter = document.getElementById("questionCounter");

function loadQuestion() {
  const q = quiz[currentQuestion];
  questionText.textContent = q.question;
  answerInput.value = "";
  feedback.textContent = "";
  updateProgress();
  updateCounter();
}

function updateCounter() {
  questionCounter.textContent = `Question ${currentQuestion + 1} / ${quiz.length}`;
}

function updateProgress() {
  progress.style.width = (currentQuestion / quiz.length) * 100 + "%";
}

checkBtn.addEventListener("click", () => {
  const userAnswer = answerInput.value.trim();
  if (userAnswer === "") return;

  userAnswers.push(userAnswer);

  if (userAnswer === quiz[currentQuestion].answer) {
    score++;
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
  let resultsHTML = `<p>Final Score: ${score} / ${quiz.length}</p>`;
  resultsHTML += "<h3>Review:</h3>";
  quiz.forEach((q, i) => {
    const userAnswer = userAnswers[i];
    const correct = q.answer === userAnswer;
    resultsHTML += ` <div> <p><strong>Question ${i + 1}:</strong> ${q.question}</p> <p>Your answer: ${userAnswer || "No answer"}</p> <p>Correct answer: ${q.answer}</p> <p style="color:${correct ? "green" : "red"}"> ${correct ? "Correct" : "Incorrect"} </p> </div> <hr> `;
  });

  resultsHTML += `<button id="homeBtn">Home</button>`;
  finalScore.innerHTML = resultsHTML;

  // Show Go Home button
  document.getElementById("homeBtn").classList.remove("hidden");
}

loadQuestion();
