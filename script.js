// Define quiz data as an array of JSON objects
const quizData = [
    {
        question: "What is the latest version of HTML?",
        options: ["HTML4", "HTML5", "HTML6", "HTML7"],
        correctAnswerIndex: 1
    },
    {
        question: "Which of the following is a programming language?",
        options: ["HTML", "CSS", "JavaScript", "XML"],
        correctAnswerIndex: 2
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        correctAnswerIndex: 0
    },
    {
        question: "What is the primary function of JavaScript?",
        options: ["To style web pages", "To structure web pages", "To add interactivity to web pages", "To define the layout of web pages"],
        correctAnswerIndex: 2
    },
    {
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Sequential Query Language", "Simple Query Language", "Structured Question Language"],
        correctAnswerIndex: 0
    },
    {
        question: "What does HTTP stand for?",
        options: ["Hypertext Transfer Protocol", "Hypertext Transfer Process", "Hypertext Test Protocol", "Hypertext Transfer Program"],
        correctAnswerIndex: 0
    },
    {
        question: "Which programming language is often used for web development?",
        options: ["Java", "Python", "C++", "PHP"],
        correctAnswerIndex: 3
    },
    {
        question: "What is the purpose of a CSS framework?",
        options: ["To create animations", "To provide pre-written CSS styles", "To define web page structure", "To manage server-side operations"],
        correctAnswerIndex: 1
    },
    {
        question: "What is the default file extension for a Cascading Style Sheet?",
        options: [".html", ".css", ".js", ".php"],
        correctAnswerIndex: 1
    },
    {
        question: "Which of the following is a front-end framework?",
        options: ["AngularJS", "Node.js", "Express.js", "Django"],
        correctAnswerIndex: 0
    },
    {
        question: "Which of the following is not a JavaScript framework or library?",
        options: ["React", "Vue.js", "Bootstrap", "Flask"],
        correctAnswerIndex: 3
    },
    {
        question: "What is the purpose of a CDN in web development?",
        options: ["To store database records", "To improve website performance", "To manage server configuration", "To secure web applications"],
        correctAnswerIndex: 1
    },
    {
        question: "What is the function of a SQL SELECT statement?",
        options: ["To insert data into a database", "To update existing data", "To retrieve data from a database", "To delete data from a database"],
        correctAnswerIndex: 2
    },
    {
        question: "Which programming language is used for building Android apps?",
        options: ["Java", "Swift", "Python", "C#"],
        correctAnswerIndex: 0
    },
    {
        question: "What does API stand for?",
        options: ["Application Programming Interface", "Advanced Programming Interface", "Automated Program Interaction", "Application Process Integration"],
        correctAnswerIndex: 0
    },
    {
        question: "Which of the following is not a version control system?",
        options: ["Git", "SVN", "Mercurial", "PHP"],
        correctAnswerIndex: 3
    },
    {
        question: "What does MVC stand for in the context of web development?",
        options: ["Model View Controller", "Multiple View Configuration", "Minimal Virtual Control", "Mainframe Virtual Control"],
        correctAnswerIndex: 0
    },
    {
        question: "What is the purpose of a JavaScript package manager like npm?",
        options: ["To create database schemas", "To manage server-side logic", "To manage and share JavaScript code libraries", "To design user interfaces"],
        correctAnswerIndex: 2
    },
    {
        question: "What is the primary function of a web server?",
        options: ["To manage databases", "To execute client-side code", "To deliver web pages to clients", "To compile programming languages"],
        correctAnswerIndex: 2
    },
    {
        question: "Which of the following is a relational database management system?",
        options: ["MongoDB", "MySQL", "Redis", "SQLite"],
        correctAnswerIndex: 1
    },
    {
        question: "What does IDE stand for?",
        options: ["Integrated Development Environment", "Interactive Development Environment", "Internet Development Environment", "Integrated Design Environment"],
        correctAnswerIndex: 0
    },
    {
        question: "What is the purpose of a firewall?",
        options: ["To protect against malware", "To manage server resources", "To analyze network traffic", "To control access to a network"],
        correctAnswerIndex: 3
    },
    {
        question: "Which programming language is known for its use in data analysis and machine learning?",
        options: ["Java", "Python", "C++", "Ruby"],
        correctAnswerIndex: 1
    },
    {
        question: "What is the purpose of a CDN in web development?",
        options: ["To store database records", "To improve website performance", "To manage server configuration", "To secure web applications"],
        correctAnswerIndex: 1
    },
    {
        question: "What does XSS stand for?",
        options: ["Cross-Site Scripting", "XML Style Sheets", "Extensible Server-side Scripts", "Xtra Security Software"],
        correctAnswerIndex: 0
    },
    {
        question: "What is the primary function of an operating system?",
        options: ["To manage hardware resources", "To design user interfaces", "To execute client-side code", "To secure web applications"],
        correctAnswerIndex: 0
    },
    {
        question: "Which programming language is used for game development with the Unity engine?",
        options: ["Java", "C#", "Python", "JavaScript"],
        correctAnswerIndex: 1
    },
    {
        question: "What is the purpose of a DNS server?",
        options: ["To manage databases", "To translate domain names to IP addresses", "To execute server-side code", "To secure web applications"],
        correctAnswerIndex: 1
    },
    {
        question: "Which of the following is not a cloud computing service model?",
        options: ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)", "Software as a Service (SaaS)", "Database as a Service (DBaaS)"],
        correctAnswerIndex: 3
    }
];


let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

// DOM elements
const questionTextElement = document.getElementById('question-text');
const optionElements = document.querySelectorAll('.options p');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('next-button');

// Function to initialize quiz
function startQuiz() {
    showQuestion();
}

// Function to display a new question
function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionTextElement.textContent = (currentQuestionIndex+1)+". "+currentQuestion.question;

    // Display options
    for (let i = 0; i < optionElements.length; i++) {
        optionElements[i].textContent = currentQuestion.options[i];
        optionElements[i].style.backgroundColor = ''; // Reset option background color
        optionElements[i].onclick = () => checkAnswer(i); // Assign onclick event to each option
    }
}

// Function to check user's answer
function checkAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedIndex === currentQuestion.correctAnswerIndex) {
        // If correct answer
        optionElements[selectedIndex].style.backgroundColor = 'green'; // Mark selected option as green
        correctAnswers++;
    } else {
        // If incorrect answer
        optionElements[selectedIndex].style.backgroundColor = 'red'; // Mark selected option as red
        optionElements[currentQuestion.correctAnswerIndex].style.backgroundColor = 'green'; // Mark correct option as green
        incorrectAnswers++;
    }

    // Disable further clicks on options
    optionElements.forEach(option => {
        option.onclick = null;
    });

    // Show next button
    nextButton.style.display = 'block';
}

// Function to handle next button click
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        // If there are more questions, show next question
        showQuestion();
        // Hide result display
        resultElement.textContent = '';
        // Hide next button until a new option is selected
        nextButton.style.display = 'none';
    } else {
        // Quiz completed, show result
        showResult();
    }
});

// Function to display final result
function showResult() {
    // Hide next button
    nextButton.style.display = 'none';
    // Display quiz result
    resultElement.textContent = `Quiz Completed! You scored ${correctAnswers} out of ${quizData.length}`;
}

// Start quiz when the page loads
startQuiz();

