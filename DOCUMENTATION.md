
# Adam Blockchain Computer (Adam BC):

The Adam Blockchain Computer (Adam BC) is a decentralized blockchain based super computer.

Data enthusiasts with excess or redundant computing power can pull their RAM resources together to create a global peer-to-peer computing network.

The peer-to-peer computer can then be used to crunch through complex datasets, like performing machine learning algorithms, data analysis and AI training.

Small AI Research labs, Individual scientists, Institutions on the continent that cannot afford tens of millions of dollars to hire large super computers can pool together a group of personal computers and use Adam BC's peer to peer computing mode to do hyper computations.

Consider Adam BC to be the _“poor person’s super computer”_.

Third-party Developers can also build Decentralized Apps (DApps) for the platform.

In short, Adam BC is a distributed peer to peer network of interconnected devices spread across the globe.

The Adam Blockchain Computer (Adam BC) is built and distributed under the BSD-3-Clause license.

<br/>

<br/>

## Table of Contents:

- [Install and Run Adam BC](#how-to-install-and-run-adam-bc)
- [How to Build DApps on Adam BC](#how-to-build-dapps-on-adam-bc)
- [Demo DApps](#adam-bc-demo-dapps)
- [Computing Networks](#computing-networks)
- [Terms of Use](#terms-of-use)
- [Developer Circle](#developer-circle)
- [Developer Community](#developer-community)

<br/>

<br/>

## How to Install and Run Adam BC:

Running Adam BC begins with installing it on your computer.

<br/>

## Adam BC Installation:

1. Download and install Node.JS on your computer (https://nodejs.org/en/download/current/).

2. Download and install Redis (For Linux Users). For Windows users, download and install Memurai which implements Redis with less hustle (https://www.memurai.com/get-memurai).

3. Download and install MongoDB on your computer (OPTIONAL).

4. Download or clone Adam BC from our github page. https://Github.com/TheAdamBC/AdamBC.

5. Open your favorite coding editor (We use VS Code).

6. Unzip the Adam BC folder you downloaded and open the folder in your code editor command terminal.

7. Open command prompt run the npm installation below to install Adam BC's dependency modules.
 
  <br/>

  _npm install_

  <br/>
 
 - NPM node module dependencies installed; 
  express, node-fetch, dotenv, ejs-lint, cookie-parser, socket.io, socket.io-client, bcrypt, uuid, sha256, crypto, redis, bull, jest, supertest, image-size, get-image-colors, wrtc, chalk, axios, commander, fs-extra, bonjour, inquirer, @babel/core, pdf-parse, IPFS.

8. Run the Adam BC project using the npm command below.

  <br/>

  _npm start_

  <br/>

  Adam BC comes pre-installed with a Decentralized App (DApp) called 'squares'. This DApp identifies odd square numbers between a given interval of counting numbers. The dapp's files are located inside the folder 'app/dapps/squares'.

  <br/>

  You could also run a specific Adam BC DApp in the Command Line Interface (CLI) using the 'Adam' keyword.

  First you'll need to install the 'Adam' command globally. To do this, run the command; 

  <br/>

  _npm install -g_

  <br/>
  
  Any commands listed in the 'bin' section of the 'package.json' file will be made available as command line interface applications. 
  
  You can now start a specific Adam BC DApp project at the command terminal using the 'Adam' keyword. Like below;

  <br/>

  _Adam start AppName_

  <br/>

9. If the run was successful, you should see the message "Adam BC DApp started successfully on Port 6553" in your console. Open your browser, visit 'http://localhost:6553'. You should see Adam BC's frontend page. 

10.  Set environment variables: Go to Adam BC settings, "Icon below the 'start' button" and set your preferred variables.

<br/>

_Adam BC has started:_

![Adam BC Initial Reset State](/public/assets/readme/Reset_800.png)

<br/>

_Adam BC Settings:_

![Adam BC Settings](/public/assets/readme/Settings_800.png)

<br/>

11. Finally, let's run the DApp start Processing Data. 

Open the UI by visiting the URL, 'http://localhost:6553' in your browser. 

Click the 'Start' button. The DApp will start processing data.

The results of the data processing are stored in the 'data.json' file under Adam BC's 'monitor/data' folder. 

Or you can check the data output API at the localhost URL: http://localhost:6553/data

<br/>

Adam BC can run in 3 computing modes: To change the mode, click the 'settings' icon under the 'start' button.

- The Custom Mode: Individual use, mostly for testing and developing personal DApps (Decentralized Apps).

- The Peer Mode: Limited peer to peer network of between 100-1000 connected computers (500 is the default).

- The Global Network Mode: Unlimited mode that connects the different peer computing groups together into one global computing network.

Adam BC runs in peer mode by default. To run a DApp in peer computing mode, go to 'settings' (icon under "start" button) and "Turn on Peer Mode". 

To change to network computing mode, go to 'settings' and "Turn on Network Mode". 

<br/>

12. Initializing DApp's Previous Data

You may need to initialize the DApp's previous data before running it again or when running a new DApp, this prevents data pollution. 

Go to settings and click "Initialize App (Custom)" if in custom mode. 

If in Peer Computing Mode, click "Initialize App (Peer)". 

When in peer mode, clicking the 'Time Countdown' will also initiate the DApp's previous data.

<br/>

_Adam BC in Running State:_

![Adam BC Running State](/public/assets/readme/Running_800.png)

<br/>

<br/>

## How to Build DApps on Adam BC:

Adam BC comes preinstalled with DApp example demos.

Check out Adam BC's demo DApps inside the directory: '[_app/dapp_demo_examples_](./app/dapp_demo_examples)'.

<br/>

Currently Adam BC DApps can be built in 3 types; 

- numbers (arithmetics-heavy app), 

- fs (file-heavy data app), 

- multimedia (image or video rich app).

<br/>

## Getting Started:

To create a DApp, first you'll need to install the 'Adam' command globally.

Run the command below in the Adam BC terminal; 

<br/>

_npm install -g_

<br/>
  
This will install 'Adam' as a command to run globally in the Command Line Interface (CLI). 

To create a new Adam BC dapp, you should then run the command.

<br/>

_Adam create AppName_

<br/>

Open the folder 'app/dapps/AppName' to find your newly created DApp's files. All your newly created dapps will be stored in the 'app/dapps' folder.

The command auto creates the DApp 'AppName' inside the 'app/dapps' folder with all its necessary files like 'DApp.js' inside, including the 'config' folder with all its neccessary files.

By default Adam BC creates an 'fs' DApp, a 'filesytem' heavy app.

To create a 'numerics' or 'multimedia' DApp, run the corresponding commands below.

<br/>

_Adam create -n AppName_

_Adam create -m AppName_

_Adam create -f AppName_

<br/>

'n' means your creating a 'numerics' heavy DApp.

'm' means your creating a 'multimedia' heavy DApp.

'f' means your creating a 'filesystem' heavy DApp.

<br/>

Additional custom CLI Commands:

<br/>

To create a 'PDF heavy' filesystem DApp, use the command below.

<br/>

_Adam create -p AppName_


<br/>

## Building an Adam BC DApp involves 3 steps:

1. Create the DApps configuration settings.

2. Create the DApp.

3. Task Data Output Analysis. 

<br/>

## 1. Create the DApps configuration settings.

The configuration settings is the trigger/engine that oversees the entire process of the DApps program execution.

Open the folder 'app/dapps/AppName/config' and you'll find three files;

- config.json, 

- parameterFunctions.js, and 

- log.txt. 

<br/>

## Config.json:

Open the file 'config.json'. 

This is the DApp engine.

The DApp engine is a JSON file that contains the parameters of the task to execute.

It's also the trigger that manages the entire processing task.

<br/>

The 'config.json' file looks like below.

``` json

{
    "builderID": "BUDXI-4565782-XVL",
    
    "TaskID": "TUD-7835640-JKL",

    "tDuration": 60,

    "oPartition": 30000,

    "xPartition": 1000,

    "iPartition": 0,

    "tPartition": 1000,

    "uParams": [],

    "running":false,

    "TimeStarted":"",

    "type":"fs"

}


```

<br/>

### Definitions:

<br/>

> builderID - MUST EXIST and is Autogenerated: 

- This is the ID of the designer of the Decentralized App (DApp). The researcher running the app.

<br/>

> taskID - MUST EXIST and is Autogenerated: 

- This is the unique identifier of the task being run on the platform.

<br/>

> tDuration (MINUTES) - MUST EXIST and is chosen by developer: 

- How long should the program run?

- Time Duration MUST BE DEFINED IN MINUTES.

- Therefore,

- 1 hr = 60 min

- 3 hrs = 60 * 3 = 180 min

- 10 hrs = 60 * 10 = 600 min

<br/>

> oPartition (Type: Positive Integer) - MUST EXIST and is chosen by developer: 

- This is the condition for reaching the total number of iterations. 

- Once oPartition is reached, program execution stops. In other words, iterate until 'oPartition' is reached. oPartition must be a Positive Integer. The Default oPartition is "20000".

<br/>

> xPartition (Type: Positive Integer) - MUST EXIST and is chosen by developer (xPartition MUST BE A DIVISOR/FACTOR of oPartition): 

- This splits the overall iterations into small parts that will be executed by individual devices on the Adam BC network.

- xPartition: 1000, means each device will execute upto 1000 iterations for each task they fetch, before fetching the next 1000, and so on. xPartition must be a Positive Integer. The Default xPartition is "1000".

<br/>

> iPartition (Type: Positive Integer) - MUST EXIST and is chosen by developer (iPartition, like xPartition, MUST BE A DIVISOR/FACTOR of oPartition, with the exception of xPartition being '0'):

- This defines the initial value where program execution must begin.

- The developer provides the initial values where program execution begins.

- iPartition: 0, means program execution starts with initial value 0. iPartition must be a Positive Integer. The Default oPartition is "0".

<br/>

> tPartition (Type: Positive Integer) - MUST EXIST and must be the same as xPartition at the beginning of program execution:

- tPartition is basically the inflexion point between two processing tasks, a transition being one semi-task to another.

- This defines the progress of program execution at time t.

- This variable is autogenerated after program execution begins and tracks the progress of processing.

<br/>

> uParams - Developer defined parameters.

- In addition to the 7 compulsory parameters defined, you the developer can still define other parameters should they be needed for your DApp.

- These parameters are defined under the 'uParams' field.

- For example, we can define 4 additional parameters in uParams; 
  
  parameter1: "", 
  
  parameter2: "",
  
  parameter3: "",
  
  parameter4: "",


- Defining Parameter functions as uParams:

- For complex DApps, using 'uParams' is the best way to send transitioning data from the admin node to the computating peers.

- 'uParams' are mostly used for sending constantly changing data to the node machines during computations. 

- The best way to do this is by defining 'parameter functions'.

<br/>

> running (Type: 'true', 'false', or 'done') - Task trigger: 

- The 'running' parameter indicates whether the task hasn't began running, is running or is complete.

- "running":"false" means the task hasn't began running.

- "running":"true" means the task is running.

- "running":"done" means the task is complete.

- The 'running' parameter MUST be 'false' by default before program execution begins. When processing begins, the parameter is automatically turned to 'true'.

<br/>

> TimeStarted (Type: Date):

- The time program execution started

<br/>

> Type (Type: String):

- This indicates the type of DApp you are building.

- Adam BC currently supports only 3 kinds of app designs: numbers, fs and multimedia.

- numbers: indicates that this is an arithmetics-heavy app.
- fs: indicates that this is a file-heavy data app. 
- multimedia: indicates that this is an image or video rich app.

<br/>

## Parameter Functions (parameterFunctions.js)

Parameter Functions are used to pass extra data to peer computing nodes.

A Parameter Function is a JSON Object returning function used to define and send constantly transitioning data, for example a new dataset, from the peer admin to the peer computing nodes.

The function receives 2 arguments as variables: 'configs' and 'log'. 

The 'configs' variable carries configurations from the 'config.json' file. 

The 'log' variable carries the state of computation from 'log.txt'.  

The variables are used to fetch data files.

<br/>

### IMPORTANT TO REMEMBER: 

The parameter function MUST return a JavaScript Object.

The default parameterFunctions.js Object looks like below:

<br/>

Example 1: Arithmetic variables.

The parameter function below shows how to pass a group of arithmetic variables to a computing peer. 

<br/>

See full example code under the folder 'app/dapp_demo_examples/data-analysis'.

``` javaScript

/* Define your DApp's function parameters.
 * REMEMBER: The parameter function MUST return a JavaScript Object. 
 */

// Create parameter function
const parameterFunctions = async (configs,log) => {

/**
* - 'configs' carries configurations files from 'config.json'.
* - 'log' carries state of computation from 'log.txt'.  
* - Parameter functions must always return a JSON Object.
*/
    
let value1 = 0; // value of parameter 1
    
let value2 = 0; // value of parameter 2
    
let value3 = 0; // value of parameter 3
    
// Create Parameter Function
return {
    
    // Define function's parameters
        
    // Parameter 1
    parameter1: value1, // Set value of parameter 1
    
    // Parameter 2
    parameter2: value2, // Set value of parameter 2
    
    // Parameter 3
    parameter3: value3 // Set value of parameter 3
    
}
    
}
    
// Export Parameter function as JSON Object
module.exports={parameterFunctions};

```

<br/>

The DApp developer can customize the object's methods to pass any data they desire back to computing peers - for example json data formats, texts, including binary data formats like photos, and videos etc.

The DApp developer can define as many as 10 Object method parameters.

<br/>

Example 2: Single Data File.

The parameter function below shows how to pass a dataset to a computing peer. 

In this case we read data from a file and set it as our new dataset to send to computing peers for analysis.

<br/>

See full example code under the folder 'app/dapp_demo_examples/data-analysis'.

``` javaScript

/* Define your DApp's function parameters.
 * REMEMBER: The function parameter MUST return a JavaScript Object. 
 */
const fs = require('fs');

// Locate Dataset Route
const { resolve } = require('path');

// Create parameter function
const parameterFunctions = async (configs,log) => {

/**
 * - 'configs' carries configurations from the 'config.json' file.
 * - 'log' carries the state of computation from the 'log.txt' file.  
 * - Parameter functions must always return a JSON Object.
 */

// Function to read dataset
function readDataset() {

    try { 
        return fs.readFileSync(resolve('./app/assets/dataset/my-file.txt'),  'utf8');
    }

    catch (err) { 
        return err;
    }
}

// Read data from dataset
let dataset = readDataset();

// Create parameter function
return {

    // Define function parameters
    
    // Parameter 1
    parameter1: dataset // set dataset as value of parameter1

}

}

// Export Parameter function as JSON Object
module.exports={parameterFunctions};

```

<br/>

The example reads and fetches a dataset from a file and passes it as 'parameter1' of the 'parameter function'.

Notice the ability to import and use any node or npm module. For this example we use node's built-in 'fs' file system and 'path' file location module to read the dataset file.

<br/>

Example 3: Multiple Data Files.

For a more complex use case, the parameter function object may need to read realtime computing configurations, then fetch a new dataset from a list of files based on these new configurations.

The parameter function below shows how to select a new data file from multiple data files, then pass it to a computing peer for processing. 

The data files are labeled `my-files1.txt, my-files2.txt, my-files3.txt, my-files4.txt, my-files5.txt, my-files6.txt, my-files7.txt, ...... etc`.

<br/>

See full example code under the folder 'app/dapp_demo_examples/data-analysis'.

``` javaScript


/* Define your DApp's function parameters.
 * REMEMBER: The function parameter MUST return a JavaScript Object. 
 */
const fs = require('fs');

// Locate Dataset Route
const { resolve } = require('path');

// Create parameter function
const parameterFunctions = async (configs,log) => {

/**
 * - 'configs' carries configurations from the 'config.json' file.
 * - 'log' carries the state of computation from the 'log.txt' file.  
 * - Parameter functions must always return a JSON Object.
 */

// Function to read dataset
function readDataset() {

    var currentPage = log.tPartition; // Identify current page by reading config
    const numberOfPages = 10; // Number of files
    
    // Apply the above logic
    if((configs.running!=true) && (Number(currentPage)>Number(numberOfPages))){

        currentPage = 1; // Identify current page by reading config

    }

    try { 

        // Fetch dataset using new 'currentPage' number
        return fs.readFileSync(resolve(`./app/assets/dataset/my-files${currentPage}.txt`),  'utf8');
    }

    catch (err) { 
        return err;
    }
    
}

// Read data from dataset
let dataset = readDataset();

// Create parameter function
return {

    // Define function parameters
    
    // Parameter 1
    parameter1: dataset // set dataset as value of parameter1

}

}

// Export Parameter function as JSON Object
module.exports={parameterFunctions};

```

<br/>

## Log.txt

(NO NEED TO EDIT THIS FILE.)

The 'log.txt' file is basically the exact copy of the 'config.json' file, except that it is a file in transition. The 'log.txt' keeps track of the current state of processing, recording the task execution progress. Notice that it has a 'Timestamp' parameter that doesn't exist in the 'config.json' file.

It is an autogenerated file and the developer DOES NOT need to alter anything in this file.

<br/>

The file looks like this while in transition;

``` json

{

    "builderID":"BUDXI-4565782-XVL",

    "TaskID":"TUD-7835640-JKL",

    "oPartition":30000,

    "xPartition":1000,

    "iPartition":0,

    "tPartition":11000,

    "Timestamp":"2021-06-19T04:05:21.624Z",

    "running":false,

    "tDuration":60,

    "type":"fs",

    "uParams":[{

        "parameter1":"",

        "parameter2":"",

        "parameter3":"",

        "parameter4":""

        }]  

}

```

<br/>

### How Adam BC locates your DApp's configurations:

Adam BC will check the 'app/dapps/AppName/config' folder to locate your DApp's configuration files.

Therefore make sure the 'config.json' configuration file you created earlier and the 'log.txt' file remain in the 'app/dapps/AppName/config' folder. 

To check on your configurations API, visit the portal;

_http://localhost:6553/configs_

<br/>

## 2. Create the DApp

Open the 'app/dapps/AppName' folder and you'll find a file name DApp.js - open the file.

<br/>

The file should look somewhat like below:

``` javascript


/**

 * The Decentralized App (DApp):

 * This is where the App developer writes the decentralized app.

 * Make sure the code is written within the specified space region.

 * 

 * IMPORTANT: 

 * I.   Developer's DApp CODE MUST BE WRITTEN WITHIN SPECIFIED SPACE REGION.

 * II.  DApp MUST return values through the 'results' variable.

 * III. DApp MUST RETURN A JSON Object.

 * IV.  DApp data crunching should not exceed 100MB of Data per peer task.

 * V.   If you change the name of 'results', make sure to change it at DApp's 'return results' code.

 * 

 */

// The DApp Engine

const DApp = async (params) => {

    // Storage for successful results.

    var results = {}; 

/*********************************************************************************/

                 /* START WRITING YOUR DAPP CODE BEGINNING HERE: */

/*********************************************************************************/




/* Write your code here.*/





/*************************************************************************/

                 /* STOP WRITING YOUR DAPP CODE UP UNTIL HERE.*/
                 
/*************************************************************************/                 

// Results must return valid JSON Object

return results;

};

// Import configuration events

require("dotenv").config(); 

const {encryptPWD} = require('../helpers/encrypt'); // Password encryption

// Listened to message from CPU:

// Captured Parameters passed from Central Processing Unit (CPU)

process.on('message', async (params) => {

    // Execute DApp parameters

    const app = await DApp(params);

    // Generate new custom parameters

    var newUparams={};

    var parameterFunctions=params.uParams[0];
    
    // Reject large file types

    if(Object.keys(parameterFunctions)){

        for (var prop in parameterFunctions){ 

            if((typeof parameterFunctions[prop] =='string' || typeof parameterFunctions[prop] =='number' || typeof parameterFunctions[prop] =='boolean') && parameterFunctions[prop].toString().length<25){

                newUparams[prop]=parameterFunctions[prop];

            } else {

                newUparams[prop]='';

            }

        }
        
    }

    // Define configuration settings

    const config = { 

        configs:{    

            builderID: params.builderID, // Initiator ID

            workID: process.env.WORK_ID, // Work Instance ID

            workerID: process.env.WORKER_ID, // Worker ID

            TaskID: params.TaskID, // Task ID

            TimeCompleted: new Date(), // Timestamp task was completed

            running: params.running, // Is task actively running

            cryptoID: encryptPWD(process.env.CRYPTO_ID), // Work done signature - confirms identity of worker

            workerContact: process.env.WORKER_CONTACT // Contact of worker

        }

    };

    // Aggregate results from processing

    const result = {     

        results: app // Results

    }; 

    // Define processing parameters

    const log = { 

        logs:{    

            oPartition: params.oPartition, // Primary Iterator

            xPartition: params.xPartition, // Secondary Iterator

            iPartition: params.iPartition, // Initial Iterator

            tPartition: params.tPartition, // Transitional Iterator

            Timestamp: new Date(), // Timestamp for latest iteration

            tDuration: params.tDuration, // Duration

            type: params.type, // App type

            uParams: newUparams // Custom Developer defined Parameters

        }

    }; 

    // Merge data output

    let dataOutput = {...config, ...result, ...log};

    // Process Output

    process.send(JSON.stringify(dataOutput)); // Send results back to CPU main processor
    
});


```


<br/>

Now, carefully read the instructions in the comments section of the code.

A summary of the comments:

<br/>

### IMPORTANT TO REMEMBER: 

i. Developer's DApp CODE MUST BE WRITTEN WITHIN SPECIFIED SPACE REGION.

ii. DApp MUST return values through the 'results' variable.

iii. DApp MUST RETURN A JSON Object.

iv. DApp data crunching should not exceed 100MB of Dataset per peer task.

v. If you change the name of 'results', make sure to change it at DApp's 'return results' code.

<br/>

## 3. Task Data Output Analysis

Open the 'monitor/data' folder and locate the 'data.json' file. This is the file that stores the results of the task output.

The 'data.json' file by default contains an empty array: '[]'. This array is filled in as data from computing output is added to the file.

<br/>

The opened file looks something like this;

``` json

[{

    "configs":{

    }, 
    
    "results":{

    }, 
    
    "logs":{
        
    }

}]

```

<br/>

Parameters:

- configs - the configuration settings used during task execution.

- results - the data output during task's execution. An Empty {} means no result was attained during task's execution.

- logs - the different parameters and variables used during program execution.

<br/>

## Live Data Broadcast:

Consume the live data API:

You can create an output monitor to capture live results from peer device processes.

The Monitor captures and provides an api where the data results from the entire task can be analysed.

The URL for live data broadcast is: 

(Custom) - _http://localhost:6553/data_
                                  
(Peer) - _http://localhost:6553/peers/data_

In this URL you'll find all the failed and successful results from all the tasks being processed by peer devices.

The developer can build custom tools to consume and analyse this api data.

<br/>

### REMEMBER: 

Adam BC by default stores data in a json file format. However this has a limit of 100MB-500MB. It is therefore advisable for the developer to use a database system to store data that is in excess of 100MB.

<br/>

_Adam BC Data Computation Graph:_

![Adam BC Data Computation Graph](/public/assets/readme/Frontpage_800.png)

<br/>

## Peer Chat:

Peers in the same peer-to-peer network can communicate and send messages to each other using the peer chat feature.

Peers can click on the button at the extreme right of 'Processing Reports" to open the peer chat box.

<br/>

_Adam BC Peer Chat:_

![Adam BC Peer Chat](/public/assets/readme/Chat_800.png)

<br/>

## User Interface:

The UI interface can be found at _http://localhost:6553_

<br/>

_Adam BC User Interface:_

![Adam BC User Interface](/public/assets/readme/UI_800.png)

<br/>

<br/>

## Adam BC Demo DApps:

Adam BC comes preinstalled with simple DApp demos.

Check them out here;

<br/>

Arithmetics DApps:

[https://github.com/TheAdamBC/Numerics](https://github.com/TheAdamBC/Numerics)

<br/>

Data Analysis DApps:

[https://github.com/TheAdamBC/Data_Analysis](https://github.com/TheAdamBC/Data_Analysis)

<br/>

Media Analysis DApps:

[https://github.com/TheAdamBC/Media_Analysis](https://github.com/TheAdamBC/Media_Analysis)

<br/>

Chess Analysis DApps:

[https://github.com/TheAdamBC/Chess_Analysis](https://github.com/TheAdamBC/Chess_Analysis)

<br/>

<br/>

## Deleting an Adam BC DApp:

To delete a DApp, run the command below in the Command terminal. 

Make sure to first install the 'Adam' command globally.

<br/>

_Adam delete AppName_

<br/>

<br/>

## COMPUTING NETWORKS

Adam BC can run in two network computing modes.

A. Peer Computing Mode.

B. Global Network Computing Mode.

<br/>

## Adam BC's Network Architecture

Before we dive into Adam BC's computing modes, let's take a quick look at Adam BC's computing architecture.

Adam BC's architecture is based on what we term as 'Peer Computing Cells'. 

A Peer Computing Cell is a single network of peer to peer computing devices (500 maximum) working together to process a given task. Each Peer Computing Cell has its own network administrators (up to 5-10 admins). 

Once a task is complete, a computing cell passes the results to the global peer computing network (if the task was received from the global network). 

Peer computing cells combine to form the global computing network.

The analogy here is that of individual cells inside the human body working together to form the body's operating system.

<br/>

_Adam BC Peer Computing Cell:_

![Adam BC Peer Computing Cell](/public/assets/readme/Peer_Computing_Cell_800.png)

<br/>

_Adam BC Network Architecture:_

![Adam BC Network Architecture](/public/assets/readme/Network_Architecture_800.png)

<br/>

<br/>

## A. Peer Computing Network

Adam BC Peer computing allows developers to create a limited peer to peer network of between 100-1000 connected computers (500 is the default).

<br/>

## How Adam BC's Peer Computing Works

The DApp file 'config.json' stores the current state of computing and presents it as a config API for all other peer computers in the network to read. The peer computers read the config API and perform their computations based on the API presented. The data results computed are then passed back to the peer admin where the 'config.json' file is updated and then presented again for other peers in the network to read and compute.

<br/>

## Running a DApp in Peer Computing Network

1. Change Adam BC to peer computing mode. Go to settings (icon under "start" button) and "Turn on Peer Mode".

2. Create your DApp and it downloadable to all your peer computing members.

3. Open 'config.json' file under the 'peer/config' folder and update the configuration settings of the Peer Computing Unit (PCU) to suit your prefered computing attributes.
  
   The contents of the PCU look like this:

``` json

{

    "PCU": {

        "HostIP": "localhost",

        "StartTime": "Starttime",

        "Duration": 60

    },

    "running": true

}

```


- Attribute Definitions:
  
  'HostIP' - is the 'HostName' of the network IP where peer computing nodes will fetch config settings of the task. IP of the host machine running the main DApp.

  'StartTime' - Start time of processing. Time peer computing will start in UTC.

  'Duration' - Duration of processing. How long computing task will run.

<br/>

- ### FINALLY: 

  Avail the configuration settings of the Peer Computing Unit (PCU) to peer computing members (Tell them to replace the 'config.json' file in their 'peers/config/pcu' folder with the new configurations.)

<br/>

1. Once peer computing starts running, the data from the task computations will be stored in the 'data.json' file inside the 'peers/monitor/data' folder.

<br/>

### REMEMBER: 

- Only one app can run in a peer network at a time.

- Remember to initialize Adam BC in Peer Mode, before running the DApp again. 

- In some cases you may also need to restart Adam BC after initializing the DApp in peer mode, especially after a code change.

<br/>

## Joining a Peer Computing Network:

To increase the size of your computing network, you can join a peer network of devices.

A peer network has a limit of 500 peer members by default, in addition to 10 administrative members.

Peers can join as an administrator or as a peer member.

The data about a computing network is stored in the 'store.json' file under the 'peers/config' folder.

By default all users can create a computing network. Your node's hostname becomes your peer computing network's ID.

A peer node can only create one computing network at a time, but can join as many as desired. However the peer node can run only one DApp at a time.

<br/>

### Turning on peer computing mode.

Go to settings (icon under "start" button) and "Turn on Peer Mode".

<br/>

### Adding new peer members to your peer computing network.

To add new members to your peer computing network, send them the link:
(Replace 'localhost' with your IP).

_http://localhost:6553/peer/join_

To check if new peer members have been added, open the 'store.json' file under the 'peers/config' folder.

The default empty file content looks like this:

``` json

[{"admin":[],"peers":[]}]

```

'peers' - stores the computing peer members.

'admin' - stores the administrative peer members.

<br/>

### REMEMBER: 

Peer computing members can only have a maximum of up to 500 members by default.

<br/>


### Adding new administration peer members to your peer computing network.

To add new administrative members to your peer computing network, send them the link:
(Replace 'localhost' with your IP).

_http://localhost:6553/peer/join/admin_

To check if new administrative peer member has been added, open the 'store.json' file under the 'peers/config' folder.

The default empty file content looks like this:

``` json

[{"admin":[],"peers":[]}]

```

'admin' - stores the administrative peer members.

'peers' - stores the computing peer members.

Administrative members of a peer computing network can add or delete members from a peer computing network.

<br/>

### REMEMBER: 

Peer administration members can only have a maximum of up to 10 members.

To view a list of all peers in your network (both adminstrative and computing peers), visit the URL;

_http://localhost:6553/peers_

<br/>

## B. Global Computing Network

Adam BC's Network computing mode allows developers to create an unlimited computing network that connects different peer computing groups together into one global computing network.

<br/>

## Running a DApp in Global Network Computing Mode

Running Adam BC in Global Network computing mode requires creating harmony between the different global peer computing modes. This task requires input directly from the Adam BC team.

<br/>

To run apps in network computing mode, please contact Adam BC.

Email (Support): _Support@TheAdamBC.com_

Email (Developers): _Developers@TheAdamBC.com_

Support Page: _https://TheAdamBC.com/about.html#support_

<br/>

<br/>

## Adam BC Environment Variables

### Editing Environment Variables

<br/>

Environment variables are used for identifying unique users on the Adam BC network.

To edit Adam BC's environment variables, click the 'settings' button under the 'start' button.

Adam BC's environment variables are stored inside the '.env' file in the main Adam BC folder.

<br/>

The '.env' file content looks something like below.

<br/>

WORKER_ID=''

CRYPTO_ID=''

WORK_ID=''

WORKER_CONTACT=''

PEER_MODE=''

GLOBAL_NETWORK=''

NETWORK_USERNAME=''

<br/>

Definitions:

- WORKER_ID - is user's unique identity.

- CRYPTO_ID - is the Work done signature, confirms identity of user.

- WORK_ID - is work instance ID.

- WORKER_CONTACT - is email or phone contact of user.

- PEER_MODE - Change computing mode to custom, or peer to peer.

- GLOBAL_NETWORK - join your peer team to a global computing network.

- NETWORK_USERNAME - Unique username to identify user on the Adam BC Network.

<br/>

_Adam BC Editing Environment Variables:_

![Adam BC Environment Variables](/public/assets/readme/Environment_800.png)

<br/>

<br/>

## TERMS OF USE

- Adam BC require's all users to have their contact and personal details like email address, phone number, IP address, home address, full name, and current location (city, country, gps) stored on the platform while setting up their app. These details may be cached by peer computing administrators during task executions.

- Adam BC is not liable for damages or losses arising from failure of this software to meet expectations of a computing task of the clients.

- Adam BC is a FREE software application built and distributed under the BSD-3-Clause license.

- Clients and users of all our products will respect the intellectual property rights of the developers of the software, including the rights of third party developers.

- Adam BC is not responsible for liabilities arising from the refusal by peer computing administrators or their failure to pay peer members after a computation task is complete.

- All files located in the node_modules and external directories are externally maintained libraries used by this software which have their own licenses; we recommend you read them, as their terms may differ from the terms in the BSD-3-Clause license.

- Third-party developers, contributors and consultants are NOT employees of Adam BC. Adam BC is NOT responsible for the damages that may occur as a result of installing software designed by third-party developers, contributors and consultants.

<br/>

<br/>

## DEVELOPER CIRCLE: 
## FEATURES WE NEED ADDED TO ADAM BC OR IMPROVED:

### Are you a talented developer? 

### Help us implement the following features onto the Adam BC platform.

<br/>

<br/>

### INTERMEDIATE 'EMP' LEVEL TASKS - IMPORTANT: 

_(EMP means code contributed as Error fix, or to Membership Infrastructure (Account creation/Authentication) or to Payment/Finance Infrastructure)._

<br/>

> EMP 200: Execution Timeout (INTERMEDIATE). 

- Timeout incase the DApp program takes too long to exit.

<br/>

> EMP 201: Re-Execute DApp (INTERMEDIATE).

- Try reprocessing DApp again if task terminates prematurely. 

- Also create mechanism to handle unexpected terminations of a DApp task during processing.

- Re-execute up until the 3rd try.

<br/>

> EMP 202: Validate app configurations (INTERMEDIATE).

- Stop process incase configs api file 'Configs.json' sends the wrong JSON.

- Check to see if all 'config.json' parameters are correct and that the values are valid.

<br/>

> EMP 203: Validate Environment settings (INTERMEDIATE).

- Before user starts computer, check if all settings in .env are defined.

<br/>

> EMP 204: Peer member administration (INTERMEDIATE).

- Create ability of peer administration to accept, reject or remove peers or other peer administrators. 

<br/>

> EMP 205: Peer member contact and username (INTERMEDIATE).

- Add 'contact' field to peer attribute 'store.json'. 

- Also add a 'username' field to the peer so they can easily be identified on the global network. 

- Other network users can find a user using a combination of the peer computing network username and peer member's username. The usernames must be unique.

<br/>

> EMP 206: DApp Execution Timing (INTERMEDIATE).

- Allow researcher to set the time of execution to 5 min, 30 min, 1 hour, 5 hours, etc. DApp should gracefully terminate after execution time elapses.

<br/>

> EMP 207: ERROR Alert messages (INTERMEDIATE).

- ERROR 301 - parameterFunction.js must return a JSON Object.

- ERROR 302 - DApp.js must return a JSON Object.

- ERROR 303 - ParameterFunction.js JSON Object size must not exceed 2.5MB.

<br/>

> EMP 209: Maximum 'data.JSON' limit (INTERMEDIATE).

- Task should create new 'data.JSON' incase file reaches 4MB size.

<br/>

> EMP 210: Move DApp.js Configuration Events to another File (INTERMEDIATE).

- Move all DApp.js Configuration Events code to another File and import file instead.

<br/>

<br/>

### SENIOR 'DTU' LEVEL TASKS - CRITICAL:

_(DTU means code contributed to the platform's DApp Architecture, Testing Framework/QA or User Interface)._

<br/>

> DTU 100: Peer to peer network communication (SENIOR LEVEL).

- Enable the peer nodes to communicate safely over a remote peer to peer computing network.

<br/>

> DTU 101: A Queuing system (SENIOR LEVEL). 

- Build a queuing mechanism to smooth read and write operations between multiple concurrent peer processes.

- Use queue to handle multiple requests for both client and remote nodes.

<br/>

> DTU 102: Live data stats / Live Data Visualization Graph (SENIOR LEVEL). 

- Update the data plot graph code to allow live data stats in realtime as computation happens.

- Use your prefered npm plotting library to plot live graphs for data generated during a computation.

<br/>

> DTU 104: Data flow in global Network mode (SENIOR LEVEL). 

- Create a mechanism to manage data flow between multiple peer computing neworks in the Adam BC global Blockchain network.

<br/>

> DTU 105: Adam BC core App code customization (SENIOR LEVEL).

- Users download the Adam BC core app, customize it to their organizations needs using the right DApp, then generate an executable program to use as their peer to peer computer.

<br/>

> DTU 106: Prevent repeatitive mining of same task by different nodes (SENIOR LEVEL).

- Prevent redundancy due to repeatitive mining of task with the same ID.

<br/>

> DTU 107: Validate results of previous task before sending next task to the same peer node (SENIOR LEVEL).

- In Network mode, before peer admin fetches next iteration of data, they must return results of previous computation along with the new request. Create a mechanism to validate receipt of previous task results before availing node with the next task.

<br/>

> DTU 108: Sensitive data encryption (SENIOR LEVEL).

- Use Bcrypt to heighten security on the platform, encrypt sensitive data like passwords.

- Add encryption to ensure authenticity is maintained and forgery of data and data hijacking are dwarted.

<br/>

> DTU 109: Uni-direction computing flow (SENIOR LEVEL).

- A computing node can join as many peer networks as possible, but can only participate in one active peer computing session at a time. And when it's in active global network computing mode, all custom and peer computing modes must be turned off.

<br/>

> DTU 111: Factory reset (SENIOR LEVEL).

- Create URL to reset entire Adam BC app to default factory settings: http://localhost:60553/reset. Running reset should set data.json to [], config.json, store.json to default, and PEER_NODE back to NO.

<br/>

> DTU 112: Computing Power harmony (SENIOR LEVEL).

- xPartition should vary depending on computing power. 

- A PC with larger RAM power should be allowed to fetch a higher xPartition parameter. That xPartition parameter should still obey the (xPartition/tPartition)==0 rule.

- A PC cannot have the same xPartition as a supercomputer. It's just not economically sound either way. xPartition may be too expensive for a PC or too cheap for a super computer.

<br/>

> DTU 113: Create mechanism for 'continue where previous processing stopped' (SENIOR LEVEL).

- Create a 'Continue' setting on 'start' button. This shoud allow peer nodes to start computing where previous computation stopped. 

- This can be helpful incase of unexpected breakdowns, or when computation is completed successfully but without the desired results and the developer wishes to increase the sample size.

- HINT: Pick the previous tPartition as the new iPartition variable and increase the oPartition to the desired new endpoint.

<br/>

> DTU 114: Add Peer-Network Authentication (SENIOR LEVEL).

- Add peer network authentication and verification onto the Adam BC global network. 

- Peer computing networks must be authenticated before interacting with the global Adam BC network.

- Validate authenticity of data returned from peer networks.

- Validate that the data results received are of the task that was sent to the node - not of a fake task fabricated by the node.

<br/>

> DTU 115: Gracefully Stop computation - User (SENIOR LEVEL).

- Once user clicks 'stop', stop the computer gracefully, then exit all child processes. 

- Don't  stop computer in the middle of a data processing. 

<br/>

> DTU 118: Graceful task termination - Peer Admin side (SENIOR LEVEL).

- Create the ability of the peer administrator to gracefully terminate a task on all peer computing members in the whole Adam BC network.

<br/>

> DTU 120: Allow Step (stage) based computing (SENIOR LEVEL).

- After stage 1 of the computation is done, computing should move on automatically to stage 2 of the computation.

- For example;

  When doing color analysis on a group of photos and you want to identify the color that appears the most in all the photos.

  Stage 1 of Computation: 
  
  This could be harvesting the colors from all the images and storing them as raw data.

  Stage 2 of Computation: 
  
  This could be a frequency analysis of the raw data generated earlier in stage 1 to finally determine which color appears the most in the photos.

- NOTE: Consider that Stage 1 and Stage 2 of the computation may need to used different DApps.

- HINT: Try using a node_module called `listr` [import Listr from 'listr'].

<br/>

> DTU 121: Create ChatBox to allow peers to communicate during Task processing (SENIOR LEVEL).

- Admin of task should be able to Pin messages at the top of the chatbox.

- Verify that a peer's username is registered and verified with the Peer network's admin before joining the chat group.

<br/>

> DTU 122: Participation by Geography and Location (SENIOR LEVEL).

- Ability to limit participation in a task prcoessing to certain geographical locations, like country and city, even email address (for education institutions).

- This would mean verifying the emails, phone numbers, IP and home addresses of the participating peer networks and their peer members.

- We verify the peer network admins and the admins verify their peer members.

<br/>

> DTU 123: Replace Downloads with RAM Computing Memory (SENIOR LEVEL).

- Adam BC should measure the platform’s computing progress based on the RAM memory computing power harnessed over its entire global peer computing networks rather than on the number of downloads of its app.

- To do this, peer admins should measure and submit their peer network's RAM power each time they join the Adam BC global network. 

- Add BC then computes the total RAM of the entire network based on these submissions.

<br/>

> DTU 124: Peer Computing Power Measurement Mechanism (SENIOR LEVEL).

- Create a mechanism to allow peer admins to measure their peer network's RAM power. 

<br/>

> DTU 125: RAM Computing Power Ranking by country (SENIOR LEVEL).

- A Pie chart ranking RAM Computing Power contributed to Adam BC by peer networks across the world by country.

<br/>

> DTU 126: ChatBox notifications to notify peers that a new message has been posted (SENIOR LEVEL).

- Create ChatBox notifications to notify peers that a new message has been posted. 
 
<br/>

> DTU 127: RAM threshold for joining Global Computing network (SENIOR LEVEL).

- Create a RAM threshold of for example 15GB RAM for peer networks to join the global peer computing network.

<br/>

> DTU 128: Create Desktop App (SENIOR LEVEL).

- Should be a blend between the dark-themed web app and the light-themed Node.JS App.

<br/>

> DTU 129: Create Limit for DApp Task Time complexity (SENIOR LEVEL).

- DApp's task should be limited to a certain time complexity.

<br/>

> DTU 130: Custom Peer terms of use (SENIOR LEVEL).

- Allow peer admins to create their own custom terms of use that each peer must accent to before joining.

<br/>

> DTU 130: Synchronize countdown clocks across all peer members (SENIOR LEVEL).

- Synchronize the countdown clocks so that they are uniform across all peer computing members taking part in the computation.

<br/>

<br/>

### ADVANCED 'BNS' LEVEL TASKS - EXPERT:

_(BNS means code contributed to the platform's Blockchain Protocol, Network Architecture, or Smart Contracts Protocol)._

<br/>

> BNS 301: Build a simple Peer to Peer Computing network (ADVANCED LEVEL).

Liz is trying to add the first 100 million counting numbers in the fastest time possible, but using her computer alone would take a long time. So she calls a group of 9 friends with computers of their own. She wishes to use a Node.JS program that connects the 9 different computing devices (10 in total including her own) in a peer to peer computer network. Then working together, these computers can accomplish the task of adding the first 100 million counting numbers faster. 
  
Could you help Liz complete a simple Node.JS program she built to accomplish this task? 

What Liz has created so far is the app's skeleton and a json file named 'task.json' that keeps track of the current state of computation by listing the current total and the latest counting number added to that total. The skeleton app works fine on a single computer, but Liz would like it to work on multiple computers through a peer-to-peer network.

The contents of 'task.json':

``` json

{
    "most_recent_counting_number_added":0,
    "current_total":0,
    "counting_number":100000000
}

```

Each of the computers in the peer network should fetch and read the 'task.json' data file from Liz's computer and calculate the next total, then update the 'task.json' file with their latest total and the most recent counting number they added to that total.

As mentioned earlier, Liz has also built the project's skeleton app that works well on a single computer. Your job is to modify this skeleton app so that the computation can work on multiple computers through a Peer-to-peer computing network. 

App's Skeleton: https://github.com/TheAdamBC/Community/tree/main/developer_challenge/p2p

REQUIREMENTS:

- Stack required: Node.JS, JavaScript/TypeScript, NPM, Express.

- Use any npm modules you think would be useful.

HOW IT SHOULD WORK:

- Take a look at the app's skeleton: https://github.com/TheAdamBC/Community/tree/main/developer_challenge/p2p

- The app's design MUST be decentralized in a peer to peer computing network. The 10 individuals should each download the application via a Github repository, install dependencies (npm install), then connect to Liz's computer via a network (internet, LAN or broadband wireless network - depending on your preference), and start the computation.

- DO NOT use a summation formula. We know this task can be achieved using a summation formula. The purpose here is NOT the final result, but rather demonstrating your ability to build a decentralized peer to peer computing platform.

BONUS POINTS:

- It's up to you the developer to determine the best NPM modules to deploy for the project and the most ideal decentralized architecture or network protocol to use for resource distribution during the task's computation. We are particularly interested in knowing what NPM module(s) you will use to implement the peer-to-peer architecture. A custom implementation is also fine.

- You could also deploy a Queuing system to make the computation more efficient.

- You can add a simple peer network discovery feature for new peer members to scan, find and join the peer computing network.

HINT:

- Counting numbers start with 1:

  i.e, 1 + 2 + 3 + 4 + 5 + 6 + 7 ...... 100 Million = Total.

- The task is more efficient if each peer computer is allocated interval totals to add to the current total. For example the first computer could add numbers from 1 to 100,000 then add this to the current cumulative total, the next computer could add numbers from 100,001 to 200,000 and add this to the new current total, .... etc.

<br/>

> BNS 302: Build blockchain registry to keep track of all active peer networks created (ADVANCED LEVEL).

Adam BC needs to build a blockchain registry that keeps track of all peer networks created in the Adam BC global network.

HOW IT SHOULD WORK:

- Once a new peer network is created and it meets the criteria for joining the Adam BC global computing network (25 GB in peer RAM power, etc), the peer network's 'username' is added to the blockchain registry as recognition of its unique identity on the Adam BC global network.

<br/>

> BNS 303: Create a set of criteria for vetting peer network quality before it joins the Adam BC global computing network (ADVANCED LEVEL).

To ensure quality on the global computing network, not every peer computing network should be allowed to join the Adam BC global computing network.

It's important to set criteria that filters and allows only the highest quality peer computing networks to join the global computing network. 

EXAMPLE CRITERIA:

- Atleast 25 GB in peer RAM computing power.

- Verified peer member details like email addresses, phone numbers etc.

- Minimum Uptime.

<br/>

> BNS 304: Peer Device Discovery - Create ability to scan, find and join a peer computing network (ADVANCED LEVEL).

- Create ability to scan, find and join an Adam BC peer computing network in the vicinity or LAN.

- Allow peer admin to define location (city,gps,country, phone country) where peer computing network is located.

- Allow peer admin to define minimum peer specification requirements like PC RAM Power, Operating System, Browser, Internet Bandwidth, Storage etc.

- Users can also be able to join by peer computing network Id.

- A peer can only join one network at a time.

<br/>

> BNS 305: Mini-blockchain Networks in Vicinity (ADVANCED LEVEL).

- Allow Adam BC users to download a mini-blockhain network of registered peer networks in their vicinity (city, gps, country).

- This could allow peers to easily find computing networks to join.

<br/>

> BNS 306: Live Peer Networks Stats (ADVANCED LEVEL).

- Live RAM peer network computing power present.

- Live number of peer members present in the network.

- HINT: Try creating an endpoint that socket emits RAM made available by each peer member when it's added to the peer network. When member leaves or new one joins network, add or subtract RAM made available figure to the Total Peer RAM Power.

<br/>

> BNS 307: Multiple DApp Build Language Support (ADVANCED LEVEL).

- The core Adam BC DApp may be built in Node.JS (JavaScript/TypeScript) but the data consumed and output by the DApp is always of 'JSON' Format. This should make it possible for developers to build DApps in other programming languages.

- Allow developers to build DApps in other programming languages like Python***, PHP, Scala, Java, TypeScript, GoLang etc.

- Put Priority on Python for its importance in Data Science, Machine Learning and AI.


<br/>

<br/>

# Developer Community

Twitter: [Twitter/TheAdamBC](https://twitter.com/TheAdamBC)

<br/>

LinkedIn: [LinkedIn/TheAdamBC](https://linkedin.com/company/TheAdamBC)

<br/>

Instagram: [Instagram/TheAdamBC](https://instagram.com/TheAdamBC)

<br/>

Facebook: [Facebook/TheAdamBC](https://facebook.com/TheAdamBC)

<br/>

YouTube: [YouTube/UCBwZFjeNSsjmoVtHagxTC4A](https://www.youtube.com/channel/UCBwZFjeNSsjmoVtHagxTC4A)
