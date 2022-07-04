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
# Analysing objects appearing inside an image.
# Import necessary DApp resources, scripts, assets and modules needed for the task.
from PIL import Image
import numpy as np
import cv2
import os
import base64

# Variable to store objects
objects= {}

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

classes_names = open(r'D:\Software\Yolo\coco.names').read().strip().split('\n')

net_yolo = cv2.dnn.readNetFromDarknet(r'D:\Software\Yolo\yolov3.cfg', r'D:\Software\Yolo\yolov3.weights')
net_yolo.setPreferableBackend(cv2.dnn.DNN_BACKEND_OPENCV)
#net_yolo.setPreferableTarget(cv2.dnn.DNN_TARGET_CPU)

ln = net_yolo.getLayerNames()
ln = [ln[i - 1] for i in net_yolo.getUnconnectedOutLayers()]

blob_img = cv2.dnn.blobFromImage(img, 1/255.0, (416, 416), swapRB=True, crop=False)

net_yolo.setInput(blob_img)
outputs = net_yolo.forward(ln)

boxes = []
confidences = []
classIDs = []
h, w = img.shape[:2]

for output in outputs:
    for detection in output:
        scores_yolo = detection[5:]
        classID = np.argmax(scores_yolo)
        confidence = scores_yolo[classID]
        if confidence > 0.5:
            box_rect = detection[:4] * np.array([w, h, w, h])
            (centerX, centerY, width, height) = box_rect.astype("int")
            x_c = int(centerX - (width / 2))
            y_c = int(centerY - (height / 2))
            box_rect = [x_c, y_c, int(width), int(height)]
            boxes.append(box_rect)
            confidences.append(float(confidence))
            classIDs.append(classID)

indices_yolo = cv2.dnn.NMSBoxes(boxes, confidences, 0.5, 0.4)

if len(indices_yolo) > 0:
    for i in indices_yolo.flatten():
        objects[classes_names[classIDs[i]]]=confidences[i]

# Return results of processing
results=objects

#*********************************************************************************/
#                 /* STOP WRITING YOUR DAPP CODE UP UNTIL HERE.*/
#*********************************************************************************/                 

# Results must return valid JSON Object
print(results)
sys.stdout.flush()

