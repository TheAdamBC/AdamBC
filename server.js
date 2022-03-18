/**
 * Adam BC APIs:
 * Imports the neccessary configuration modules.
 * Contains the routing APIs, including the apis to start and stop the computer.
 * Manages ENV Process file.
 * 
 */

// Import neccessary node modules
const express = require('express'); // Server middleware
const path = require('path'); // Directory configurations
const fs = require('fs');
const cookieParser = require("cookie-parser");
const io  = require('socket.io-client');
//const jwt = require('jsonwebtoken');

const {AdamOS} = require('./cpu/AdamOS');
const {setEnvValue} = require('./helpers/env_eol')
const apiResponse = require("./helpers/apiResponse");
//const {writeData, readData} = require('./helpers/save');
const {parameterFunctions} = require('./app/config/parameterFunctions');
const {v4:uuidv4} = require('uuid');
require("dotenv").config();  // Environment event handler

// Import queuing module bull
const Queue = require('bull');

// Custom mode Worker Queue
const customWorker = new Queue('custom_worker', {
    limiter: {
        max: 5000, // Limit the queue to a maximum of 5000 jobs per 10 seconds
        duration: 10000
        },
    redis: {
        host: "127.0.0.1",
        port: "6379",
        password: ""
      }    
});

// Peer mode Worker Queue
const peerWorker = new Queue('peer_worker', {
    limiter: {
        max: 5000, // Limit the queue to a maximum of 5000 jobs per 10 seconds
        duration: 10000
        },
    redis: {
        host: "127.0.0.1",
        port: "6379",
        password: ""
      }    
});

var onlineUsers = []; // Users Online
var onlinePeers = []; // Peers Online

// Express configurations
const app = express()
const port = 6550 // Testing Port

app.use(express.static(path.join(__dirname, '/public'))); // configure express to use 'public' folder
app.set('views', __dirname + '/views'); // set express to look in this folder to render our views
app.set('view engine', 'ejs'); // configure template engine
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Launch Adam BC
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/temp/index.html'));
})

// Adam BC settings
app.get('/settings', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/temp/settings.html'));
})

// Start Processing
app.get('/start', AdamOS, (req, res) => {

    // Capture any parameters passed
    var tid = req.query.tid;

    // Send notifications on computation progress
    if(!tid){ 

        // Task processing started
        require('./app').io.emit('processing-progress',`Adam BC has started ..!`);

    } else {

        // Task completed
        require('./app').io.emit('processing-progress',`Task ${tid} completed..!`);

    }

    // Read configurations from file
    fs.readFile(__dirname + '/app/config/' + 'config.json', 'utf8', (err, data) => {
            
        // Parse data to JSON            
        let sts = JSON.parse(data);
    
        // Check if task is actively running        
        if(sts.running==false){

            // Calculate duration
            let today = new Date();
            let start = new Date(`${sts.TimeStarted}`);
            let dur = parseInt(Math.abs(today.getTime()-start.getTime()) / (1000 * 60) % 60);
            let tn = parseInt(sts.tDuration-dur) // calculate time left in minutes

            // Capture starting time
            require('./app').io.emit('processing-duration', tn);
    
        }
        
    });

    // Processing completed
    res.status(200).send('Processing started ..!')
})

// Stop processing
app.get('/stop', (req, res) => {
    res.status(200).send('Processing Terminated ..!')
})

// Task Completed
app.get('/done', (req, res) => {
    res.status(200).send('Task has been completed ..!')
})

