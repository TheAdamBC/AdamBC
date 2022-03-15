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
    // Image Type Analysis.
    // This DApp example shows how to analyse image formats in relation to their dimensions (height and width) in a photo directory.
    // We then calculate the area occupied by the image in each case.
    // The aim is to identify which image formats overall have a larger area (height x width) and which have the smallest dimensions.
    // Import necessary DApp resources, scripts, assets and modules needed for the task.

    const sizeOf = require('image-size'); // Module to fetch image height and width
    const fs = require('fs'); // Import file system module
    var path = require("path");

    // Capture name of file
    let fileName =params.uParams[0].parameter2;

    fs.writeFileSync(`app/assets/media/${fileName}`, params.uParams[0].parameter1, "binary");

    // Get image name
    let imageName = path.basename(`app/assets/media/${fileName}`);
    
    // Get image format
    let imageFormat = imageName.split('.').pop();

    // Function to encode and analyse the images.
    function imageParameters() {

        // Store image dimensions
        var imageDimensions = {
            width: 0,
            height: 0,
            area:0,
            type:''
        };

        const dimensions = sizeOf(`app/assets/media/${fileName}`);

        // Capture image dimensions
        imageDimensions.width = dimensions.width; 
        imageDimensions.height = dimensions.height; 
        imageDimensions.area = (dimensions.height*dimensions.width); 
        imageDimensions.type = imageFormat; 

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