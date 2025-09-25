"use client";
import { useState } from "react";

import { quiz } from "../data";

export default function Page() {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [checked, setChecked] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    });

    const { questions } = quiz;
    const { answers, correctAnswer } = questions[activeQuestion];

    return (
        <div className="container">
            <h1>صفحه آزمون</h1>
            <div>{/* Quiz count*/}</div>
            <div>
                {!showResult ? (
                    <div className="quiz-container">
                        <h3>{questions[activeQuestion].question}</h3>
                        {answers.map((answer, index) => (
                            <li
                                key={index}
                                onClick={() => {}}
                                className={
                                    selectedAnswerIndex === index
                                        ? "li-selected"
                                        : "li-hover"
                                }
                            >
                                <span>{answer}</span>
                            </li>
                        ))}
                        {checked ? (
                            <button className="btn" onClick={() => {}}>
                                {activeQuestion === questions.length - 1
                                    ? "پایان"
                                    : "بعدی"}
                            </button>
                        ) : (
                            <button
                                className="btn-disabled"
                                onClick={() => {}}
                                disabled
                            >
                                {activeQuestion === questions.length - 1
                                    ? "پایان"
                                    : "بعدی"}
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="quiz-container">
                        <h3>نتایج</h3>
                        {/* Show quiz result */}
                    </div>
                )}
            </div>
        </div>
    );
}
