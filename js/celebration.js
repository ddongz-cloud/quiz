document.addEventListener('DOMContentLoaded', () => {
    const score = localStorage.getItem('quizScore');
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.textContent = score;
    }

    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
        emojis: ['🎉', '🎊', '🎈', '✨', '🥳'],
        confettiNumber: 100,
    });
});