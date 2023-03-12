import "./style.scss";

const $countDown = document.getElementById("countDown");
const TIME_LIMIT = 5;
const limit = Date.now() + TIME_LIMIT * 1000;

const timer = setInterval(() => {
  const rest = limit - Date.now();
  if (rest > 0) {
    $countDown.textContent = `${("0" + Math.floor(rest / 1000)).slice(-2)}:${(
      "0" + Math.floor((rest % 1000) / 10)
    ).slice(-2)}`;
  } else {
    clearInterval(timer);
    location.reload();
  }
}, 10);

function createQuestion() {
  const CALC_SIGNS = {
    plus: "+",
    minus: "-",
    multiply: "×",
    divide: "÷",
  };
  const calcSignList = Object.values(CALC_SIGNS);
  // 問題作成
  const firstNumber = Math.ceil(Math.random() * 10);
  const secondNumber = Math.ceil(Math.random() * 10);
  const calcSign =
    calcSignList[Math.floor(Math.random() * calcSignList.length)];

  const getResult = () => {
    if (calcSign === CALC_SIGNS.plus) {
      return firstNumber + secondNumber;
    }
    if (calcSign === CALC_SIGNS.minus) {
      return firstNumber - secondNumber;
    }
    if (calcSign === CALC_SIGNS.multiply) {
      return firstNumber * secondNumber;
    }
    if (calcSign === CALC_SIGNS.divide) {
      return firstNumber / secondNumber;
    }
  };
  const result = getResult();
  return {
    first: firstNumber,
    second: secondNumber,
    sign: calcSign,
    answer: result,
  };
}

const question = createQuestion();
const $question = document.getElementById("question");

$question.children[0].textContent = question.first;
$question.children[1].textContent = question.sign;
$question.children[2].textContent = question.second;

const $answer = document.getElementById("typeNumber");
const $correct = document.getElementById("resultCorrect");
const $incorrect = document.getElementById("resultIncorrect");
$answer.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const inputAnswer = e.target.value;
    $question.style.display = "none";
    if (String(question.answer) === inputAnswer) {
      $correct.style.display = "block";
    } else {
      $incorrect.style.display = "block";
    }
    $answer.style.display = "none";
    $answer.value = "";
    setTimeout(() => {
      clearInterval(timer);
      location.reload();
    }, 1000);
  }
});

const $startButton = document.getElementById("startButton");
const $stopButton = document.getElementById("stopButton");
$startButton.addEventListener("click", () => {
  location.reload();
});

$stopButton.addEventListener("click", () => {
  clearInterval(timer);
  $stopButton.style.display = "none";
  $startButton.style.display = "block";
});
