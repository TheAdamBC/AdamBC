/**
 * The Central Processing Unit (CPU):
 * This is the main processing unit of Adam BC.
 * It spawns all the necessary processes, and handles threads and message I/O.
 * 
 */

// Import multiprocessing modules
const { fork } = require('child_process');
const fetch = require('node-fetch'); // data fetch feature
const fs = require('fs');
require("dotenv").config(); // Environment event handler

// Find DApp Route
const { resolve } = require('path');
const processorRoute = resolve('./cpu/DApp.js');

// Get Decentralized App (DApp)
const getProcessor = fork(processorRoute);

// Create the Central Processing Unit (CPU)
class CPU {

    // Processing parameters
    constructor(start){
        this.start = start;
    }

    // Create chain computing engine
    startComputer (){
        let {start} = this;

            // Define parameter arguments to pass to DApp
            getProcessor.send(start);

    }
}

// Listen to new successful messages from DApp
getProcessor.on('message', async (msg) => {
    // Store in Blockchain
    // Store in MongoDB

    // Post data to back for analysis
    const uRL = 'http://localhost:6553/receive/';

    // Check if computer in Peer Mode        
    if(process.env.PEER_MODE=='YES'){

        // If computer in peer mode, read peer computing configurations
        fs.readFile('./peers/config/pcu/' + 'config.json', 'utf8', async (err, data) => {
            // Parse data to JSON
            let pcu = JSON.parse(data);
                
            // First check if execution is too early or too late
            // ........................
            // ........................           
            // ........................
    
            // Else, get new host IP            
            let hostIP = pcu['PCU'].HostIP;
    
            // Create peer's PCU URL 
            let pcURL=`http://${hostIP}:6553/peers/receive`;
    
            // ........................
            // ........................            
            // ........................

            // Send processed data to Peer Processing Unit
            let progress = await fetch(pcURL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({data: msg})
            }) 
            .then(() =>  {  
                return msg; 
            })
            .catch(err => console.log(err));  
     
        });            
    }

    // Store results in local file database 
    let progress = await fetch(uRL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({data: msg})
    }) 
    .then(() =>  {  
        return msg; 
    })
    .catch(err => console.log(err));  

    // Parse data to JSON
    let json = JSON.parse(progress);

    // Create notifications
    let notification =`Task (Id-:${json["configs"].TaskID}) has completed ..!`;
    
    // Data send for analysis.
    console.log(notification); 
    
    // Notify client when task completed
    //socket.emit('processing-progress', notification);

});

// Detect if process is complete
getProcessor.on('exit', function (code, signal) {
    console.log('Task terminated prematurely ..! ' /* + `Parameters: Worker ID: ${workerId}, Work ID: ${workId}, Params: ${params}` */);
});

// Export Blockchain
module.exports = {CPU};

