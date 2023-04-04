
//Question bank
var questionBank= [
    {
        question : 'Javascript is an _______ language? ',

        option : ['Object-Oriented','Object-Based','Procedural','None of the above'],
        answer : 'Object-Oriented'
    },
    {
        question : 'Which of the following keywords is used to define a variable in Javascript?',
        option : ['var','let','Both A and B','None of the above'],
        answer : 'Both A and B'
    },
    {
        question : 'Which of the following methods is used to access HTML elements using Javascript?',
        option : ['getElementbyId','getElementByClassName','Both A and B','None of the above'],
        answer : 'Both A and B'
    },
    {
        question : 'Upon encountering empty statements, what does the Javascript Interpreter do?',
        option : ['Throw an error','Ignores the statements','Gives a warning','None of the above'],
        answer : 'Ignores the statements'
    },
    {
        question : 'Which of the following methods can be used to display data in some form using Javascript?',
        option : ['document.write()','console.log()','window.alert()','All of the above'],
        answer : 'All of the above'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();
