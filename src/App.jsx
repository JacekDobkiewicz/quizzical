import React, { useState } from 'react'
import Home from "./pages/Home"
import Quiz from "./pages/Quiz"

export default function App() {
  const [quizStarted, setQuizStarted] = React.useState(()=> false)
  
  function startQuiz() {
    setQuizStarted(true)
  }

  return (
    <>
      {quizStarted ? <Quiz quizStarted={quizStarted} /> : <Home startQuiz={startQuiz} />}
    </>
  )
}