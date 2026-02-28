function checkQuiz() {
  const questions = document.querySelectorAll(".question");
  let score = 0;

  questions.forEach((question, index) => {
    const correctAnswer = question.dataset.correct;
    const selected = question.querySelector("input[type='radio']:checked");
    const resultDiv = question.querySelector(".result");

    if (!selected) {
      resultDiv.textContent = "Please select an answer.";
      resultDiv.style.color = "orange";
      return;
    }

    if (selected.value === correctAnswer) {
      resultDiv.textContent = "Correct!";
      resultDiv.style.color = "green";
      score++;
    } else {
      resultDiv.textContent = "Incorrect.";
      resultDiv.style.color = "red";
    }
  });

  document.getElementById("score").textContent =
    "Score: " + score + " / " + questions.length;
}