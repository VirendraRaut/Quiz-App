const questions = [
  {
    question: "Which is largest animal in the world?",
    answers: [
      { text: "Shark", correct: "false" },
      { text: "Blue Whale", correct: "true" },
      { text: "Elephant", correct: "false" },
      { text: "Giraffe", correct: "false" },
    ],
  },
  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Beijing", correct: "false" },
      { text: "Seoul", correct: "false" },
      { text: "Tokyo", correct: "true" },
      { text: "Bangkok", correct: "false" },
    ],
  },
  {
    question: "Which planet is closest to the Sun?",
    answers: [
      { text: "Earth", correct: "false" },
      { text: "Venus", correct: "false" },
      { text: "Mercury", correct: "true" },
      { text: "Mars", correct: "false" },
    ],
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Diamond", correct: "true" },
      { text: "Iron", correct: "false" },
      { text: "Gold", correct: "false" },
      { text: "Graphite", correct: "false" },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Leonardo da Vinci", correct: "true" },
      { text: "Pablo Picasso", correct: "false" },
      { text: "Vincent van Gogh", correct: "false" },
      { text: "Claude Monet", correct: "false" },
    ],
  },
  {
    question: "Which country is the largest by land area?",
    answers: [
      { text: "United States", correct: "false" },
      { text: "China", correct: "false" },
      { text: "India", correct: "false" },
      { text: "Russia", correct: "true" },
    ],
  },
  {
    question: "How many hearts does an octopus have?",
    answers: [
      { text: "1", correct: "false" },
      { text: "2", correct: "false" },
      { text: "3", correct: "true" },
      { text: "4", correct: "false" },
    ],
  },

  {
    question: 'Which planet is known as the "Red Planet"?',
    answers: [
      { text: "Venus", correct: "false" },
      { text: "Uranus", correct: "false" },
      { text: "Jupiter", correct: "false" },
      { text: "Mars", correct: "true" },
    ],
  },
  {
    question: 'Which city is known as the "Tea Capital of India"?',
    answers: [
      { text: "Guwahati", correct: "false" },
      { text: "Shiliong", correct: "false" },
      { text: "Darjeeling", correct: "true" },
      { text: "Munnar", correct: "false" },
    ],
  },
  {
    question: "In Which year did India win their first T20 Cricket World Cup?",
    answers: [
      { text: "2007", correct: "true" },
      { text: "2011", correct: "false" },
      { text: "1983", correct: "false" },
      { text: "2024", correct: "false" },
    ],
  },
];

const queElem = document.getElementById("question");
const ansBtns = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQueIndex = 0;
let score = 0;

function startQuiz() {
  currentQueIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestions();
}

function showQuestions() {
  resetState();
  let currentQue = questions[currentQueIndex];
  let queNo = currentQueIndex + 1;
  queElem.innerHTML = queNo + ". " + currentQue.question;

  // Giving index before the questions
  currentQue.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    ansBtns.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAns);
  });
}

// It will reset the app
function resetState() {
  nextBtn.style.display = "none";

  while (ansBtns.firstChild) {
    ansBtns.removeChild(ansBtns.firstChild);
  }
}

// When Answer is click it will show whether it is right or wrong
function selectAns(e) {
  const selectedbtn = e.target;
  const isCorrect = selectedbtn.dataset.correct === "true";

  if (isCorrect) {
    selectedbtn.classList.add("correct");
    score++;
  } else {
    selectedbtn.classList.add("incorrect");
  }

  Array.from(ansBtns.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

function showScore(){
 resetState();
 queElem.innerHTML = `You have scored ${score} out of ${questions.length}!`;
 nextBtn.innerHTML = "Play Again";
 nextBtn.style.display = "block";
}

function handleNextBtn() {
  currentQueIndex++;
  if (currentQueIndex < questions.length) {
    showQuestions();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", (nextQue) => {
  if (currentQueIndex < questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});

showQuestions();
