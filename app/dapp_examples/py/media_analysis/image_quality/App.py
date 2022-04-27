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

json_str = input() # Capture data input

params = json.loads(json_str) # Load parameters values (params) to process

#*********************************************************************************/
#                 /* START WRITING YOUR DAPP CODE BEGINNING HERE: */
#*********************************************************************************/

# EXAMPLE:
# Estimating the quality of images in a file directory (We'll consider image quality as calculating the area of an image divided by its size).
# Import necessary DApp resources, scripts, assets and modules needed for the task.
import numpy as np
import cv2
import os
import base64

# Variable to store image quality
imageQuality = {'imageQuality':0}

fileName = params['uParams'][0]['parameter2'] # Capture name of file
fileData = base64.b64decode(params['uParams'][0]['parameter1']) # Capture file

# Parse image file to Numpy array
img_buffer = np.frombuffer(fileData, dtype=np.uint8)
im = cv2.imdecode(img_buffer, flags=1)

# Save file to local directory
try:
    cv2.imwrite(os.path.join('app/assets/media/', f'{fileName}'), im)
    cv2.waitKey(0)
except:
    print('Problem saving file!')

try:
    img = cv2.imread(f'app/assets/media/{fileName}', cv2.IMREAD_UNCHANGED) # Load file to OpenCV
except:
    print('Error processing file!')

# get dimensions of image
dimensions = img.shape
 
# height, width, number of channels in image
height = img.shape[0]
width = img.shape[1]
size = os.path.getsize(f'app/assets/media/{fileName}')

# We'll consider image quality as calculating the area of an image divided by its size
imageQuality['imageQuality']=(size/(height*width))

# Return results of processing
results=imageQuality

#*********************************************************************************/
#                 /* STOP WRITING YOUR DAPP CODE UP UNTIL HERE.*/
#*********************************************************************************/                 

# Results must return valid JSON Object
print(results)
sys.stdout.flush()

