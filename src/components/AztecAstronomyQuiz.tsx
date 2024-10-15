import React, { useEffect } from 'react';
import QuizQuestion from './Quizzes/QuizQuestion';
import { useQuiz } from '../hooks/useQuiz';

interface Option {
  id: string;
  text: string;
}
interface QuizQuestionProps {
  question: string;
  options: Option[];
  correctAnswer: string;
}
interface QuizDataType {
  quiz_data: QuizQuestionProps[]
}


const AztecAstronomyQuiz = () => {
  const handleAnswerSubmit = (isCorrect: boolean) => {
    // Lógica para manejar la respuesta (por ejemplo, actualizar la puntuación)
  };

  const {quiz_data} = useQuiz()

  return (
    <div style={{backgroundColor: 'black'}}>
      <h2>Quiz de Astronomía Azteca</h2>

      {quiz_data.map(element => (
        <QuizQuestion
          question={element.question}
          options={element.options}
          correctAnswer={element.answer}
          onAnswerSubmit={handleAnswerSubmit}
        />    
      ))}
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