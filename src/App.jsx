import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import Question4 from './components/Question4';
import Question5 from './components/Question5';
import Timer from './components/Timer';
import Result from './components/Result';
import './styles/main.css';

const App = () => {
    const [score, setScore] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleScoreUpdate = (newScore) => {
        setScore(newScore);
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };

    return (
        <Router>
            <div className="app-container">
                <Timer onTimeUp={handleSubmit} />
                <Switch>
                    <Route path="/question1">
                        <Question1 onScoreUpdate={handleScoreUpdate} onSubmit={handleSubmit} />
                    </Route>
                    <Route path="/question2">
                        <Question2 onScoreUpdate={handleScoreUpdate} onSubmit={handleSubmit} />
                    </Route>
                    <Route path="/question3">
                        <Question3 onScoreUpdate={handleScoreUpdate} onSubmit={handleSubmit} />
                    </Route>
                    <Route path="/question4">
                        <Question4 onScoreUpdate={handleScoreUpdate} onSubmit={handleSubmit} />
                    </Route>
                    <Route path="/question5">
                        <Question5 onScoreUpdate={handleScoreUpdate} onSubmit={handleSubmit} />
                    </Route>
                    <Route path="/result">
                        <Result score={score} />
                    </Route>
                    <Route path="/">
                        <h1>Welcome to the Exam</h1>
                        <p>Please navigate to the questions to begin.</p>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;