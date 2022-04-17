// Function to determines if number n is prime

function isPrime (n) {     
    var divisor = parseInt(n/2, 10);
    
    while(divisor > 1) {
        if (n % divisor === 0) {
            return false;
            
        } else {
                divisor -= 1;
            }
        }
        return true;
}

module.exports={isPrime};
