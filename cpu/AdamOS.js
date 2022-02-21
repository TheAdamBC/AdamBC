/**
 * Adam Operating System (Adam OS):
 * This powers on the computer, initializes parameters, and ignites data processing.
 * 
 */

// Import processor
const { CPU } = require('./Processor');
const fetch = require('node-fetch'); // data fetch feature
const fs = require('fs');
require("dotenv").config(); // Environment event handler

// Start Adam OS
const AdamOS = async (req, res, next) => {

    // Fetch configurations from config URL
    var uRL = 'http://localhost:6553/configs';

    // Check if computer in Peer Mode
    if(process.env.PEER_MODE=='YES'){

        // If computer in peer mode, read peer computing configurations
        fs.readFile('./peers/config/pcu/' + 'config.json', 'utf8', (err, data) => {
            
            // Parse data to JSON        
            if(err) console.log(err);
            let pcu = JSON.parse(data);
            
            // First check if execution is too early or too late
            // ........................
            // ........................
            // ........................

            // Else, get new host IP
            let hostIP = pcu['PCU'].HostIP;

            // Create new URL and replace remote URL with new URL
            uRL=`http://${hostIP}:6553/configs`;

            // ........................
            // ........................
            // ........................

        });
    }

    // Fetch processing configurations
    let params = await fetch(uRL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            }})
            .then(response=>response.json())
            .then(data=> {
               return data
            })
            .catch(err => console.log(err));

    // Check if task is still activity running
    // Parse data to JSON   
    if(params.running=="done"){

        // Task has completed
        res.redirect('/done');

    } else {


    // Fetch Central Processing unit on each process fragment
    const adam = new CPU(params);

    // Start Adam BC
    //adam.startComputer(res,req,next) // Retriggger start again
    adam.startComputer()

    // Return results
    return next();
    }

};

module.exports={AdamOS}

