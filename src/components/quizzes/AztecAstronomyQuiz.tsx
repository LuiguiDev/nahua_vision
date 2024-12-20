import React, { Suspense, useState } from 'react';
import QuizQuestion from './ce/QuizQuestion';
import { useQuiz } from '../../hooks/useQuiz';
import './quiz.css'
import { Loader } from '../ui/loader/Loader';

export const AztecAstronomyQuiz = () => {
  // STATES
  const [questionIndex, setQuestionIndex] = useState(-1)
  const [userAnswers, setUserAnswers] = useState({})
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  // CONSTS
  const {data: quiz_data, loading} = useQuiz()

  // FUNCTIONS / COMPONENTS
  function renderSummary() {
    const correctAnswers = Object.values(userAnswers).filter(answer => answer === 'correct').length
    const maxScore =quiz_data?.length ?? 0
    const score = correctAnswers/maxScore
    
    function getSummaryMessage(score:number) {
      if(score === maxScore) return 'Felicidades, obtuviste un resultado perfecto'
      
      return 'Hay cosas que no sabes, pero puedes aprenderlas!'
    }

    return (
      <div className="quiz_sumary">
        <h3>{correctAnswers}/{maxScore}</h3>
        <p>{getSummaryMessage(score)}</p>
        <button style={{marginTop: '15px'}} className='question_option'>Quiero aprender más</button>
      </div>
    )
  }
  function handleStartQuiz() {
    setQuestionIndex(0)
  }

  const handleNextQuestion = () => {
    /* const currentQuestion = quiz_data[questionIndex]; */

    if (quiz_data && quiz_data.length > 0) {
      setQuestionIndex(prev => prev + 1);
      setIsAnswerSubmitted(false)
    } else if(questionIndex === quiz_data?.length) {
      setQuizCompleted(true);
    }
  }

  function handleAnswerSubmit(isCorrect: boolean) {
    setIsAnswerSubmitted(true)
    setUserAnswers(prev => ({
      ...prev,
      [questionIndex]: isCorrect ? 'correct' : 'incorrect'
    }));
  }

  function renderQuestion() {
    if(quiz_data && quiz_data?.length > 0) {
      const currentCuestion = quiz_data[questionIndex]

      return(
        <div className="quiz_question">
          <p>Pregunta {questionIndex + 1} de {quiz_data.length}</p>
            <QuizQuestion
              key={currentCuestion.question_id}
              image_question={currentCuestion?.img}
              img_onloading={"https://i.ibb.co/vZDVmZc/meteor-shower-at-teotihuacan-on-Loading.webp"}
              question={currentCuestion.question}
              options={currentCuestion.options}
              correctAnswer={currentCuestion.answer}
              isAnswerSubmitted={isAnswerSubmitted}
              onAnswerSubmit={handleAnswerSubmit}
              onNextQuestion={handleNextQuestion}
            />
        </div>
      )
    }
  }

  function renderQuizContent() {
    if (loading) return (<Loader />)

    if(questionIndex === -1) {
      return(
        <div className='quiz_welcome'>
          {/* presentation image */}
          <h3>Bienvenido al quiz de astronomía azteca</h3>
          <img src='https://i.ibb.co/McdKvSF/quiz-portada-dalle.webp' />
          <button className='question_option' onClick={handleStartQuiz}>Comenzar quiz</button>
        </div>
      )
    }else if(quiz_data && questionIndex < quiz_data?.length){
      return renderQuestion()
    }else{
      return renderSummary()
    }
  }

  return (
    <div className="page_container" >
      <h2>Quiz de astronomía azteca</h2>
      {renderQuizContent()}
    </div>
  );
};
