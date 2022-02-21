
/* Define your DApp's function parameters.
 * REMEMBER: The function parameter MUST return a JavaScript Object. 
 */

// Create parameter function
const parameterFunctions = async (configs,log) => {

/**
 * - 'configs' carries configurations files from 'config.json'.
 * - 'log' carries state of computation from 'log.txt'.  
 * - Parameter functions must always return a JSON Object.
 */

 var currentPage = log.tPartition; // Identify current page by reading config
 const numberOfPages = 8; // Number of pages
 
 // Apply the above logic
 if((configs.running!=true) && (Number(currentPage)>Number(numberOfPages))){

     currentPage = 1; // Identify current page by reading config

 }

// Create parameter function
return {

    // Define function parameters
    
    // Parameter 1
    parameter1: currentPage // set new parameter

}

}

// Export Parameter function as JSON Object
module.exports={parameterFunctions};

