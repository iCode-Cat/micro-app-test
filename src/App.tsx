import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Quiz from './Quiz';

const App = () => (
  <div className='container'>
    <div>Name: quiz-mf</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Quiz />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
