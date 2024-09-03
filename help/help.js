document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        const chevronDown = question.querySelector('.bx-chevron-down');
        const chevronUp = question.querySelector('.bx-chevron-up');
        const answerContent = question.querySelector('.answer_content');

        chevronDown.addEventListener('click', () => {
            answerContent.style.display = 'block';
            chevronDown.style.display = 'none';
            chevronUp.style.display = 'inline';
        });

        chevronUp.addEventListener('click', () => {
            answerContent.style.display = 'none';
            chevronDown.style.display = 'inline';
            chevronUp.style.display = 'none';
        });
    });
});
