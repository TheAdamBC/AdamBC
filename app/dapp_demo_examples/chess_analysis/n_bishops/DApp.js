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
    // This demo example shows how to build a DApp that can find possible solutions for the famous N-Bishops Chess Paradox. 
    // The challenge involves placing N Bishops on an N x N chessboard such that no two Bishops threaten each other. 
    // The solution requires that no two Bishops share the same diagonal.

    // Map Bishop's position
    class BishopPosition {
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
      
    // Detect safety of a new Bishop placement
    function isSafe(bishopsPositions, rowIndex, columnIndex) {
        const newBishopPosition = new BishopPosition(rowIndex, columnIndex);
      
        for (let bishopIndex = 0; bishopIndex < bishopsPositions.length; bishopIndex += 1) {
          const currentBishopPosition = bishopsPositions[bishopIndex];
      
          if (currentBishopPosition &&
             (newBishopPosition.leftDiagonal === currentBishopPosition.leftDiagonal
              || newBishopPosition.rightDiagonal === currentBishopPosition.rightDiagonal)) {
            return false;
          }
        }
        return true;
    }
      
    // Place new Bishop
    function nBishopsRecursive(solutions, previousBishopsPositions, bishopsCount, rowIndex) {
        const bishopsPositions = [...previousBishopsPositions].map((bishopPosition) => {
          return !bishopPosition ? bishopPosition : new BishopPosition(
            bishopPosition.rowIndex,
            bishopPosition.columnIndex,
          );
        });
      
        if (rowIndex === bishopsCount) {
          solutions.push(bishopsPositions);
          return;
        }
      
        for (let columnIndex = 0; columnIndex < bishopsCount; columnIndex += 1) {
          if (isSafe(bishopsPositions, rowIndex, columnIndex)) {
            bishopsPositions[rowIndex] = new BishopPosition(rowIndex, columnIndex);
            nBishopsRecursive(solutions, bishopsPositions, bishopsCount, rowIndex + 1);
            bishopsPositions[rowIndex] = null;
          }
        }
        return;
    }
      
    // N-Bishops main function
    function nBishops(bishopsCount) {
        let bishopsPositions = [];
        let solutions = [];
      
        nBishopsRecursive(solutions, bishopsPositions, bishopsCount, 0);
        
        return solutions
    }
      
    // Pass results        
    results = nBishops(params.uParams[0].parameter1);

/*********************************************************************************/
                 /* STOP WRITING YOUR DAPP CODE UP UNTIL HERE.*/
/*********************************************************************************/                 

// Results must return valid JSON Object
return results;

};

// Import configuration events
require("dotenv").config(); 
const {encryptPWD} = require('../helpers/encrypt'); // Password encryption

// Listened to message from CPU:
// Captured Parameters passed from Central Processing Unit (CPU)
process.on('message', async (params) => {

    // Execute DApp parameters
    const app = await DApp(params);

    // Generate new custom parameters
    var newUparams={};
    var parameterFunctions=params.uParams[0];
    
    // Reject large file types
    if(Object.keys(parameterFunctions)){
        for (var prop in parameterFunctions){ 
            if((typeof parameterFunctions[prop] =='string' || typeof parameterFunctions[prop] =='number' || typeof parameterFunctions[prop] =='boolean') && parameterFunctions[prop].toString().length<25){
                newUparams[prop]=parameterFunctions[prop];
            } else {
                newUparams[prop]='';
            }
        }
    }

    // Define configuration settings
    const config = { 
        configs:{    
            builderID: params.builderID, // Initiator ID
            workID: process.env.WORK_ID, // Work Instance ID
            workerID: process.env.WORKER_ID, // Worker ID
            TaskID: params.TaskID, // Task ID
            TimeCompleted: new Date(), // Timestamp task was completed
            running: params.running, // Is task actively running
            cryptoID: encryptPWD(process.env.CRYPTO_ID), // Work done signature - confirms identity of worker
            workerContact: process.env.WORKER_CONTACT // Contact of worker

        }
    };

    // Aggregate results from processing
    const result = {     
        results: app // Results
    }; 

    // Define processing parameters
    const log = { 
        logs:{    
            oPartition: params.oPartition, // Primary Iterator
            xPartition: params.xPartition, // Secondary Iterator
            iPartition: params.iPartition, // Initial Iterator
            tPartition: params.tPartition, // Transitional Iterator
            Timestamp: new Date(), // Timestamp for latest iteration
            tDuration: params.tDuration, // Duration
            type: params.type, // App type
            uParams: newUparams // Custom Developer defined Parameters
        }
    }; 

    // Merge data output
    let dataOutput = {...config, ...result, ...log};

    // Process Output
    process.send(JSON.stringify(dataOutput)); // Send results back to CPU main processor
    
});

