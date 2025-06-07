import React, { useState } from 'react';

const Question5 = () => {
    const [answer, setAnswer] = useState('');

    const handleChange = (event) => {
        setAnswer(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logic to send the answer to the AI API for checking would go here
    };

    return (
        <div className="question-container">
            <h2>Question 5 – Graph Description</h2>
            <p>
                Analyze and describe the following data presentation:
                Global Renewable Energy Capacity Growth (2018-2024)
                <br />
                [Imagine a line graph showing:]
                <br />
                Solar Power: Starting at 180 GW in 2018, steadily increasing to 420 GW by 2024
                <br />
                Wind Power: Starting at 150 GW in 2018, growing to 320 GW by 2024
                <br />
                Hydroelectric: Starting at 280 GW in 2018, gradually increasing to 340 GW by 2024
                <br />
                Geothermal: Starting at 15 GW in 2018, slowly rising to 25 GW by 2024
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleChange}
                    placeholder="Write your analysis here..."
                    rows="10"
                    cols="50"
                    required
                />
                <br />
                <button type="submit">Submit Answer</button>
            </form>
        </div>
    );
};

export default Question5;