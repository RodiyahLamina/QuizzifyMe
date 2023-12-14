const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Venus", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the capital of Nigeria?",
        options: ["Abuja", "Lagos", "Benin", "Anambra"],
        correctAnswer: "Abuja"
    },

    {
        question: "When did Nigeria become independent?",
        options: ["1945", "1948", "1957", "1960"],
        correctAnswer: "1960"
    },
    {
        question: "Which is the official language of Nigeria?",
        options: ["English", "Ibo", "Hausa", "Sahili"],
        correctAnswer: "English"
    },
    {
        question: "Which water body is close to Nigeria?",
        options: ["Gulf of Guinea", "Walvis Bay", "Gulf of Aqaba", "Suez Canal"],
        correctAnswer: "Gulf of Guinea"
    },

    {
        question: "When is National Day in Nigeria?",
        options: ["7 April", "14 June", "1 October", "1 November"],
        correctAnswer: "1 October"
    },
    {
        question: " Which is the currency of Nigeria?",
        options: ["Rand", "Naira", "Pound", "Dollar"],
        correctAnswer: "Naira"
    },

    {
        question: "Who is the first ruler of Sokoto Caliphate?",
        options: ["Usman dan Fodio", "Bello", "Abdullahi", "Abd as Salam"],
        correctAnswer: "Usman dan Fodio"
    },
    {
        question: "Who won the presidential election in 1993 and was imprisoned?",
        options: ["Mashood Abiola", "Abdulsalam Abubakar", "Olusegun Obasanjo", "Muhammadu Buhari"],
        correctAnswer: "Mashood Abiola"
    },
    // {
    //     question: "Which region declared its independence from Nigeria in 1967 and was unsuccessful?",
    //     options: ["Calabar", "Biafra", "Sapele", "Warri"],
    //     correctAnswer: "Biafra"
    // },
    // Add more questions as needed
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const scoreContainer = document.getElementById('score');
const nextButton = document.querySelector('button');

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const currentQuizQuestion = questions[currentQuestion];
    questionContainer.innerText = currentQuizQuestion.question;

    optionsContainer.innerHTML = '';
    currentQuizQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });

    nextButton.style.display = 'none';
}

function checkAnswer(userAnswer) {
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (userAnswer === correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionContainer.innerText = 'Quiz completed!';
    optionsContainer.innerHTML = '';
    nextButton.style.display = 'none';
    scoreContainer.innerText = `Score: ${score}/${questions.length}`;
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        endQuiz();
    }
}

function reviewAnswers() {
    questionContainer.innerText = 'Reviewing Answers';
    optionsContainer.innerHTML = '';

    questions.forEach((quizQuestion, index) => {
        const userAnswer = getUserAnswer(index);
        const correctAnswer = quizQuestion.correctAnswer;

        const questionDiv = document.createElement('div');
        questionDiv.innerText = quizQuestion.question;

        const userAnswerDiv = document.createElement('div');
        userAnswerDiv.innerText = `Your Answer: ${userAnswer || 'Not answered'}`;
        userAnswerDiv.style.color = userAnswer === correctAnswer ? 'green' : 'red';

        const correctAnswerDiv = document.createElement('div');
        correctAnswerDiv.innerText = `Correct Answer: ${correctAnswer}`;
        correctAnswerDiv.style.color = 'green';

        optionsContainer.appendChild(questionDiv);
        optionsContainer.appendChild(userAnswerDiv);
        optionsContainer.appendChild(correctAnswerDiv);

        // Add a separator line
        optionsContainer.appendChild(document.createElement('hr'));
    });

    nextButton.style.display = 'none';
    scoreContainer.innerText = `Score: ${score}/${questions.length}`;
}

// Assume userAnswers is an array to store user responses
const userAnswers = [];

function checkAnswer(userAnswer) {
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (userAnswer === correctAnswer) {
        score++;
    }

    // Store the user's response for the current question
    userAnswers[currentQuestion] = userAnswer;

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function getUserAnswer(questionIndex) {
    // Return the user's selected answer for a specific question
    return userAnswers[questionIndex];
}



function retakeQuiz() {
    startQuiz();
}

// Start the quiz when the page loads
window.onload = startQuiz;
