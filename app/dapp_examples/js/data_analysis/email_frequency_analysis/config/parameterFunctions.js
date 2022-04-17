
/* Define your DApp's function parameters.
 * REMEMBER: The function parameter MUST return a JavaScript Object. 
 */
const fs = require('fs');

// Locate Dataset Route
const { resolve } = require('path');


// Create parameter function
const parameterFunctions = async (configs,log) => {

/**
 * - 'configs' carries configurations files from 'config.json'.
 * - 'log' carries state of computation from 'log.txt'.  
 * - Parameter functions must always return a JSON Object.
 */

// Function to read dataset
function readDataset() {

    var currentPage = log.tPartition; // Identify current page by reading config
    const numberOfPages = 10; // Number of pages
    
    // Apply the above logic
    if((configs.running!=true) && (Number(currentPage)>Number(numberOfPages))){

        currentPage = 1; // Identify current page by reading config

    }

    try { 

        // Fetch dataset using new 'currentPage' number
        return fs.readFileSync(resolve(`./app/assets/dataset-emails/my-files${currentPage}.txt`),  'utf8');
    }

    catch (err) { 
        return err;
    }
    
}

// Read data from dataset
let dataset = readDataset();

// Create parameter function
return {

    // Define function parameters
    
    // Parameter 1
    parameter1: dataset // set dataset as value of parameter1

}

}

// Export Parameter function as JSON Object
module.exports={parameterFunctions};

