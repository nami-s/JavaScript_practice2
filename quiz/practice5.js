'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');

  const quizSet = shuffle([
    {q: '幼い頃に天然痘により右目を失明し隻眼となり「独眼竜」の異名を持つ、仙台藩の初代藩主となった武将は？', c: ['伊達政宗', '石田三成', '前田慶次']},
    {q: '25000人もの大軍を率いて京都に進出する途中、奇襲により桶狭間の戦いで織田信長に敗れた武将は？', c: ['今川義元', '真田幸村', '毛利元就']},
    {q: '5度行われた川中島の戦いで武田信玄と戦った、越後の戦国武将は？', c: ['上杉謙信', '北条氏康', '三好長慶']},
    {q: '信長への奉公ぶりが賞賛された逸話が多く残る、15歳から信長に仕え小姓となり、寵愛された武将は？', c: ['森蘭丸', '支倉常長', '加藤清正']}
  ]);

  let countNum = 0;
  let isAnswered;
  let score = 0;

  function shuffle(arr){
    for(let i = arr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  function checkAnswer(li){
    if(isAnswered){
      return;
    }
    isAnswered = true;
    if(li.textContent === quizSet[countNum].c[0]){
      li.classList.add('correct');
      score++;
    } else{
      li.classList.add('wrong');
    }

    btn.classList.remove('disabled');
  }

  function setQuiz(){
    isAnswered = false;
    question.textContent = quizSet[countNum].q;

    while(choices.firstChild){
      choices.removeChild(choices.firstChild);
    }

    const shuffledChoices = shuffle([...quizSet[countNum].c]);
    shuffledChoices.forEach(choice =>{
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', ()=>{
        checkAnswer(li);
      });
      choices.appendChild(li);
    });

    if(countNum === quizSet.length - 1){
      btn.textContent = 'Show Score';
    }
  }

  setQuiz();

  btn.addEventListener('click', ()=>{
    if(btn.classList.contains('disabled')){
      return;
    }
    btn.classList.add('disabled');

    if(countNum === quizSet.length -1){
      result.classList.remove('hidden');
      scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`
    } else{
      countNum++;
      setQuiz();
    }
  });
}