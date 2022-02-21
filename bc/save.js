const fs = require('fs');

function writeEve(eve) {    

    try { 
        return fs.writeFileSync('eve.json', JSON.stringify(eve)); 
    } 

    catch (err) { 
        console.log('Problem reading data..!')
    }

}

function readEve() {    

    try { 
        return fs.readFileSync('eve.json',  'utf8');
    } 

    catch (err) { 
        console.log('Problem saving data..!') 
    }

}

module.exports = { writeEve, readEve };
