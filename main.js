import "./style.scss";

function createQuestion() {
  // 問題作成
  const firstNumber = 100;
  const secondNumber = 100;
  const calcSign = "+";
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