// API - JSON Configurations
app.get("/configs", async (req, res) => {

    // Read configurations from file
    let cdata = fs.readFileSync(__dirname + '/app/config/' + 'config.json', 'utf8');

    // Read processing logs
    let lgdata = fs.readFileSync(__dirname + '/app/config/' + 'log.txt', 'utf8');

    // Parse data to JSON
    let setgs = JSON.parse(cdata);
    let lcg = JSON.parse(lgdata);

    // Capture new 'uParams' computing parameters
    let newParams = await parameterFunctions(setgs,lcg); 

    // Check if task is actively running
    if(setgs.running==false){

        // If task is not actively running, post data from 'config.json' configuration file
        // Post configurations as serializable API

        // Add new 'uParams' parameters to computing configuration
        setgs.uParams.push(newParams);

        res.status(200).end(JSON.stringify(setgs));

    // If task is actively running
    } else if (setgs.running==true){

        // If task is actively running, post data from 'log.txt' configuration file
        // Read configurations from file
        let ldata = fs.readFileSync(__dirname + '/app/config/' + 'log.txt', 'utf8');

        let clg = JSON.parse(ldata);

        // Add new 'uParams' parameters to computing configuration
        clg.uParams.push(newParams);
            
        // Post processing API
        res.status(200).end(JSON.stringify(clg));
           
    // If task has been completed, redirect to task completed page.
    } else if (setgs.running=="done"){

        res.status(200).end('{"running":"done"}');

    }

});

// Receive and store data sent from worker process
app.post("/receive", (req, res) => {

    // Add new process to custom queue worker
    customWorker.add({jobData:req.body});

    // Capture data sent
    const {data} = req.body;
    let json = JSON.parse(data);

    // If task still running, re-trigger "start" 
    // Pass ID of previous task for notification of completion
    var tid = encodeURIComponent(json["configs"].TaskID);

    // Check if processing is complete
    // Check if processing is done, if so, change 'config.json' 'running' parameter from 'true' to 'done'
    if((Number(json["logs"].iPartition+json["logs"].tPartition+json["logs"].xPartition)>Number(json["logs"].oPartition)) && process.env.PEER_MODE=='NO') {

    res.redirect('/done');

    } else {

    //Re-trigger task
    res.redirect('/start?tid='+tid);

    }

});

// Join peers
app.get('/peers/join', (req, res) => {

    // Capture request hostname
    var hostIP = req.hostname;

    // Create new peer
    var newPeer = {
        hostIP:hostIP,
        location:"Earth",
        username:process.env.NETWORK_USERNAME,
        peer_id:process.env.WORKER_ID,
        peer_pwd:process.env.CRYPTO_ID,
        contact: process.env.WORKER_CONTACT,
        joined: new Date(),
        verified:false
    };

    // Read peer configurations from file
    fs.readFile(__dirname + '/peers/config/' + 'store.json', 'utf8', (err, data) => {

        // Parse data to JSON            
        let str = JSON.parse(data);

        // Check if peer is full
        // Not 500 or more
        if(str[0].peers.length<500){

            // Store new peer
            str[0].peers.push(newPeer);

            // Store results into file
            fs.writeFile(__dirname + '/peers/config/' + 'store.json', JSON.stringify(str), (err) => {

                if(err) console.log(err);

                // Processing completed
                res.status(200).send('New peer member added ..!');

            });    

        } else {

            // Admin is full
            res.status(200).send('Peer administration is not admiting new peers ..!');

        }

    });

});

// Join peers as administrator
app.get('/peers/join/admin', (req, res) => {

    // Capture request hostname
    var hostIP = req.hostname;

    // Create new peer
    var newPeer = {
        hostIP:hostIP,
        location:"Earth",
        username:process.env.NETWORK_USERNAME,
        peer_id:process.env.WORKER_ID,
        peer_pwd:process.env.CRYPTO_ID,
        contact: process.env.WORKER_CONTACT,
        joined: new Date(),
        verified:false
    };

    // Read peer configurations from file
    fs.readFile(__dirname + '/peers/config/' + 'store.json', 'utf8', (err, data) => {

        // Parse data to JSON            
        let str = JSON.parse(data);
    
        // Check if admin is full
        // Not 10 or more
        if(str[0].admin.length<10){
            
            // Store new peer
            str[0].admin.push(newPeer);

            // Store results into file
            fs.writeFile(__dirname + '/peers/config/' + 'store.json', JSON.stringify(str), (err) => {

                if(err) console.log(err);

                // Processing completed
                res.status(200).send('New peer administrator added ..!');

            });

        } else {

            // Admin is full
            res.status(200).send('Peer administration is not admiting new members ..!');

        }
        
    });

});

// A list of all peer members (Both administrative and computing members).
app.get("/peers", (req, res) => {

    fs.readFile(__dirname + '/peers/config/' + 'store.json', 'utf8', (err, data) => {
        res.status(200).end(data);
    });

});

