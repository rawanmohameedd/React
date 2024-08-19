import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Counter from './components/counter';
import Question from './components/question';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{ backgroundColor: "rgba(136, 53, 177, 0.783)", height: '100%', padding:'20px' }}>
    <React.StrictMode >
      <Counter />
      <Question />
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
