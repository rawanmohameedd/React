import React, { useState } from 'react';
import '../styling/question.css';

const Question = () => {
    const questions = [
        { question: 'Is this a good product?', answer: 'Minim aute aliquip consequat nulla voluptate duis enim ea incididunt.' },
        { question: 'How much does it cost?', answer: 'Consequat velit nisi est enim laborum adipisicing dolor.' },
        { question: 'How old are you?', answer: '23 years' }
    ];

    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleQuestion = (index) => {
        if (openIndexes.includes(index)) {
            setOpenIndexes(openIndexes.filter(i => i !== index));
        } else {
            setOpenIndexes([...openIndexes, index]);
        }
    };

    return (
        <div className='container'>
            <h2>Frequently Asked Questions</h2>
            {questions.map((question, index) => (
                <div style={{backgroundColor:'rgba(136, 53, 177, 0.783)'}}>
                <div key={index} className='questions'>
                    <h2>{question.question}</h2>
                    <div className='toggle-button' onClick={() => toggleQuestion(index)}>
                        <span >{openIndexes.includes(index) ? '-' : '+'}</span>
                    </div>
                    </div>
                    <div>
                    {openIndexes.includes(index) && <p className='answers'>{question.answer}</p>}
                </div>
                </div>
            ))}
        </div>
    );
};

export default Question;