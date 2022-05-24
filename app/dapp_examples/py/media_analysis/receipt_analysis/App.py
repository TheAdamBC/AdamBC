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
# Analysing Image Receipts
# Import necessary DApp resources, scripts, assets and modules needed for the task.
from PIL import Image
import numpy as np
import cv2
import os
import base64
import pytesseract

# Path to where tesseract is installed on your system
pytesseract.pytesseract.tesseract_cmd = (r'C:\Program Files\Tesseract-OCR\tesseract.exe')

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

# Load image and convert to HSV
try:
    img = cv2.imread(f'app/assets/media/{fileName}')
except:
    print('Error processing file!')

#get gray scale
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

#noise removal
noise = cv2.medianBlur(gray,3)

thresh = cv2.threshold(noise,0,255,cv2.THRESH_BINARY | cv2.THRESH_OTSU)[1]

# Create horizontal kernel and dilate to connect text characters
kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (5,3))
dilation = cv2.dilate(thresh, kernel, iterations=5)

# Find contours and filter using aspect ratio
# Remove non-text contours by filling in the contour
# Looping through the identified contours
# Then rectangular part is cropped and passed on
# to pytesseract for extracting text from it
# Extracted text is then written into the text file
contours, hierarchy = cv2.findContours(dilation, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)

# Creating a copy of image
im2 = img.copy()

# Remove contours from image
for c in contours:
    x, y, w, h = cv2.boundingRect(c)

    # Drawing a rectangle on copied image
    rect = cv2.rectangle(im2, (x, y), (x + w, y + h), (0, 255, 0), 2)
     
    # Cropping the text block for giving input to OCR
    cropped = im2[y:y + h, x:x + w]

    # The cropped image can have weird shape and tesseract OCR is more accurate if we transform the cropped image as followed
    cropped = cv2.resize(cropped, None, fx=1.2, fy=1.2, interpolation=cv2.INTER_CUBIC) 
    cropped = cv2.cvtColor(cropped, cv2.COLOR_BGR2GRAY)
    
    # Extract text from receipt using tesseract
    # Apply OCR on the cropped image
    try:
        text = pytesseract.image_to_string(cropped, lang='eng')
    except:
        print('Problem extracting text from image!')

# Function to analyse image text found
def countWords(A):
    dic={}
    for x in A:
        if not x in dic:
            dic[x]=A.count(x)
    return dic

# Return results of processing
results=countWords(text.split())

#*********************************************************************************/
#                 /* STOP WRITING YOUR DAPP CODE UP UNTIL HERE.*/
#*********************************************************************************/                 

# Results must return valid JSON Object
print(results)
sys.stdout.flush()

