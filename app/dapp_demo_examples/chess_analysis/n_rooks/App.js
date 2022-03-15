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
    // This demo example shows how to build a DApp that can find possible solutions for the famous N-Rooks Chess Paradox. 
    // The challenge involves placing N Rooks on an N x N chessboard such that no two Rooks threaten each other. 
    // The solution requires that no two Rooks share the same row or column.

    // Map Rooks position
    class RookPosition {
        constructor(rowIndex, columnIndex) {
          this.rowIndex = rowIndex;
          this.columnIndex = columnIndex;
        }
    }
      
    // Detect safety of a new Rook placement
    function isSafe(rooksPositions, rowIndex, columnIndex) {
        const newRookPosition = new RookPosition(rowIndex, columnIndex);
      
        for (let rookIndex = 0; rookIndex < rooksPositions.length; rookIndex += 1) {
          const currentRookPosition = rooksPositions[rookIndex];
      
          if (currentRookPosition &&
             (newRookPosition.columnIndex === currentRookPosition.columnIndex
              || newRookPosition.rowIndex === currentRookPosition.rowIndex)) {
            return false;
          }
        }
        return true;
    }
      
    // Place new Rook
    function nRooksRecursive(solutions, previousRooksPositions, rooksCount, rowIndex) {
        const rooksPositions = [...previousRooksPositions].map((rookPosition) => {
          return !rookPosition ? rookPosition : new RookPosition(
            rookPosition.rowIndex,
            rookPosition.columnIndex,
          );
        });
      
        if (rowIndex === rooksCount) {
          solutions.push(rooksPositions);
          return;
        }
      
        for (let columnIndex = 0; columnIndex < rooksCount; columnIndex += 1) {
          if (isSafe(rooksPositions, rowIndex, columnIndex)) {
            rooksPositions[rowIndex] = new RookPosition(rowIndex, columnIndex);
            nRooksRecursive(solutions, rooksPositions, rooksCount, rowIndex + 1);
            rooksPositions[rowIndex] = null;
          }
        }
        return;
    }
      
    // N-Rooks main function
    function nRooks(rooksCount) {
        let rooksPositions = [];
        let solutions = [];
      
        nRooksRecursive(solutions, rooksPositions, rooksCount, 0);
        
        return solutions
    }
      
    // Pass results        
    results = nRooks(params.uParams[0].parameter1);

/*********************************************************************************/
                 /* STOP WRITING YOUR DAPP CODE UP UNTIL HERE.*/
/*********************************************************************************/                 

// Results must return valid JSON Object
return results;

};

// Export DApp
module.exports={DApp};