// Receive and store data sent from peer worker
app.post("/peers/receive", (req, res) => {

    // Add new process to peer queue worker
    peerWorker.add({jobData:req.body});

});

// API to check on progress of task. Failed and successful tasks.
app.get("/data", (req, res) => {

    fs.readFile(__dirname + '/monitor/data/' + 'data.json', 'utf8', (err, data) => {
        res.status(200).json(JSON.parse(data));
    });

});

// API to check on progress of task. Failed and successful tasks.
app.get("/peers/data", (req, res) => {

    fs.readFile(__dirname + '/peers/monitor/data/' + 'data.json', 'utf8', (err, data) => {
        res.status(200).json(JSON.parse(data));
    });

});

// Adam BC settings - init (GET)
app.get('/init', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/temp/settings/init.html'));
});

// Initialize Adam BC - Custom Mode
app.get("/init_c", (req, res) => {

    // Check if computer in Peer Mode or working remotely 
    // If not in peer mode, update configurations here
    if(process.env.PEER_MODE=='NO'){

        // Store results into file                  
        fs.writeFile(__dirname + '/monitor/data/' + 'data.json', '[]', (err) => {
          
            if(err) console.log(err);

        });  
        
        // Read configurations from file
        fs.readFile(__dirname + '/app/config/' + 'config.json', 'utf8', (err, data) => {

            if(err) console.log(err);
            
            // Parse data to JSON
            let cfs = JSON.parse(data);

            // New configurations
            const cfgs = {  
                builderID: cfs.builderID, // Developer ID
                TaskID: cfs.TaskID, // Task ID  
                oPartition: cfs.oPartition, // Primary Iterator
                xPartition: cfs.xPartition, // Secondary Iterator
                iPartition: cfs.iPartition, // Initial Iterator
                tPartition: cfs.tPartition, // Transitional Iterator
                running: false, // Is task actively running 
                tDuration: cfs.tDuration, // Duration
                TimeStarted: new Date(), // Time task started 
                type:cfs.type, // App type
                lang:cfs.lang, // Language type
                uParams: cfs.uParams // Duration
            }

            // Update configuration settings    
            fs.writeFile(__dirname + '/app/config/' + 'config.json', JSON.stringify(cfgs), (err) => {

                if(err) console.log(err);
                console.log('Configuration file initialized ..!');

            });    

        });        

        res.status(200).end('Adam BC (Custom Mode) is Initialized..!');

    } else {

        return apiResponse.ErrorResponse(res, `Sorry! You are in Peer Mode. This action can only be taken in Custom Mode ..! Go back to Settings and \'Initialize the App\' in Peer Mode.`);


    }
});

// Adam BC settings - init (GET)
app.get('/peer/init', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/temp/settings/init_peer.html'));
});

// Initialize Adam BC - Peer Mode
app.get("/peer/init_p", (req, res) => {

    // Check if computer in Peer Mode or working remotely 
    // If not in peer mode, update configurations here
    if(process.env.PEER_MODE=='YES'){

        // Store results into file                  
        fs.writeFile(__dirname + '/peers/monitor/data/' + 'data.json', '[]', (err) => {
          
            if(err) console.log(err);

        });  
        
        // Read configurations from file
        fs.readFile(__dirname + '/app/config/' + 'config.json', 'utf8', (err, data) => {

            if(err) console.log(err);
            
            // Parse data to JSON
            let cfs = JSON.parse(data);

            // New configurations
            const cfgs = {  
                builderID: cfs.builderID, // Developer ID
                TaskID: cfs.TaskID, // Task ID  
                oPartition: cfs.oPartition, // Primary Iterator
                xPartition: cfs.xPartition, // Secondary Iterator
                iPartition: cfs.iPartition, // Initial Iterator
                tPartition: cfs.tPartition, // Transitional Iterator
                running: false, // Is task actively running 
                tDuration: cfs.tDuration, // Duration
                TimeStarted: new Date(), // Time task started 
                type: cfs.type, // App type
                lang: cfs.lang, // Language type
                uParams: cfs.uParams // Duration
            }

            // Update configuration settings    
            fs.writeFile(__dirname + '/app/config/' + 'config.json', JSON.stringify(cfgs), (err) => {

                if(err) console.log(err);
                console.log('Configuration file initialized ..!');

            });    

        });        

        res.status(200).end('Adam BC (Peer Mode) is Initialized..!');

    } else {

        return apiResponse.ErrorResponse(res, `Sorry! You are in Custom Mode. This action can only be taken in Peer Mode ..! Go back to Settings and \'Initialize the App\' in Custom Mode.`);

    }
});

