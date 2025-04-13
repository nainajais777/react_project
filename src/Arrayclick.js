/*
in context of Arraystate.js , What you’ve understood so far:
Your current code sets up a 3x3 grid of squares, each displaying a value from a squares array (which is null by default, so all squares appear empty).

❓ What’s the problem now?
When you click a square, nothing happens. That’s because you haven’t told React what to do when a square is clicked.

🎯 Your Next Goal:
Allow the user to click any square, and it should change to 'X'.

To do this, you need to:

Detect when a square is clicked.

Update the value in squares[i] to 'X'.

Re-render the board with updated values.

-------------*************------------------
The concept you're pointing to here:
        onSquareClick={() => handleClick(0)}
is called an "inline arrow function" or more broadly, "callback function with parameter" passed as a prop in React.
----------------***************----------------------------
zoom in specifically on what happens when you click the first square (index 0) — and also
 explain the meaning and importance of slice() in simple terms.

🎯 Function we are breaking down:

                                function handleClick(i) {
                                const nextSquares = squares.slice();  // Step 1
                                nextSquares[i] = "X";                 // Step 2
                                setSquares(nextSquares);              // Step 3
                                }
Let’s say the user clicks this:
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
This calls:

                handleClick(0)
🔍 Step-by-step Breakdown for index 0
✅ Step 1: const nextSquares = squares.slice();
What is slice() doing here?
The slice() method creates a shallow copy of the squares array.
This ensures we are not modifying the original state directly, which is very important in React.
Let’s assume the original state was:
        squares = [null, null, null, null, null, null, null, null, null]
After slicing:
            nextSquares = squares.slice();
// nextSquares is now: [null, null, null, null, null, null, null, null, null]
Both arrays look the same, but they are now two different things in memory.

📌 Why not change squares[0] directly? Because React state must be treated as immutable (unchanged directly). 
So we always make a copy, update the copy, then send it back to React using setSquares().

✅ Step 2: nextSquares[i] = "X";
        Now i  = 0, so we are doing:
        nextSquares[0] = "X";
So updated array becomes:
    ["X", null, null, null, null, null, null, null, null]
We’ve marked the first square as "X".
✅ Step 3: setSquares(nextSquares);
This tells React:
🗣️ “Hey! I have a new version of squares! Please update the UI!”
React takes this new array:
        ["X", null, null, null, null, null, null, null, null]
React re-renders the UI and shows "X" in the first square.
💡 Visualization of Before & After
BEFORE CLICK:
        squares = [null, null, null, null, null, null, null, null, null]
UI:
[ ][ ][ ]
[ ][ ][ ]
[ ][ ][ ]
AFTER handleClick(0):
    nextSquares = ["X", null, null, null, null, null, null, null, null]
UI:
[X][ ][ ]
[ ][ ][ ]
[ ][ ][ ]



*/

import { useState } from "react";
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "x";
    setSquares(nextSquares);
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
