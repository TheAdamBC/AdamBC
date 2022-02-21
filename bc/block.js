// Create a new block
const sha256 = require('sha256'); // Import hash parser

// The block
class Block {

    constructor(index, data, prevHash, difficulty) {

        this.index = index;
        this.timestamp = Math.floor(Date.now() / 1000);
        this.data = data;

        this.prevHash = prevHash;
        this.hash = this.getHash();
        this.nonce = 0;
        this.difficulty = difficulty;

    }

    getHash(){

    return sha256(JSON.stringify(this.data) + this.prevHash + this.index + this.timestamp + this.nonce + this.difficulty);

    }

    mineBlock(difficulty) {

        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){

            this.nonce++;
            this.hash = this.getHash();

        }
  
    }

    static blockHash(block) {

        const { data, prevHash, index, timestamp, nonce, difficulty } = block;
    
        return sha256(JSON.stringify(data) + prevHash + index + timestamp + nonce + difficulty);
      
    }

}

//export default Block;

module.exports={Block}