// Adam BC settings - environment (GET)
app.get('/environment', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/temp/settings/environment.html'));
});

// Adam BC scan, find and join peer networks (GET)
app.get('/networks', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/temp/settings/peers.html'));
});

// Adam BC Peer chat
app.get('/messages', (req, res) => {

    // Register events on socket connection
    require('./app').io.on('connection', function(socket){ 

        // Listen to chantMessage event sent by client and emit a chatMessage to the client
        socket.on('chatMessage', function(message){
            require('./app').io.to(message.receiver).emit('chatMessage', message);
        });
        
        // Listen to notifyTyping event sent by client and emit a notifyTyping to the client
        socket.on('notifyTyping', function(sender, receiver){
            require('./app').io.to(receiver.id).emit('notifyTyping', sender, receiver);
        });
        
        // Listen to newUser event sent by client and emit a newUser to the client with new list of online users
        socket.on('newUser', function(user){
            var newUser = {id: socket.id, name: user};
            function isOnline(peer){
                let detector=false;
                onlineUsers.forEach(function(userOnline, index){
                    if(userOnline.name === peer.name) {
                        detector=true;
                    }
                });
                return detector;
            }
            if(isOnline(newUser)==false){
                onlineUsers.push(newUser);
                require('./app').io.to(socket.id).emit('newUser', newUser);
                require('./app').io.emit('onlineUsers', onlineUsers);
            }
        });
        
        // Listen to disconnect event sent by client and emit userIsDisconnected and onlineUsers (with new list of online users) to the client 
        socket.on('disconnect', function(){
            onlineUsers.forEach(function(user, index){
                if(user.id === socket.id) {
                    onlineUsers.splice(index, 1);
                    require('./app').io.emit('userIsDisconnected', socket.id);
                    require('./app').io.emit('onlineUsers', onlineUsers);
                }
            });
        });
    });

    res.sendFile(path.join(__dirname + '/views/temp/chat.html'));
});

// Receive and store new environment variables
app.post("/environment", (req, res) => {

    // Capture data sent
    const {peer_mode, network, username, contact, worker_id, crypto_id, work_id} = req.body;

    // Update Peer Mode
    if(peer_mode!=''){

        setEnvValue("PEER_MODE", `'${peer_mode}'`);

    }

    // Update Work id
    if(work_id!=''){

        setEnvValue("WORK_ID", `'${uuidv4(work_id)}'`);

    }

    // Update worker id
    if(worker_id!=''){

        setEnvValue("WORKER_ID", `'${uuidv4(worker_id)}'`);

    }

    // Update crypto id
    if(crypto_id!=''){

        setEnvValue("CRYPTO_ID", `'${uuidv4(crypto_id)}'`);

    }

    // Update contact
    if(contact!=''){

        setEnvValue("WORKER_CONTACT", `'${contact}'`);

    }

    // Update network settings
    if(network!=''){

        setEnvValue("GLOBAL_NETWORK", `'${network}'`);

    }

    // Update username
    if(username!=''){

        setEnvValue("NETWORK_USERNAME", `'${username}'`);

    }

    res.end('Environment variables updated ..!');

});

cWorker()
pWorker()

