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
    // Image Color occurrence Analysis.
    // This DApp example shows how to analyse and rank color occurrences in images in a given file directory.
    
    // Import necessary DApp resources, scripts, assets and modules needed for the task.

    const fs = require('fs'); // Import file system module
    const path = require('path');
    const getColors = require('get-image-colors'); // Module to get image colors

    // Capture name of file
    let fileName =params.uParams[0].parameter2;

    fs.writeFileSync(`app/assets/media/${fileName}`, params.uParams[0].parameter1, "binary");

    // Function to analyse and rank colors occurrence in the image.
    async function imageColors() {

        // limit colors to 25
        const options = {
            count: 25,
            type: 'image/png'
        }
        
        // Get colors
        let getcolors = await getColors(path.join(__dirname, `assets/colorphotos/${fileName}`), options).then(colors => {
            return colorFrequency(colors.map(color => color.hex()));
        });   

        // Return analysis
        return getcolors;

    }

    // Function for mapping color frequency occurrence in an image.
    function colorFrequency(colors) {
        
        // Color frequency rank store
        var colorRank = {};
        
        colors.forEach(function(c) {
            
            // count color frequency occurrence
            colorRank[c] = colorRank[c]?colorRank[c]+1:1;
        
        });
        
        // Return analysis
        return colorRank;
    }

    // Print results
    results = await imageColors(); // Analyse data in image file

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

