#**
# * The Decentralized App (DApp):
# * This is where the App developer writes the decentralized app.
# * Make sure the code is written within the specified space region.
# * 
# * IMPORTANT: 
# * 1. Developer DApp CODE MUST BE WRITTEN WITHIN SPECIFIED SPACE REGION.
# * 2. DApp MUST return values through the 'results' variable.
# * 3. DApp MUST RETURN A JSON Object.
# * 4. DApp data crunching should not exceed 100MB of Data per peer task.
# * 5. If you change the name of 'results', make sure to change it at DApp's 'return results' code.
# * 
# *

import sys, json

results = {} # Storage for successful results.

params = json.loads(sys.argv[1]) # Load parameters values (params) to process

#*********************************************************************************/
#                 /* START WRITING YOUR DAPP CODE BEGINNING HERE: */
#*********************************************************************************/

# EXAMPLE:
# Image Color occurrence Analysis.
# This DApp example shows how to analyse and rank color occurrences in images in a given file directory.
# Import necessary DApp resources, scripts, assets and modules needed for the task.

import cv2

fileName = params['uParams'][0]['parameter2'] # Capture name of file

with open('assets/media/{fileName}',"wb") as f: # Save file to local directory
    f.write(params['uParams'][0]['parameter1'])

img = cv2.imread('assets/colorphotos/{fileName}', cv2.IMREAD_UNCHANGED) # Load file to OpenCV

# get dimensions of image
dimensions = img.shape
 
# height, width, number of channels in image
height = img.shape[0]
width = img.shape[1]
channels = img.shape[2]

#*********************************************************************************/
#                 /* STOP WRITING YOUR DAPP CODE UP UNTIL HERE.*/
#*********************************************************************************/                 

# Results must return valid JSON Object
print(results)
sys.stdout.flush()