// Custom mode worker queue
function cWorker (){
    
    customWorker.process(async (job) => {

    // Capture data sent
    const {data} = job.data.jobData;

    // Check if computer in Peer Mode or working remotely 
    // If not in peer mode, update configurations here
    if(process.env.PEER_MODE=='NO'){

    // Read data from file        
    let dataRead = await readData('/monitor/data/', 'data.json');

        // Parse data to JSON                    
        let str = JSON.parse(dataRead);
    
        // Check if file has reached its storage size limit        
        if(str.length<250){
    
            // Store new data            
            str.push(JSON.parse(data));
    
            await writeData('/monitor/data/', 'data.json', str);

        } else {
    
            // File storage is full            
            console.log('File has reached storage limit ..!');
    
        }

    }

    // Update configuration settings to indicate new process settings
        
    // Parse data to JSON
    let json = JSON.parse(data);

    // Check if computer in Peer Mode or working remotely 
    // If not in peer mode, update configurations here
    if(process.env.PEER_MODE=='NO'){

    // New configurations
    const logs = {  
        builderID: json["configs"].builderID, // Developer ID
        TaskID: json["configs"].TaskID, // Task ID  
        oPartition: json["logs"].oPartition, // Primary Iterator
        xPartition: json["logs"].xPartition, // Secondary Iterator
        iPartition: json["logs"].iPartition, // Initial Iterator
        tPartition: Number(json["logs"].iPartition+json["logs"].tPartition+json["logs"].xPartition), // Transitional Iterator
        Timestamp: new Date(), // Timestamp for latest iteration    
        running: json["configs"].running, // Is task actively running 
        tDuration: json["logs"].tDuration, // Duration
        type: json["logs"].type, // App type
        lang: json["logs"].lang, // Language type
        uParams: [] // Developer defined parameters
    }

    // Update configuration settings
    await writeData('/app/config/', 'log.txt', logs);

    // If task is running for the first time, update running from 'false' to 'true'
    if(json["configs"].running==false) {

        // Read configurations from file
        let cData = await readData('/app/config/', 'config.json');
            
            // Parse data to JSON
            let cfs = JSON.parse(cData);

            // New configurations
            const cfgs = {  
                builderID: cfs.builderID, // Developer ID
                TaskID: cfs.TaskID, // Task ID  
                oPartition: cfs.oPartition, // Primary Iterator
                xPartition: cfs.xPartition, // Secondary Iterator
                iPartition: cfs.iPartition, // Initial Iterator
                tPartition: cfs.tPartition, // Transitional Iterator
                running: true, // Is task actively running 
                tDuration: cfs.tDuration, // Duration
                TimeStarted: new Date(), // Time task started 
                type:cfs.type, // App type
                lang:cfs.lang, // Language type
                uParams: [] // Developer defined parameters
            }

            // Update configuration settings    
            await writeData('/app/config/', 'config.json', cfgs);

    }

    // Check if processing is done, if so, change 'config.json' 'running' parameter from 'true' to 'done'
    if(Number(json["logs"].iPartition+json["logs"].tPartition+json["logs"].xPartition)>Number(json["logs"].oPartition)) {

        // Read configurations from file
        let nData = await readData('/app/config/', 'config.json');
            
            // Parse data to JSON
            let csn = JSON.parse(nData);

            // New configurations
            const cgs = {  
                builderID: csn.builderID, // Developer ID
                TaskID: csn.TaskID, // Task ID  
                oPartition: csn.oPartition, // Primary Iterator
                xPartition: csn.xPartition, // Secondary Iterator
                iPartition: csn.iPartition, // Initial Iterator
                tPartition: csn.tPartition, // Transitional Iterator
                running: "done", // Is task actively running 
                tDuration: csn.tDuration, // Duration
                TimeStarted: csn.TimeStarted, // Time task started 
                type:csn.type, // App type
                lang:csn.lang, // Language type
                uParams: [] // Developer defined parameters
            }

            // Update configuration settings    
            await writeData('/app/config/', 'config.json', cgs);

    }

    // If in peer mode, just re-trigger start
    }

    // Write date to file
    async function writeData(dir, file, data) {

            try { 
                return fs.writeFileSync(__dirname +  dir + file, JSON.stringify(data));
            } 
        
            catch (err) { 
                console.log('Problem writing to file.')
            }
        
    }
    
    // Read data from file
    async function readData(dir, file) {
        
            try { 
                return fs.readFileSync(__dirname  + dir + file,  'utf8');
            }
        
            catch (err) { 
                console.log('Problem fetching file.')
            }
        
    }

    });

}

