/*
Code Breakdown with Flow
1. React useState Setup in Board Component
                const [squares, setSquares] = useState(Array(9).fill(null));
This line creates a state variable called squares.
It holds an array with 9 items, all initially null:
                squares = [null, null, null, null, null, null, null, null, null]
2. Square Component
                    function Square({ value }) {
                    return <button className="square">{value}</button>;
                    }
This component just receives a value from its parent and displays it inside a button.
It has no memory of its own. It depends on what is passed through props.

🎯 What Happens During Rendering
The Board component renders 9 buttons in a 3x3 grid.
For each <Square />, it passes a value from the squares array:

                    <Square value={squares[0]} />
                    <Square value={squares[1]} />
                    ...
                    <Square value={squares[8]} />
Since all squares values are null, each button shows nothing inside initially.
 */
import { useState } from "react";
function Square({ value }) {
  return <button className="square">{value}</button>;
}
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}
