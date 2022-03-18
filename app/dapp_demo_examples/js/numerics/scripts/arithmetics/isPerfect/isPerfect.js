//Function to test if parameter is a perfect number

function isPerfect(n){
    var sum=0;
    for(var i=1;i<n;i++){
        if(n%i==0){
            sum+=i;
        }
    }
    if(sum==n){
        return true;
    }
    else {
        return false;
    }
}

module.exports={isPerfect};