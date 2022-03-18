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
    // Email Identification.
    // This DApp example shows how to analyse words and detect emails contained in a dataset sent by a peer admin.
    // Import necessary DApp resources, scripts, assets and modules needed for the task.

    // Function for mapping word frequency occurrence in a sentence.
    function emailFrequency(string) {

        // Convert strings to lower case so that word comparison isn't case sensitive
        // split string into individual words.

        var words = string.toLowerCase().split(/\s/);
        var frequencyPattern = {};

        words.forEach(function(w) {

            // Check if word is an email
            if(isEmail(w)){
                
                // count frequency occurrence
                frequencyPattern[w] = frequencyPattern[w]?frequencyPattern[w]+1:1;

            }

        });

        // Return analysis
        return frequencyPattern;

    }

    // Function to detect an email address
    function isEmail(element){      
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(element); 
    }

    // Print results
    results = emailFrequency(params.uParams[0].parameter1) // Analyse words in the dataset (parameter1)

/*********************************************************************************/
                 /* STOP WRITING YOUR DAPP CODE UP UNTIL HERE.*/
/*********************************************************************************/                 

// Results must return valid JSON Object
return results;

};

// Export DApp
module.exports={DApp};