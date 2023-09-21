document.addEventListener('DOMContentLoaded', function() {
    const questionContainer = document.getElementById('question-container');
    const questionInputs = document.querySelectorAll('.question-input');
    
    // Add an event listener to the last input field to detect Enter key press
    questionInputs[questionInputs.length - 1].addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const newQuestionContainer = document.createElement('div');
            newQuestionContainer.classList.add('question-container');
            const newIndex = questionInputs.length + 1;
            newQuestionContainer.innerHTML = `
                <div class="question">
                    <label for="question${newIndex}">Next question:</label>
                    <input type="text" id="question${newIndex}" class="question-input">
                </div>
            `;
            questionContainer.appendChild(newQuestionContainer);
            newQuestionContainer.querySelector('.question-input').focus();
        }
    });
});
