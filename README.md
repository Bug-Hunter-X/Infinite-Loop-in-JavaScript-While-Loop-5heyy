# Infinite Loop Bug in JavaScript

This repository demonstrates a common error in JavaScript while loops: modifying the loop counter within the loop's conditional statement, leading to an unexpected infinite loop. 

The `bug.js` file contains the erroneous code causing the infinite loop. The `bugSolution.js` file demonstrates the correct solution, avoiding the loop issue.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` in a JavaScript environment (e.g., Node.js, browser's developer console).
3. Run the code; you'll observe it never terminates.
4. Open `bugSolution.js` and run the corrected code; it will terminate correctly.

## Explanation
The issue lies in the loop's condition and the placement of the counter increment. The original `bug.js` code increments `i` before checking the loop condition. If `i` is 4, the loop continues and `i` is incremented to 5. Then, in the next iteration, the condition will be `i < 10`, which still holds true as `i` is 5. This creates an infinite loop.