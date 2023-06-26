const quizData = [
    {
      question: 'What is the capital of France?',
      choices: ['Paris', 'Madrid', 'Berlin', 'London'],
      answer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      choices: ['Venus', 'Jupiter', 'Mars', 'Saturn'],
      answer: 'Mars',
    },
    {
        question: 'Which is asur?',
        choices: ['love', 'vilian', 'Mon', 'Sat'],
        answer: 'vilian',
      },
      {
        question: 'Which planet is small?',
        choices: ['mercury', 'Jupiter', 'pluto', 'Saturn'],
        answer: 'pluto',
      },
    // Add more quiz questions and answers here...
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const choicesElement = document.getElementById('choices');
  const submitButton = document.getElementById('submitBtn');
  const resultElement = document.getElementById('result');
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
  
    questionElement.innerText = currentQuizData.question;
    choicesElement.innerHTML = '';
  
    currentQuizData.choices.forEach((choice) => {
      const button = document.createElement('button');
      button.innerText = choice;
      button.classList.add('choice');
      choicesElement.appendChild(button);
    });
  }
  
  function checkAnswer(answer) {
    const currentQuizData = quizData[currentQuestion];
  
    if (answer === currentQuizData.answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionElement.style.display = 'none';
    choicesElement.style.display = 'none';
    submitButton.style.display = 'none';
  
    resultElement.innerText = `You scored ${score} out of ${quizData.length}!`;
    resultElement.style.display = 'block';
  }
  
  loadQuestion();
  
  choicesElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('choice')) {
      const selectedAnswer = event.target.innerText;
      checkAnswer(selectedAnswer);
    }
  });
  