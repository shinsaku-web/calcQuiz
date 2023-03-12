import "./style.scss";

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
  }
});
