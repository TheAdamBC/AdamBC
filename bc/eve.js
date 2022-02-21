/* 
The Eve Chain:
Eve is the main blockchain that stores peers.
*/

//import BlockChain from './bc'; // Import blockchain creator
const {BlockChain} = require('./bc');
const {encryptPWD} = require('./helpers/helper'); // Password encryption
require("dotenv").config();  // Environment event handler

const eve = new BlockChain();

var pwd = encryptPWD(`${process.env.WORKER_ID}`);

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Vakindu", Name: "VP", Id: "UUID1", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Philliam", Name: "VP",  Id: "UUID2", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "VakinduPhilliam", Name: "VP",  Id: "UUID3", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Adam", Name: "VP",  Id: "UUID4", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Eve", Name: "VP",  Id: "UUID5", Password: pwd});

eve.addBlock({Email: "pvakindu@gmail.com", Username: "AdamBC", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Biology", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Chemistry", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Mathematics", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Math", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Physics", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "History", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Agriculture", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Business", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Bible", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Jesus", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Christ", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Games", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Videogames", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Videogame", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Movie", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Movies", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Science", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Earth", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Mars", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Sun", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Moon", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Stars", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "AI", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "ML", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "MachineLearning", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "ArtificialIntelligence", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Code", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Apple", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Google", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Amazon", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "SpaceX", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Tesla", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Facebook", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Finance", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Fintech", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Calculus", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Robot", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Robots", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "TV", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Radio", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Hollywood", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Bollywood", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Cinema", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Christian", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Islam", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Muslim", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Christians", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Muslims", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Christmas", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "XMas", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Man", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Woman", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Gender", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Sex", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Boy", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Girl", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Men", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Women", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Girls", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Boys", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Twitter", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "China", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Chinese", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "American", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Americans", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "America", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "US", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "USA", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "President", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Holiday", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Travel", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Hotel", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Hotels", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "1", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "2", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "One", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Two", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "A", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "B", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "C", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "D", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "App", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "DApp", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Football", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Rugby", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Golf", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Soccer", Name: "VP",  Id: "UUID6", Password: pwd});

//eve.addBlock({Email: "pvakindu@gmail.com", Username: "Email", Name: "VP",  Id: "UUID6", Password: pwd});


// If chain is valid
if(eve.chainIsValid()==true){

    // Save chain
    eve.saveChain();

}

