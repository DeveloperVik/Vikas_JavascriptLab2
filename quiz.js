

const Questions = [{
    question: "What is full form of NASA",
    answers: [{ text: "New Administration and Space New Aeronautics", correct: false },
        { text: "New Aeronautics and Space Administration", correct: false },
        { text: "National Aeronautics and Space Authority", correct: true },
        { text: "National Aeronautics and Space Administration", correct: false }
    ]

},
{
    question: "What is the capital of Thailand?",
    answers: [{ text: "Lampang", correct: false },
        { text: "phuket", correct: false },
        { text: "Ayutthaya", correct: false },
        { text: "Bangkok", correct: true }
    ]

},
{
    question: "What is 4*12",
    answers: [{ text: "56", correct: false },
        { text: "44", correct: false },
        { text: "48", correct: true },
        { text: "52", correct: false }
    ]

},
{
    question: "Who won fifa 2018",
    answers: [{ text: "France", correct: true },
        { text: "Spain", correct: false },
        { text: "Brazil", correct: false },
        { text: "Croatia", correct: false }
    ]

}
]

let currentQuestion;
let correctAnswer = 0;
let incorrectAnswer = 0;
let selected;
let isAnswerSelected = false;

function startQuiz()
{
    currentQuestion = 0;
    nextQuestion();
    
}

function nextQuestion()
{
    showQuestion(Questions[currentQuestion]);
}

function checkAnswer()
{
    if(isAnswerSelected == false)
    {
        alert("Please select a answer first")
    }
    else 
    {
        currentQuestion = currentQuestion + 1;
        if(selected == "true")
        {
            correctAnswer = correctAnswer + 1;
        }
        else
        {  
            incorrectAnswer = incorrectAnswer + 1;
        }
        isAnswerSelected = false;

        if (currentQuestion < Questions.length)
        {
            nextQuestion();
        }
        else
        {
            alert("Quiz Over");
            document.getElementById('correctAnswer').innerText = "Correct Answer: " + correctAnswer;
            document.getElementById('incorrectAnswer').innerText = "Incorrect Answer: "+incorrectAnswer;
            document.getElementById('correctAnswer').style.backgroundColor = "red";
            document.getElementById('incorrectAnswer').style.backgroundColor = "green";
            stopGame();
        }
    }
    
}

function showQuestion(Question)
{

    document.getElementById('number').innerText = "Question: "+(currentQuestion+ 1)+ " of "+Questions.length;
    document.getElementById('question').innerText= Question.question;
    
    const op1 = document.getElementById('option1');
    const op2 = document.getElementById('option2');
    const op3 = document.getElementById('option3');
    const op4 = document.getElementById('option4');

    op1.innerText = Question.answers[0].text;
    op2.innerText = Question.answers[1].text;
    op3.innerText = Question.answers[2].text;
    op4.innerText = Question.answers[3].text;
  

    op1.value = Question.answers[0].correct;
    op2.value = Question.answers[1].correct;
    op3.value = Question.answers[2].correct;
    op4.value = Question.answers[3].correct;

    op1.style.backgroundColor = "black";
    op2.style.backgroundColor = "black";
    op3.style.backgroundColor = "black";
    op4.style.backgroundColor = "black";


    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "blue";
        op2.style.backgroundColor = "black";
        op3.style.backgroundColor = "black";
        op4.style.backgroundColor = "black";
        selected = op1.value;
        isAnswerSelected = true;
    
    })
  
  
    op2.addEventListener("click", () => {
        op2.style.backgroundColor = "blue";
        op1.style.backgroundColor = "black";
        op3.style.backgroundColor = "black";
        op4.style.backgroundColor = "black";
        selected = op2.value;
        isAnswerSelected = true;
      
    })
  
   
    op3.addEventListener("click", () => {
        op3.style.backgroundColor = "blue";
        selected = op3.value;
        op1.style.backgroundColor = "black";
        op2.style.backgroundColor = "black";
        op4.style.backgroundColor = "black";
        isAnswerSelected = true;
        
    })
  
   
    op4.addEventListener("click", () => {
        op4.style.backgroundColor = "blue";
        op1.style.backgroundColor = "black";
        op2.style.backgroundColor = "black";
        op3.style.backgroundColor = "black";
        selected = op4.value;
        isAnswerSelected = true;
    })
}


function stopGame()
{
    document.getElementById("submitBtn").disabled = true;
}







  
