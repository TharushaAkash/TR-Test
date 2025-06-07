import React, { useState } from 'react';

const Question2 = () => {
    const [answers, setAnswers] = useState({
        challenges: '',
        countries: '',
        microfinancing: '',
        impacts: '',
        obstacle: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAnswers({
            ...answers,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle submission and grading can be added here
    };

    return (
        <div className="question-container">
            <h2>Question 2 – Reading Comprehension</h2>
            <p>
                Developing nations face unique challenges in implementing sustainable energy solutions due to limited financial resources, inadequate infrastructure, and technological gaps. Solar power has emerged as a particularly viable option for rural communities in countries like Bangladesh, Kenya, and India, where traditional electricity grids are either unreliable or non-existent.
            </p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>What are three challenges developing nations face in implementing sustainable energy solutions?</label>
                    <input
                        type="text"
                        name="challenges"
                        value={answers.challenges}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Which countries are mentioned as examples where solar power has been viable for rural communities?</label>
                    <input
                        type="text"
                        name="countries"
                        value={answers.countries}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>How do microfinancing programs help make solar technology accessible?</label>
                    <input
                        type="text"
                        name="microfinancing"
                        value={answers.microfinancing}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>List three positive impacts mentioned that extend beyond electricity access.</label>
                    <input
                        type="text"
                        name="impacts"
                        value={answers.impacts}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>What is identified as a significant obstacle in rural areas regarding renewable energy equipment?</label>
                    <input
                        type="text"
                        name="obstacle"
                        value={answers.obstacle}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit Answers</button>
            </form>
        </div>
    );
};

export default Question2;