'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');

  const quizSet = [
    {q: 'What is this?', c: ['A', 'B', 'C']},
    {q: 'What is that?', c: ['1', '2', '3']},
    {q: 'What is A?', c: ['a', 'b', 'c']}
  ];

  let countNum = 0;
  let isAnswered;

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
    countNum++;
    setQuiz();
  });

}