const quizDB = [
    {
        question: "Q1:Which of the following is not a data type?",
        a:"Symbolic Data",
        b:"Alphanumeric Data",
        c:"Numeric Data",
        d:"Alphabetic Data",
        ans: "ans1"
    },

   {
        question: "Q2: Which of the following is not a basic data type in C language?",
        a:"float",    
        b:"int",
        c:"real ",
        d:"char",
        ans: "ans3"
    },
    
    {
        question: "Q3: The program written by the programmer in high level language is called _____________",
        a:"Object Program",
        b:"Source Program",
        c:"Assembled Program",
        d:"Compiled Program",
        ans: "ans2"
    },
    
    {
        question: "Q4: The structure or format of data is called ___________",
        a:"Syntax",
        b:"Semantics",
        c:"Struct",
        d:"Formatting",
        ans: "ans1"
    },

    {
        question: "Q5:  A _________ set of rules that governs data communication",
        a:"Protocols",
        b:"Standards",
        c:"RFCs",
        d:"Servers",
        ans: "ans1"
    },

  
];

const question = document.querySelector('.questions');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
 
const answers = document.querySelectorAll('.answer');

const result = document.querySelector('#result');


let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();


const getcheckedanswer = () => {
    let answer;

    answers.forEach((curAnsEle) => {
       if(curAnsEle.checked){
           answer = curAnsEle.id;
        }
        
    });
    return answer;


};

const deselectAll = () =>{
    answers.forEach((curAnsEle)=> curAnsEle.checked = false);
}

submit.addEventListener('click',()=>{
    const checkedanswer = getcheckedanswer();
    console.log(checkedanswer);

    if (checkedanswer ==quizDB[questionCount].ans){
        score ++;

    };
    questionCount++;
    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{

        result.innerHTML = `
        <h3> Your Score ${score}/${ quizDB.length} ✌👌  </h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        result.classList.remove('score');

    }

});





