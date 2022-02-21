/**
 * Adam BC:
 * The Adam Blockchain Computer.
 * 
 */

const app = require('./server'); // Fetch APIs
const socket = require("socket.io");

const port = 6553; // Processing Port

// Port session listener
const server = app.listen(port, () => {
    console.log(`Adam BC has started on port ${port} ...!`)
})

// Socket setup
const io = socket(server);

exports.io=io; // Listening with socket.io

