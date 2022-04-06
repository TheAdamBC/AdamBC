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
# Counting the number of unique colors inside an image.
# Import necessary DApp resources, scripts, assets and modules needed for the task.
from PIL import Image
import numpy as np
import cv2
import os

# Variable to store color count
colorCount = {'colorCount':0}

fileName = params['uParams'][0]['parameter2'] # Capture name of file
fileData = params['uParams'][0]['parameter1'] # Capture file

# Convert Image to Numpy array
#im = np.array(fileData)

# Save file to local directory
#cv2.imwrite(os.path.join('assets/media/', f'{fileName}'), im)
#cv2.waitKey(0)

# Load image and convert to HSV
img = Image.open(f'assets/media/{fileName}')

unique_colors = {img.getpixel((x,y)) for x in range(img.size[0]) for y in range(img.size[1])}

# Now print percentage of green pixels
colorCount['colorCount']=(len(unique_colors))

# Return results of processing
results=colorCount

#*********************************************************************************/
#                 /* STOP WRITING YOUR DAPP CODE UP UNTIL HERE.*/
#*********************************************************************************/                 

# Results must return valid JSON Object
print(results)
sys.stdout.flush()

