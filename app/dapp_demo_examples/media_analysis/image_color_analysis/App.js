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

// Export DApp
module.exports={DApp};