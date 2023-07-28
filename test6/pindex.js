const quizData = [
{
    question: "what is Ngawang favrouite colour" ,
    choices:['blue' , 'green' , 'yellow' , 'black'] ,
    answer:'blue'
} ,
{
    question:"what is Ngawang favrouite sport" ,
    choices:['baseball' , 'basketball' , 'football ' , 'runing'],
    answer:'basketball'
} ,
{
    question:"what anime is Ngawang most favrouite" ,
    choices:['one peice' , 'naruto' , 'attack on titan ' , 'Bleach'],
    answer:'naruto'
},
{
    question:"which football team does Ngawang supports " ,
    choices:['Japan', 'Korea' , 'Spain ' ,'Netherlands'],
    answer:'Netherlands'
},
{
    question:"when is Ngawang birthday" ,
    choices:['23 oct' , '24 oct' , '25 oct' , '26 oct'],
    answer:'23 oct'
}
]


let currentQuestion = 0;
let score = 0 ;

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const submitButton = document.getElementById('submitBtn');
const resultElement = document.getElementById('result');



function loadQuestion(){
    const currentQuizData = quizData[currentQuestion];

    questionElement.innerText = currentQuizData.question;
    choicesElement.innerHTML = '' ;

    currentQuizData.choices.forEach((choice) => {
      const button = document.createElement('button');
      button.innerText = choice;
      choicesElement.appendChild(button)
    });
}


function checkAnswer(answer){

    const currentQuizData = quizData[currentQuestion] ;

    if(answer === currentQuizData.answer){
        score++;
    }

    currentQuestion++;

  if(currentQuestion < quizData.length){
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult(){
    questionElement.style.display = 'none';
    choicesElement.style.display = 'none';
    submitButton.style.display = 'none';
 
    resultElement.innerText = `your scored ${score} out of ${quizData.length}` ;
    resultElement.style.display = 'block';
}



loadQuestion();

choicesElement.addEventListener('click' ,(event) => {
    const selectedAnswer = event.target.innerText;
   checkAnswer(selectedAnswer);
  })









