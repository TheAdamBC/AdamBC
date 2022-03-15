/**
 * The Decentralized App (DApp):
 * This is where the App developer writes the decentralized app.
 * Make sure the code is written within the specified space region.
 * 
 * IMPORTANT: 
 * 1. Developer DApp CODE MUST BE WRITTEN WITHIN SPECIFIED SPACE REGION.
 * 2. DApp MUST return values through the 'results' variable.
 * 3. DApp MUST RETURN A JSON Object.
 * 4. DApp data crunching should not exceed 100MB of Data per peer task.
 * 5. If you change the name of 'results', make sure to change it at DApp's 'return results' code.
 * 
 */

// The DApp Engine
const DApp = async (params) => {

    // Storage for successful results.
    var results = {}; 

/*********************************************************************************/
                 /* START WRITING YOUR DAPP CODE BEGINNING HERE: */
/*********************************************************************************/

    // EXAMPLE:
    // This demo example shows how to build a DApp that can find possible solutions for the famous N-Queens Chess Paradox. 
    // The challenge involves placing N queens on an N x N chessboard such that no two Queens threaten each other. 
    // The solution requires that no two queens share the same row, column or diagonal.

    // Map Queens position
    class QueenPosition {
        constructor(rowIndex, columnIndex) {
          this.rowIndex = rowIndex;
          this.columnIndex = columnIndex;
        }
      
        get leftDiagonal() {
          return this.rowIndex - this.columnIndex;
        }
      
        get rightDiagonal() {
          return this.rowIndex + this.columnIndex;
        }
    }
      
    // Detect safety of a new Queen placement
    function isSafe(queensPositions, rowIndex, columnIndex) {
        const newQueenPosition = new QueenPosition(rowIndex, columnIndex);
      
        for (let queenIndex = 0; queenIndex < queensPositions.length; queenIndex += 1) {
          const currentQueenPosition = queensPositions[queenIndex];
      
          if (currentQueenPosition &&
             (newQueenPosition.columnIndex === currentQueenPosition.columnIndex
              || newQueenPosition.rowIndex === currentQueenPosition.rowIndex
              || newQueenPosition.leftDiagonal === currentQueenPosition.leftDiagonal
              || newQueenPosition.rightDiagonal === currentQueenPosition.rightDiagonal)) {
            return false;
          }
        }
        return true;
    }
      
    // Place new Queen
    function nQueensRecursive(solutions, previousQueensPositions, queensCount, rowIndex) {
        const queensPositions = [...previousQueensPositions].map((queenPosition) => {
          return !queenPosition ? queenPosition : new QueenPosition(
            queenPosition.rowIndex,
            queenPosition.columnIndex,
          );
        });
      
        if (rowIndex === queensCount) {
          solutions.push(queensPositions);
          return;
        }
      
        for (let columnIndex = 0; columnIndex < queensCount; columnIndex += 1) {
          if (isSafe(queensPositions, rowIndex, columnIndex)) {
            queensPositions[rowIndex] = new QueenPosition(rowIndex, columnIndex);
            nQueensRecursive(solutions, queensPositions, queensCount, rowIndex + 1);
            queensPositions[rowIndex] = null;
          }
        }
        return;
    }
      
    // N-Queens main function
    function nQueens(queensCount) {
        let queensPositions = [];
        let solutions = [];
      
        nQueensRecursive(solutions, queensPositions, queensCount, 0);
        
        return solutions
    }
      
    // Pass results        
    results = nQueens(params.uParams[0].parameter1);

/*********************************************************************************/
                 /* STOP WRITING YOUR DAPP CODE UP UNTIL HERE.*/
/*********************************************************************************/                 

// Results must return valid JSON Object
return results;

};

// Export DApp
module.exports={DApp};