
const correctAnswers = {
    'Q1': '1', 
    'Q2': '3', 
    'Q3': '2', 
    'Q5': '2', 
    'Q6': '1', 
    'Q7': '1', 
    'Q8': '2',
    'Q9': '1',
    'Q10': '1'
};
const quizForm = document.getElementById('quizForm');
const resultsDiv = document.getElementById('results');
quizForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;

    const questions = document.querySelectorAll('.question');

    questions.forEach((questionElement) => {
        const questionName = questionElement.querySelector('input').name;
        
        const selectedOption = quizForm.querySelector(`input[name="${questionName}"]:checked`);
        
        questionElement.classList.remove('correct', 'incorrect');
        
        if (selectedOption) {
            const userAnswer = selectedOption.value;
            const correctAnswer = correctAnswers[questionName];

            if (userAnswer === correctAnswer) {
                score++;
                questionElement.classList.add('correct');
            } else {
                questionElement.classList.add('incorrect');
            }
        }
    });

    resultsDiv.innerHTML = `
        <p>Votre score est de ${score} / ${totalQuestions}.</p>
        <p>${score >= 8 ? 'Félicitations ! Vous maîtrisez les bases.' : 'Continuez à pratiquer !'}</p>
    `;
    showCorrectAnswers();
});


function showCorrectAnswers() {
    for (const qName in correctAnswers) {
        const correctValue = correctAnswers[qName];
        
        const correctInputId = qName + '-C' + correctValue;
        
        const correctLabel = document.querySelector(`label[for="${correctInputId}"]`);

        if (correctLabel) {
            correctLabel.style.fontWeight = 'bold';
            correctLabel.style.backgroundColor = '#ccffcc'; 
            correctLabel.style.padding = '2px';
            correctLabel.style.borderRadius = '3px';
        }
    }
}