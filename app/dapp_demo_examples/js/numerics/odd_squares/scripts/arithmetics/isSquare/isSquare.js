//Function to test if parameter is a perfect number

function isSquare(n){

    if(Math.sqrt(n) * Math.sqrt(n)===n){
        return true;
    }
    else {
        return false;
    }
}

module.exports={isSquare};

