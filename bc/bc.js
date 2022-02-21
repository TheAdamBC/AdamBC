const {Block} = require('./block'); // Import block creator
const {readEve, writeEve} = require('./save'); // Import block creator
const {encryptPWD} = require('./helpers/helper'); // Password encryption
require("dotenv").config();  // Environment event handler

// Blockchain
class BlockChain {

    constructor() {

        this.eve = JSON.parse(readEve());

        // Add difficulty to the Blockchain
        if(this.eve.Eve.length<300000){
        
            this.difficulty = 1;
        
        } else if (this.eve.Eve.length>=300000 && this.eve.Eve.length<600000){
            
            this.difficulty=2;
        
        } else if (this.eve.Eve.length>=600000 && this.eve.Eve.length<900000){
            
            this.difficulty=3
        
        } else if (this.eve.Eve.length>=900000 && this.eve.Eve.length<1200000){
            
            this.difficulty=4
        
        } else if (this.eve.Eve.length>=1200000){
            
            this.difficulty=5
        
        }

    }

    // Add new block
    addBlock(data){

        let index = this.eve.Eve.length;
        let prevHash = this.eve.Eve.length !== 0 ? this.eve.Eve[this.eve.Eve.length - 1].hash : 0;
        let difficulty = this.difficulty;

        // Create genesis block data
        if(this.eve.Eve.length==0){

            data ={
                Email: "pvakindu@gmail.com", 
                Username: "Vakindu", 
                Name: "VP", 
                Id: "Eve : First Woman, Adam : First Man, Book : Bible, Chapters : Genesis 1-3",
                Password: encryptPWD(`${process.env.WORKER_ID}`)
            }
        }

        let usernames = this.eve.Eve;

        // Username exists detector
        let checkUsername=false;

        // Check if username already exists. Username must be Unique
        for (let [key, value] of Object.entries(usernames)){

            // Check if username already exists
            if(usernames[key].data.Username==data.Username){

                checkUsername=true;

            }
        }

        if(checkUsername==false){

        let block = new Block(index, data, prevHash, difficulty);

        // Add mining difficulty function to new block
        block.mineBlock(this.difficulty);
        this.eve.Eve.push(block);

        } else {

            console.log("Username already exists...!")

        }

    }

    // Check validity of chain
    chainIsValid() {

        for(var i=0;i<this.eve.Eve.length;i++){

            let bk = this.eve.Eve[i];

            // Check that hashes are not tampered with
            if(this.eve.Eve[i].hash !== Block.blockHash(bk)) 

            return false;

            // Check that previous block's hash is same as recorded in current hash
            if(i > 0 && this.eve.Eve[i].prevHash !== this.eve.Eve[i-1].hash)

            return false;

        }

        return true;

    }

    // Save Chain
    saveChain(){

        //Save as JSON
        writeEve(this.eve);

    }

}

//export default BlockChain;

module.exports={BlockChain};

