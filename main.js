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
