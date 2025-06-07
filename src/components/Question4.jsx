import React, { useState } from 'react';

const Question4 = () => {
    const [answer, setAnswer] = useState('');

    const handleChange = (event) => {
        setAnswer(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logic to handle answer submission, e.g., sending to API for grading
    };

    return (
        <div className="question-container">
            <h2>Question 4 – Process Description</h2>
            <p>
                Describe the following process in detail using appropriate technical writing techniques:
                The Process of Water Purification in Municipal Treatment Plants.
            </p>
            <p>
                Write a comprehensive description of how raw water from natural sources is treated and purified for safe municipal consumption. 
                Your description should include:
            </p>
            <ul>
                <li>Pre-treatment stages</li>
                <li>Primary treatment processes</li>
                <li>Secondary treatment methods</li>
                <li>Final purification steps</li>
                <li>Quality testing procedures</li>
            </ul>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleChange}
                    rows="10"
                    cols="50"
                    placeholder="Write your answer here..."
                    required
                />
                <br />
                <button type="submit">Submit Answer</button>
            </form>
        </div>
    );
};

export default Question4;