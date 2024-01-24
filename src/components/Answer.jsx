import React from "react"
import { decode } from 'html-entities'

export default function Answer({ answer, selectAnswer, quizEnded }) {
    //console.log("answer rendered")

    let styles = {
        backgroundColor:  answer.isSelected ? "#59E391" : "white"
    }

    if (quizEnded) {
        if (answer.isCorrect && answer.isSelected) {
            styles = {backgroundColor: "#59E391", color: "blue"}
        }

        if (!answer.isCorrect && answer.isSelected) {
            styles = {backgroundColor: "red"}
        }

        if (answer.isCorrect && !answer.isSelected) {
            styles = {backgroundColor: "green"}
        }

        if (!answer.isSelected && !answer.isCorrect) {
            styles = {backgroundColor: "white"}
        }
    }


    quizEnded && console.log(answer.isSelected)

    return (
        <button
            className="answer-container"
            onClick={selectAnswer}
            disabled={quizEnded ? true : false}
            style={styles}
        >
            <h4>{decode(answer.answer)}</h4>
        </button>
    )
}
