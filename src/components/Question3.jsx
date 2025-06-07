import React, { useState } from 'react';

const Question3 = () => {
    const [summary, setSummary] = useState('');

    const handleChange = (event) => {
        setSummary(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logic to handle submission, e.g., send summary to API for grading
    };

    return (
        <div className="question-container">
            <h2>Question 3 – Summary Writing</h2>
            <p>Complete the summary by filling in the gaps with appropriate words from the passage:</p>
            <p>AI has __________ various industries through automation and improved decision-making. In __________, AI algorithms analyze medical images to __________ diseases with high accuracy. __________ sectors use AI robots for assembly, quality control, and __________ maintenance, reducing costs and defects. Financial institutions use __________ learning to detect fraud and assess credit risks. However, AI adoption raises __________ concerns about job displacement, privacy, and algorithmic bias. Organizations need responsible AI practices with __________ algorithms and regular __________ to ensure equitable outcomes.</p>
            <form onSubmit={handleSubmit}>
                <textarea 
                    value={summary} 
                    onChange={handleChange} 
                    rows="10" 
                    cols="80" 
                    placeholder="Write your summary here..."
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Question3;