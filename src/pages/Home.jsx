import React, { useState } from "react"

export default function Home({ startQuiz }) {
    return (
        <>
            <h1>quizzical</h1>
            <h2>some text</h2>
            <button onClick={startQuiz}>Start quiz</button>
        </>
    )
}