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
    // This example shows how to identify particular types of numbers in a given interval.
    // Import necessary DApp resources, scripts, assets and modules needed for the task.

    const { isOdd } = require('./scripts/arithmetics/isOdd/isOdd'); // Identify odd numbers in an interval
    const { isSquare } = require('./scripts/arithmetics/isSquare/isSquare'); // Identify square numbers in an interval

    // Iterate through message        
    for(let i=(2+(params.tPartition-params.xPartition));i<params.tPartition;i++){

        // Test value of processed result  
        if((isSquare(i)==true) && (isOdd(i)==true)){ 

            // Store successful results in 'results' variable
            //
            // For Example;
            //
            // var results = {
            //    param1: value1,
            //    param2: value2,
            //    param3: value3,
            //    ... etc,
            // };
               
            results[i]=i
   
        }        

    }

/*********************************************************************************/
                 /* STOP WRITING YOUR DAPP CODE UP UNTIL HERE.*/
/*********************************************************************************/                 

// Results must return valid JSON Object
return results;

};

// Export DApp
module.exports={DApp};