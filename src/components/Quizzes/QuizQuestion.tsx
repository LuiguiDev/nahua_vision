import React, { useState } from 'react';
import './question.css'
import { useQuiz } from '../../hooks/useQuiz';
import '../../styles/quiz.css'

// TYPES
interface Option {
  id: string;
  text: string;
}
interface QuizQuestionProps {
  image_question: string;
  question: string;
  options: Option[];
  correctAnswer: string;
  isAnswerSubmitted: boolean;
  onAnswerSubmit: (isCorrect: boolean) => void;
  onNextQuestion: () => void;
}

// MAIN COMPONENT
const QuizQuestion: React.FC<QuizQuestionProps> = ({ 
  question,
  options = [], // Provide a default empty array
  correctAnswer,
  image_question,
  isAnswerSubmitted,
  onAnswerSubmit,
  onNextQuestion,
}) => {

  // Add a check to render nothing if there's no question or options
  if (!question || options.length === 0) return null;
  
  // STATES
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // FUNCTIONS
  function handleOptionSelect (optionId: string) {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(optionId);
    }
  }
  function handleSubmit () {
    if (selectedAnswer) {
      const correct = selectedAnswer === correctAnswer;
      setIsCorrect(correct);
      onAnswerSubmit(correct);
      setSelectedAnswer(null)
    }
  }

  return (
    <div className="space-y-4">
      <div className="question_img_container">
        <img src={image_question} alt="" className='question_img' />
      </div>
      <h3 className="text-lg font-semibold">{question}</h3>
      <div className="space-y-2">
        {options.map((option) => (
         <button
            key={option.id}
            onClick={() => handleOptionSelect(option.id)}
            className={`w-full text-left p-2 rounded ${
              selectedAnswer === option.id
                ? 'bg-blue-100 border-blue-500'
                : 'bg-gray-100 hover:bg-gray-200'
            } ${
              isAnswerSubmitted
                ? option.id === correctAnswer
                  ? 'bg-green-100 border-green-500'
                  : selectedAnswer === option.id
                  ? 'bg-red-100 border-red-500'
                  : ''
                : ''
            }`}
            disabled={isAnswerSubmitted}
          >
            {option.text}
          </button>
        ))}
      </div>
      {!isAnswerSubmitted && (
        <button
          onClick={handleSubmit}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
          disabled={!selectedAnswer}
        >
          Enviar respuesta
        </button>
      )}
      {isAnswerSubmitted && (
        <div className="answer_submitted_feedback">
          {
          isCorrect
            ? <h3 style={{color: 'green'}}>Correcro</h3>
            : <h3><span style={{color: 'red'}}>Incorreco</span>, 
              la respuesta correcta es: {options.find((o) => o.id === correctAnswer)?.text}</h3>
          }
          <button onClick={onNextQuestion}>Siguiente pregunta</button>
        </div>
        )
      }
    </div>
  );
};

export default QuizQuestion;