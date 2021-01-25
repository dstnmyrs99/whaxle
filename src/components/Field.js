import { useState } from 'react';
import Square from './Square';
import '../App.css';

function Field() {
    const [playField, setPlayField] = useState([0,0,0,0,0,0,0,0,0])
  return (
    <div className="field">
      {playField.map((block, index) => {
          return <Square key={index} setField={setPlayField}/>
      })}
    </div>
  );
}

export default Field;