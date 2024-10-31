import React, { useEffect, useState } from 'react';
import QuizQuestion from './Quizzes/QuizQuestion';
import { useQuiz } from '../hooks/useQuiz';
import { Navigate, Route, Router, Routes, useNavigate, useParams } from 'react-router-dom';
import '../styles/quiz.css'

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
  const navigate = useNavigate()
  const [questionIndex, setQuestionIndex] = useState(-1)
  const [userAnswers, setUserAnswers] = useState({})
  const [quizCompleted, setQuizCompleted] = useState(false)

  const {quiz_data} = useQuiz()

  
  function renderSummary() {
    const correctAnswers = Object.values(userAnswers).filter(answer => answer === 'correct').length
    const maxScore =quiz_data.length
    const score = correctAnswers/maxScore
    
    function getSummaryMessage(score:number) {
      if(score === maxScore) return 'Felicidades, obtuviste un resultado perfecto'
      
      return 'Hay cosas que no sabes, pero puedes aprenderlas!'
    }

    return (
      <div className="quiz_sumary">
        <h3>{correctAnswers}/{maxScore}</h3>
        <p>{getSummaryMessage(score)}</p>
        <button onClick={navigate('/app')}>Quiero aprender más</button>
      </div>
    )
  }
  function handleStartQuiz() {
    setQuestionIndex(0)
  }
  const handleNextQuestion = () => {
    const currentQuestion = quiz_data[questionIndex];

    if (questionIndex < quiz_data.length - 1) {
      setQuestionIndex(prev => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  }

  function handleAnswerSubmit(isCorrect: boolean) {
    setUserAnswers(prev => ({
      ...prev,
      [questionIndex]: isCorrect ? 'correct' : 'incorrect'
    }));
  }

  function renderQuestion() {
    const currentCuestion = quiz_data[questionIndex]

    return(
      <div className="quiz_question">
        <p>Pregutna {questionIndex + 1} de {quiz_data.length}</p>
        <QuizQuestion
          question={currentCuestion.question}
          options={currentCuestion.options}
          correctAnswer={currentCuestion.answer}
          onAnswerSubmit={handleAnswerSubmit}
          onNextQuestion={handleNextQuestion}
        />
      </div>
    )
  }

  function renderQuizContent() {
    if(questionIndex === -1) {
      return(
        <div>
          {/* presentation image */}
          <h3>Bienvenido al qui de astronomía azteca</h3>
          <button onClick={handleStartQuiz}>Comenzar quiz</button>
        </div>
      )
    }else if(quizCompleted){
      return renderSummary()
    }else{
      return renderQuestion()
    }
  }

  return (
    <div className="quiz_container" style={{marginBottom: '50px'}}>
      <h1>Quiz de astronomía azteca</h1>
      {renderQuizContent()}
    </div>
  );
};

export default AztecAstronomyQuiz