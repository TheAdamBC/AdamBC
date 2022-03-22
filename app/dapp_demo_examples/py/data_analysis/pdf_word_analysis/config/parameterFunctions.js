
/* Define your DApp's function parameters.
 * REMEMBER: The function parameter MUST return a JavaScript Object. 
 */
const fs = require('fs');

// Locate Dataset Route
const { resolve } = require('path');
const pdfParse = require('pdf-parse'); // Library for reading PDF data

// Create parameter function
const parameterFunctions = async (configs,log) => {

/**
 * - 'configs' carries configurations files from 'config.json'.
 * - 'log' carries state of computation from 'log.txt'.  
 * - Parameter functions must always return a JSON Object.
 */

// Function to read dataset
async function readDataset() {

    var currentPage = log.tPartition; // Identify current page by reading config
    const numberOfPages = 5; // Number of pages
    
    // Apply the above logic
    if((configs.running!=true) && (Number(currentPage)>Number(numberOfPages))){

        currentPage = 1; // Identify current page by reading config

    }

    // Fetch dataset using new 'currentPage' number
    const buffer = fs.readFileSync(resolve(`./app/assets/dataset/pdf${currentPage}.pdf`));

    try { 

        // Parse data buffer to pdf
        const data = await pdfParse(buffer);
        return data.text; // Read actual data
        
    }

    catch (err) { 
        return err;
    }
    
}

// Read data from dataset
let dataset = await readDataset(); 

// Create parameter function
return {

    // Define function parameters
    
    // Parameter 1
    parameter1: dataset // set dataset as value of parameter1

}

}

// Export Parameter function as JSON Object
module.exports={parameterFunctions};

