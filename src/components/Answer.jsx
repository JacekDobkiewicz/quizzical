import React from "react"
import { decode } from 'html-entities'

export default function Answer({ answer, selectAnswer, quizEnded }) {
    let styles = {
        backgroundColor:  answer.isSelected ? "#59E391" : "white"
    }

    if (quizEnded) {
        if (!answer.isCorrect) {
            styles = {backgroundColor: answer.isSelected ? "lightred" : "white"}
        }

        if (answer.isCorrect) {
            styles = {backgroundColor: answer.isSelected ? "#59E391" : "green" }
        } 
    }

    return (
        <div 
            className="answer-container"
            onClick={selectAnswer}
            disabled={false}
            style={styles}
        >
            <h3>{decode(answer.answer)}</h3>
        </div>
    )
}