
import { useState } from 'react';
import './styles.css'

function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default function TicTacToe() {

    const [squares, setSquares] = useState(Array(9).fill(''));
    console.log(squares)
    
  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
