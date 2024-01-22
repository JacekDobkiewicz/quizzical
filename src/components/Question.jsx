import React, { useState, useEffect } from "react"
import Answer from "./Answer"
import { decode } from 'html-entities'

export default function Question({ question, selectAnswer, quizEnded }) {
    const [answers, setAnswers] = useState(() => [])

    question && useEffect(function() {setAnswers(question.answers)},[question])

    function selectAnswer(id) {
        setAnswers(prevAnswers => prevAnswers.map(answer => {
            if (answer.id === id) {
                return {...answer, isSelected: true}
            } else {
                return {...answer, isSelected: false}
            }
        }))
    }

    console.log("quesiton rendered")

    const answerElements = answers.map(answer => {
        return (
           <Answer 
                answer={{...answer}}
                key={answer.id}
                selectAnswer={()=>selectAnswer(answer.id)}
                quizEnded={quizEnded}
           />
        )
    })

    return (
        <div>
            <h1>{decode(question.question)}</h1>
            <div className="answer-elements-container">
                {answerElements}
            </div>
        </div>
    )
}