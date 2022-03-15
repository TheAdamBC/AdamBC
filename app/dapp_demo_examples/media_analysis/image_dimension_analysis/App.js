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
    // Image Dimensions Analysis.
    // This DApp example shows how to analyse image dimensions (height and width) in a photo directory.
    // We then calculate the area occupied by the image (height x width) in each case.
    // Import necessary DApp resources, scripts, assets and modules needed for the task.

    const sizeOf = require('image-size'); // Module to fetch image height and width
    const fs = require('fs'); // Import file system module

    // Capture name of file
    let fileName =params.uParams[0].parameter2;

    fs.writeFileSync(`app/assets/media/${fileName}`, params.uParams[0].parameter1, "binary");

    // Function to encode and analyse the images.
    function imageParameters() {

        // Store image dimensions
        var imageDimensions = {
            width: 0,
            height: 0,
            area:0
        };

        const dimensions = sizeOf(`app/assets/media/${fileName}`);

        // Capture image dimensions
        imageDimensions.width = dimensions.width; 
        imageDimensions.height = dimensions.height; 
        imageDimensions.area = (dimensions.height*dimensions.width); 

        // Return analysis
        return imageDimensions;

    }

    // Print results
    results = imageParameters(); // Analyse data in image file

/*********************************************************************************/
                 /* STOP WRITING YOUR DAPP CODE UP UNTIL HERE.*/
/*********************************************************************************/                 

// Results must return valid JSON Object
return results;

};

// Export DApp
module.exports={DApp};