import React from 'react';
import QuizQuestion from './Quizzes/QuizQuestion';

const AztecAstronomyQuiz = () => {
  const handleAnswerSubmit = (isCorrect: boolean) => {
    // Lógica para manejar la respuesta (por ejemplo, actualizar la puntuación)
  };

  return (
    <div style={{backgroundColor: 'black'}}>
      <h2>Quiz de Astronomía Azteca</h2>
      <QuizQuestion
        question="¿Qué representa el círculo rojo en el centro del pictograma de Tonatiuh?"
        options={[
          { id: 'a', text: 'El fuego' },
          { id: 'b', text: 'El sol' },
          { id: 'c', text: 'La sangre' },
          { id: 'd', text: 'El corazón' }
        ]}
        correctAnswer="b"
        onAnswerSubmit={handleAnswerSubmit}
      />
      <QuizQuestion
        question='working?'
        options={[
          { id: 'a', text: 'El fuego' },
          { id: 'b', text: 'El sol' },
          { id: 'c', text: 'La sangre' },
          { id: 'd', text: 'El corazón' }
        ]}
        correctAnswer='b'
        onAnswerSubmit={handleAnswerSubmit}
      />
    </div>
  );
};

export default AztecAstronomyQuiz