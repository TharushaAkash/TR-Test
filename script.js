const examDuration = 30 * 60; // 30 minutes in seconds
let timeLeft = examDuration;
const timerEl = document.getElementById('timer');
const form = document.getElementById('exam-form');
const resultEl = document.getElementById('result');
let timerInterval;

function startTimer() {
    updateTimer();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitExam();
        }
    }, 1000);
}

function updateTimer() {
    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft % 60;
    timerEl.textContent = `Time Left: ${min}:${sec.toString().padStart(2, '0')}`;
}

function submitExam() {
    form.style.display = 'none';
    resultEl.style.display = 'block';
    resultEl.textContent = "Thank you for submitting your exam! Your answers have been recorded.";
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    clearInterval(timerInterval);
    submitExam();
});

window.onload = startTimer;
