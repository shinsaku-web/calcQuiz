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
  return {
    first: firstNumber,
    second: secondNumber,
    sign: calcSign,
  };
}

const question = createQuestion();
console.log(question);
const $question = document.getElementById("question");
console.log($question.children[0]);
console.log($question.children[1]);
console.log($question.children[2]);

$question.children[0].textContent = question.first;
$question.children[1].textContent = question.sign;
$question.children[2].textContent = question.second;