// Peer mode worker queue
function pWorker (){
    
    peerWorker.process(async (job) => {

    // Capture data sent
    const {data} = job.data.jobData;

    // Read data from file        
    let dataRead = await readData('/peers/monitor/data/', 'data.json');

        // Parse data to JSON                    
        let str = JSON.parse(dataRead);
    
        // Check if file has reached its storage size limit        
        if(str.length<250){
    
            // Store new data            
            str.push(JSON.parse(data));
    
            await writeData('/peers/monitor/data/', 'data.json', str);

        } else {
    
            // File storage is full            
            console.log('File has reached storage limit ..!');
    
        }

    // Update configuration settings to indicate new process settings
        
    // Parse data to JSON
    let json = JSON.parse(data);

    // New configurations
    const logs = {  
        builderID: json["configs"].builderID, // Developer ID
        TaskID: json["configs"].TaskID, // Task ID  
        oPartition: json["logs"].oPartition, // Primary Iterator
        xPartition: json["logs"].xPartition, // Secondary Iterator
        iPartition: json["logs"].iPartition, // Initial Iterator
        tPartition: Number(json["logs"].iPartition+json["logs"].tPartition+json["logs"].xPartition), // Transitional Iterator
        Timestamp: new Date(), // Timestamp for latest iteration    
        running: json["configs"].running, // Is task actively running 
        tDuration: json["logs"].tDuration, // Duration
        type: json["logs"].type, // App type
        lang: json["logs"].lang, // Language type
        uParams: [] // Developer defined parameters
    }

    // Update configuration settings
    await writeData('/app/config/', 'log.txt', logs);

    // If task is running for the first time, update running from 'false' to 'true'
    if(json["configs"].running==false) {

        // Read configurations from file
        let cData = await readData('/app/config/', 'config.json');
            
            // Parse data to JSON
            let cfs = JSON.parse(cData);

            // New configurations
            const cfgs = {  
                builderID: cfs.builderID, // Developer ID
                TaskID: cfs.TaskID, // Task ID  
                oPartition: cfs.oPartition, // Primary Iterator
                xPartition: cfs.xPartition, // Secondary Iterator
                iPartition: cfs.iPartition, // Initial Iterator
                tPartition: cfs.tPartition, // Transitional Iterator
                running: true, // Is task actively running 
                tDuration: cfs.tDuration, // Duration
                TimeStarted: new Date(), // Time task started 
                type:cfs.type, // App type
                lang:cfs.lang, // Language type
                uParams: [] // Developer defined parameters
            }

            // Update configuration settings    
            await writeData('/app/config/', 'config.json', cfgs);

    }

    // Check if processing is done, if so, change 'config.json' 'running' parameter from 'true' to 'done'
    if(Number(json["logs"].iPartition+json["logs"].tPartition+json["logs"].xPartition)>Number(json["logs"].oPartition)) {

        // Read configurations from file
        let nData = await readData('/app/config/', 'config.json');
            
            // Parse data to JSON
            let csn = JSON.parse(nData);

            // New configurations
            const cgs = {  
                builderID: csn.builderID, // Developer ID
                TaskID: csn.TaskID, // Task ID  
                oPartition: csn.oPartition, // Primary Iterator
                xPartition: csn.xPartition, // Secondary Iterator
                iPartition: csn.iPartition, // Initial Iterator
                tPartition: csn.tPartition, // Transitional Iterator
                running: "done", // Is task actively running 
                tDuration: csn.tDuration, // Duration
                TimeStarted: csn.TimeStarted, // Time task started 
                type:csn.type, // App type
                lang:csn.lang, // Language type
                uParams: [] // Developer defined parameters
            }

            // Update configuration settings    
            await writeData('/app/config/', 'config.json', cgs);

    }

    // Write date to file
    async function writeData(dir, file, data) {

            try { 
                return fs.writeFileSync(__dirname +  dir + file, JSON.stringify(data));
            } 
        
            catch (err) { 
                console.log('Problem writing to file.')
            }
        
    }
    
    // Read data from file
    async function readData(dir, file) {
        
            try { 
                return fs.readFileSync(__dirname  + dir + file,  'utf8');
            }
        
            catch (err) { 
                console.log('Problem fetching file.')
            }
        
    }

    });

}

// Export app
module.exports = app;

