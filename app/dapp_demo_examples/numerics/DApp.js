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

    //const { isPrime } = require('./scripts/arithmetics/isPrime/isPrime'); // Identify prime numbers in an interval
    //const { isEven } = require('./scripts/arithmetics/isEven/isEven'); // Identify even numbers in an interval
    const { isOdd } = require('./scripts/arithmetics/isOdd/isOdd'); // Identify odd numbers in an interval
    //const { isPerfect } = require('./scripts/arithmetics/isPerfect/isPerfect'); // Identify perfect numbers in an interval
    const { isSquare } = require('./scripts/arithmetics/isSquare/isSquare'); // Identify square numbers in an interval

    // Iterate through message        
    for(let i=(2+(params.tPartition-params.xPartition));i<params.tPartition;i++){

        // Test value of processed result  
        if((isSquare(i)==true) && (isOdd(i)==true)){ 
        //if(isSquare(i)==true){          
        //if(isPrime(i)==true){
        //if(isEven(i)==true){
        //if(isOdd(i)==true){
        //if(isPerfect(i)==true){

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

