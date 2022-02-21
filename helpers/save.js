const fs = require('fs');

function writeData(dir, file, data) {    

    try { 
        return fs.writeFileSync(__dirname + dir + file, JSON.stringify(data)); 
    } 

    catch (err) { 
        console.log('Problem writing data to file..!')
    }

}

function readData(dir, file) {    

    try { 
        return fs.readFileSync(__dirname + dir + file,  'utf8');
    }

    catch (err) { 
        console.log('Problem reading data from file..!') 
    }

}

module.exports = { writeData, readData };

