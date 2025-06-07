# Exam Application

This project is an online exam application designed for students to attempt a technical writing examination. The application features a series of questions based on reading comprehension, summary writing, process description, and graph analysis. 

## Features

- **Multiple Questions**: The exam consists of five questions, each focusing on different aspects of technical writing.
- **Timer**: A countdown timer is implemented to keep track of the remaining time for the exam.
- **Automated Grading**: The application utilizes an AI API to check students' answers and provide instant feedback on their performance.
- **Results Display**: After completing the exam, students can view their scores and receive feedback based on their answers.

## Project Structure

The project is organized as follows:

```
exam-app
├── public
│   └── index.html          # Main HTML entry point
├── src
│   ├── components          # React components for each question and functionality
│   ├── api                 # API interactions for answer checking
│   ├── App.jsx             # Main application component
│   ├── index.js            # Entry point for the React application
│   └── styles              # CSS styles for the application
├── package.json            # Project metadata and dependencies
└── .gitignore              # Files and directories to ignore in version control
```

## Setup Instructions

1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   cd exam-app
   ```

2. **Install Dependencies**: 
   ```
   npm install
   ```

3. **Run the Application**: 
   ```
   npm start
   ```

4. **Access the Application**: Open your web browser and navigate to `http://localhost:3000` to access the exam application.

## Usage

- Students can navigate through the questions and submit their answers.
- The timer will indicate the remaining time for the exam.
- Upon completion, students will receive their scores and feedback.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.