const questions = [
    {
        question: "中国的首都是哪里？",
        options: ["北京", "上海", "广州", "深圳"],
        answer: "北京"
    },
    {
        question: "世界上最大的海洋是什么？",
        options: ["太平洋", "大西洋", "印度洋", "北冰洋"],
        answer: "太平洋"
    },
    {
        question: "以下哪个不是编程语言？",
        options: ["Java", "Python", "HTML", "C++"],
        answer: "HTML"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => selectAnswer(option);
        optionsElement.appendChild(button);
    });
}

function selectAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        localStorage.setItem('quizScore', score);
        window.location.href = 'results.html';
    }
}

if (questionElement) {
    loadQuestion();
}