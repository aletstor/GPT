function loadQuiz(questions) {
  const container = document.getElementById('quiz-container');
  container.innerHTML = '';

  questions.forEach((q, index) => {
    const qDiv = document.createElement('div');
    qDiv.className = 'question';
    qDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

    q.options.forEach((option, i) => {
      const label = document.createElement('label');
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = `question${index}`;
      radio.value = i;
      label.appendChild(radio);
      label.appendChild(document.createTextNode(option));
      qDiv.appendChild(label);
      qDiv.appendChild(document.createElement('br'));
    });

    container.appendChild(qDiv);
  });

  document.getElementById('submitQuiz').onclick = function() {
    let score = 0;
    questions.forEach((q, index) => {
      const selected = document.querySelector(`input[name="question${index}"]:checked`);
      if (selected && parseInt(selected.value, 10) === q.answer) {
        score++;
      }
    });
    alert(`Obtuviste ${score} de ${questions.length} respuestas correctas`);
  };
}
