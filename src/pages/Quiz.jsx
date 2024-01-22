import React, { useState, useEffect } from "react"
import Question from "../components/Question"
import {nanoid} from "nanoid";

export default function Quiz({ quizStarted }) {
    const [quizData, setQuizData] = useState(()=>[])
    const [quizEnded, setQuizEnded] = useState(()=> false)

    function checkAnswers() {
        setQuizEnded(true)
        console.log(quizEnded)
    }

    console.log("quiz rendered")

    useEffect(function() {
        fetch('https://opentdb.com/api.php?amount=5')
          .then(res => res.json())
          .then(data => setQuizData(data.results.map(question => {
            let answersArr = []
            //push incorrect answers objects to answers array 
            question.incorrect_answers.map(answer => {
                answersArr.push({answer, isCorrect: false, isSelected: false, id: "answer" + nanoid()})
            })
            //push correct answer object to answers array at random index
            answersArr.splice((answersArr.length+1) * Math.random() | 0, 0, {answer: question.correct_answer, isCorrect: true, isSelected: false, id: "answer" + nanoid()}) 

            return (
                {
                    question: question.question,
                    isSelected: false,
                    answers: answersArr,
                    id: "question" + nanoid()
                }
            )
        })))
      }, [quizStarted])

    quizData && console.log(quizData)

    const quizElements = quizData && quizData.map(question => {
        return (
            <Question
                question={{...question}}
                key={question.id}
                quizEnded={quizEnded}
            />
        )
    })

    return (
        <>
            {quizElements}
            <button onClick={()=>checkAnswers()}>Check answers</button>
        </>
    )
}