const {readEve, writeEve} = require('./save'); // Import block creator
const sha256 = require('sha256'); // Import hash parser
const {encryptPWD,comparePWD} = require('./helpers/helper');
// Import Uuid4
const {v4:uuidv4} = require('uuid');

let data = JSON.parse(readEve());

let usernames = data.Eve;

// Our encrypted Password
//var pwd ="$2b$10$3OXuc1UEjrHEbL1I0KXyN.dVz8kBPD6IxnJijWv9XfhWF4mcfxIUW"

// Password Matches
//const matcher_true = comparePWD("TTID-TTID-TTID-TTID", pwd)
//console.log(matcher_true); // True

//Password DOES NOT match
//const matcher_false = comparePWD("TTID-TTID-TTID-TTIDU", pwd)
//console.log(matcher_false); // False

// Convert user key to uuidv4
var id = uuidv4("subscription_key");

console.log(id);

