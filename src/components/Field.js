import { useState } from 'react';
import Square from './Square';
import '../App.css';

function Field() {
    const [playField, setPlayField] = useState([0,0,0,0,0,0,0,0,0]);
    const [score, setScore] = useState(0);
  return (
    <div className="field">
        <h3>{score}</h3>
      {playField.map((block, index) => {
          return <Square key={index} setScore={setScore} score={score} setPlayField={setPlayField}/>
      })}
    </div>
  );
}

export default Field;