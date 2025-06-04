const questions = [
    {
        question: "What does &lt;!DOCTYPE html&gt; do?",
        answers: [
            { text: 'Links CSS', correct: false },
            { text: 'Declares document type', correct: true },
            { text: 'Adds JavaScript', correct: false },
            { text: 'Creates a section', correct: false }
        ]
    },
    {
        question: "Which tag is used to insert an image?",
        answers: [
            { text: '<img>', correct: true },
            { text: '<image>', correct: false },
            { text: '<src>>', correct: false },
            { text: '<picture>', correct: false }
        ]
    },
    {
        question: "Which HTML element is used to define a table row?",
        answers: [
            { text: "<th>", correct: false },
            { text: "<td>", correct: false },
            { text: "<tr>", correct: true },
            { text: "<table>", correct: false }
        ]
    },
    {
        question: "How do you create a link that opens in a new tab?",
        answers: [
            { text: '<a href="url" target="_new">', correct: false },
            { text: '<a href="url" target="_tab">', correct: false },
            { text: '<a href="url" target="_blank">', correct: true },
            { text: '<a href="url" newtab>', correct: false }
        ]
    },
    {
        question: "What is a semantic HTML element?",
        answers: [
            { text: "One with class attributes", correct: false },
            { text: "One that only uses <div>", correct: false },
            { text: "One that clearly describes its meaning", correct: true },
            { text: "One used in CSS", correct: false }
        ]
    },
    {
        question: "Which attribute is used for unique identification?",
        answers: [
            { text: "class", correct: false },
            { text: "style", correct: false },
            { text: "id", correct: true },
            { text: "href", correct: false }
        ]
    },
    {
        question: "What does the alt attribute in the <img> tag do?",
        answers: [
            { text: "Styles the image", correct: false },
            { text: "Specifies image alignment", correct: false },
            { text: "Provides alternative text", correct: true },
            { text: "Adds a caption", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a valid HTML5 input type?",
        answers: [
            { text: "email", correct: false },
            { text: "date", correct: false },
            { text: "currency", correct: true },
            { text: "color", correct: false }
        ]
    },
    {
        question: "Which property is used to change text color in CSS?",
        answers: [
            { text: "font-color", correct: false },
            { text: "text-color", correct: false },
            { text: "color", correct: true },
            { text: "background-color", correct: false }
        ]
    },
    {
        question: "What does the z-index property control?",
        answers: [
            { text: "Font size", correct: false },
            { text: "Layer order", correct: true },
            { text: "Flex direction", correct: false },
            { text: "Text indentation", correct: false }
        ]
    },
    {
        question: "Which unit is relative to the root element's font size?",
        answers: [
            { text: "em", correct: false },
            { text: "px", correct: false },
            { text: "rem", correct: true },
            { text: "%", correct: false }
        ]
    },
    {
        question: "What does display: none; do?",
        answers: [
            { text: "Hides the element but takes up space", correct: false },
            { text: "Removes the element from the layout", correct: true },
            { text: "Makes the element transparent", correct: false },
            { text: "Changes z-index", correct: false }
        ]
    },
    {
        question: "Which of the following is used for responsive design?",
        answers: [
            { text: "@responsive", correct: false },
            { text: "@media", correct: true },
            { text: "@import", correct: false },
            { text: "@viewport", correct: false }
        ]
    },
    {
        question: "Which is the correct syntax for a class selector?",
        answers: [
            { text: "#className", correct: false },
            { text: ".className", correct: true },
            { text: "className", correct: false },
            { text: "*className", correct: false }
        ]
    },
    {
        question: "Which display value makes an element inline and allows setting width/height?",
        answers: [
            { text: "inline", correct: false },
            { text: "block", correct: false },
            { text: "inline-block", correct: true },
            { text: "flex", correct: false }
        ]
    },
    {
        question: "What does the CSS box model include?",
        answers: [
            { text: "Only content", correct: false },
            { text: "Padding, margin, and border", correct: false },
            { text: "Border, padding, margin, content", correct: true },
            { text: "Header and footer", correct: false }
        ]
    },
    {
        question: "How do you center a block element horizontally?",
        answers: [
            { text: "text-align: center;", correct: false },
            { text: "margin: 0 auto;", correct: true },
            { text: "align: center;", correct: false },
            { text: "position: center;", correct: false }
        ]
    },
    {
        question: "Which keyword is used to declare a constant in JavaScript?",
        answers: [
            { text: "var", correct: false },
            { text: "const", correct: true },
            { text: "let", correct: false },
            { text: "define", correct: false }
        ]
    },
    {
        question: "What is the result of 2 + '2' in JavaScript?",
        answers: [
            { text: "4", correct: false },
            { text: "NaN", correct: false },
            { text: "22", correct: true },
            { text: "undefined", correct: false }
        ]
    },
    {
        question: "What does === check in JavaScript?",
        answers: [
            { text: "Value only", correct: false },
            { text: "Type only", correct: false },
            { text: "Value and type", correct: true },
            { text: "None", correct: false }
        ]
    },
    {
        question: "Which of the following is used to select an element by ID?",
        answers: [
            { text: "getElementByClassName()", correct: false },
            { text: "querySelectorAll()", correct: false },
            { text: "getElementById()", correct: true },
            { text: "getElementsByTag()", correct: false }
        ]
    },
    {
        question: "What does the DOM stand for?",
        answers: [
            { text: "Data Object Management", correct: false },
            { text: "Document Object Model", correct: true },
            { text: "Digital Ordinance Model", correct: false },
            { text: "Data Order Model", correct: false }
        ]
    },
    {
        question: "What is the purpose of addEventListener()?",
        answers: [
            { text: "To create elements", correct: false },
            { text: "To bind a function to an event", correct: true },
            { text: "To fetch data", correct: false },
            { text: "To style an element", correct: false }
        ]
    },
    {
        question: "What is a closure in JavaScript?",
        answers: [
            { text: "A block of CSS", correct: false },
            { text: "A function with no return value", correct: false },
            { text: "A function inside another with access to its scope", correct: true },
            { text: "A deprecated feature", correct: false }
        ]
    },
    {
        question: "What does a Promise represent in JavaScript?",
        answers: [
            { text: "A type of loop", correct: false },
            { text: "Immediate value", correct: false },
            { text: "Future completion/failure of an async task", correct: true },
            { text: "A boolean condition", correct: false }
        ]
    }
]

// Adding Variables

const questionElement = document.getElementById('question');
const answerBtn = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('nextBtn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        answerBtn.addEventListener('click', selectedAnswer);
    })
}

function selectedAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct');
    }
    else {
        selectedBtn.classList.add('incorrect');
    }
}

function resetState(){
    nextBtn.style.display = 'none';
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

startQuiz()

