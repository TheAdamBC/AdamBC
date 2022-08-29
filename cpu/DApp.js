
// Import configuration events
require("dotenv").config(); 
const {encryptPWD} = require('../helpers/encrypt'); // Password encryption
const {DApp} = require('../app/App'); // Import App
const spawn = require("child_process").spawn;
const { resolve } = require('path');
const processorRoute = resolve('./app/App.py'); // Locate python app

// Listened to message from CPU:
// Captured Parameters passed from Central Processing Unit (CPU)
process.on('message', async (params) => {

    // Execute DApp parameters
    var app ='';
    if(params.lang=='py'){
    app = await pyDApp();
    async function pyDApp (){
        // Launch python app
        const pythonProcess = spawn('py',[`${processorRoute}`]);

        // Pass data to app
        pythonProcess.stdin.write(JSON.stringify(params) + '\n');
        
        return new Promise((resolve,reject)=>{
            // Receive messages from python app
            pythonProcess.stdout.on("data", (data) =>{
                // Convert Python Dictionary/JSON to JavaScript Object
                resolve(data.toString());
            });
              
            // Read errors from python app
            pythonProcess.stderr.on("data", (data) =>{
                reject(data.toString());
            });
        });
    }
    }
    else {
    app = await DApp(params);
    }

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
        results: JSON.parse(app) // Results
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
            lang: params.lang, // Language type
            uParams: newUparams // Custom Developer defined Parameters
        }
    }; 

    // Merge data output
    let dataOutput = {...config, ...result, ...log};

    // Process Output
    process.send(JSON.stringify(dataOutput)); // Send results back to CPU main processor
    
});

