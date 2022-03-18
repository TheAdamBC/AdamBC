/* Define your DApp's function parameters.
 * REMEMBER: The parameter function MUST return a JavaScript Object. 
 */

// Create parameter function
const parameterFunctions = async (configs,log) => {

    /**
    * - 'configs' carries configurations files from 'config.json'.
    * - 'log' carries state of computation from 'log.txt'.  
    * - Parameter functions must always return a JSON Object.
    */
    
    let value1 = 0; // value of parameter 1
    
    let value2 = 0; // value of parameter 2
    
    let value3 = 0; // value of parameter 3
    
    // Create Parameter Function
    return {
    
        // Define function's parameters
        
        // Parameter 1
        parameter1: value1, // Set value of parameter 1
    
        // Parameter 2
        parameter2: value2, // Set value of parameter 2
    
        // Parameter 3
        parameter3: value3 // Set value of parameter 3
    
    }
    
    }
    
    // Export Parameter function as JSON Object
    module.exports={parameterFunctions};
    
