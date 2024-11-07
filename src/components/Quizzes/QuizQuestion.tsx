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
    <div className="question_container">
      <div className="question_img_container">
        <img src={image_question} alt="" className='question_img' />
      </div>
      <h3 className="question_statemetn">{question}</h3>
      <div className="options_container">
        {options.map((option) => (
         <button
            key={option.id}
            onClick={() => handleOptionSelect(option.id)}
            className={`question_option ${
              selectedAnswer === option.id
                ? 'selected_option'
                : ''
            } ${
              isAnswerSubmitted
                ? option.id === correctAnswer
                  ? 'correct_answer'
                  : selectedAnswer === option.id
                  ? 'wrong_asnwer'
                  : 'fus'
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
          className={`send_answer_btn ${
            selectedAnswer
              ? 'send_btn_active'
              : ''
          }`}
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
          <button
            onClick={onNextQuestion}
            className='next_question_btn'
          >
            Siguiente pregunta
          </button>
        </div>
        )
      }
    </div>
  );
};

export default QuizQuestion;