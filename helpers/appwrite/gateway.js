const sdk = require('node-appwrite');

const client = new sdk.Client();

client
    .setEndpoint('http://localhost:6553/v1')
    .setProject('824f182c32b28d93bab5');

module.exports={client}

