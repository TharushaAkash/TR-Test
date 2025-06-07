import React from 'react';

const Result = ({ score, totalQuestions }) => {
    const percentage = (score / totalQuestions) * 100;

    let feedback;
    if (percentage >= 90) {
        feedback = "Excellent work!";
    } else if (percentage >= 75) {
        feedback = "Good job!";
    } else if (percentage >= 50) {
        feedback = "You passed, but there's room for improvement.";
    } else {
        feedback = "Unfortunately, you did not pass. Please try again.";
    }

    return (
        <div className="result-container">
            <h1>Exam Results</h1>
            <h2>Your Score: {score} out of {totalQuestions}</h2>
            <h3>Percentage: {percentage.toFixed(2)}%</h3>
            <p>{feedback}</p>
            <button onClick={() => window.location.reload()}>Retake Exam</button>
        </div>
    );
};

export default Result;