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
# Counting the number of unique colors inside an image.
# Import necessary DApp resources, scripts, assets and modules needed for the task.
from PIL import Image
import numpy as np
import cv2
import os
import base64

# Variable to store color count
colorCount = {'colorCount':0}

fileName = params['uParams'][0]['parameter2'] # Capture name of file
fileData = base64.b64decode(params['uParams'][0]['parameter1']) # Capture file

# Parse image file to Numpy array
img_buffer = np.frombuffer(fileData, dtype=np.uint8)
im = cv2.imdecode(img_buffer, flags=1)

# Save file to local directory
try:
    cv2.imwrite(os.path.join('assets/media/', f'{fileName}'), im)
    cv2.waitKey(0)
except:
    print('Problem saving file!')

# Load image and convert to HSV
try:
    img = Image.open(f'assets/media/{fileName}')
except:
    print('Error processing file!')

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

