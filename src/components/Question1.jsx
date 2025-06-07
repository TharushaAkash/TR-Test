import React, { useState } from 'react';

const Question1 = () => {
    const [answers, setAnswers] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAnswers({
            ...answers,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the answers to the API for grading
        console.log('Submitted Answers:', answers);
    };

    return (
        <div className="question-container">
            <h2>Question 1 – Reading Comprehension</h2>
            <p>
                The global shift towards remote work has fundamentally transformed how organizations operate and communicate. 
                Cloud computing platforms have become the backbone of modern remote work infrastructure, enabling employees 
                to access company resources from anywhere with an internet connection. Video conferencing tools like Zoom, 
                Microsoft Teams, and Google Meet have replaced traditional face-to-face meetings, allowing teams to collaborate 
                effectively across geographical boundaries.
            </p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>What has become the backbone of modern remote work infrastructure?</label>
                    <input
                        type="text"
                        name="question1"
                        value={answers.question1}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Name three video conferencing tools mentioned in the passage.</label>
                    <input
                        type="text"
                        name="question2"
                        value={answers.question2}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>What are two challenges presented by rapid adoption of remote work technology?</label>
                    <input
                        type="text"
                        name="question3"
                        value={answers.question3}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>According to the passage, what does the success of remote work largely depend on?</label>
                    <input
                        type="text"
                        name="question4"
                        value={answers.question4}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit Answers</button>
            </form>
        </div>
    );
};

export default Question1;