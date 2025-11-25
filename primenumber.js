class Solution {
    isPrime(n) {
        if(n<=1){
            return false;
        }
        // code here
        for( let i=2;i<n;i++){
            if(n%i==0){
                return false;
            }
            
        }
        return true;
    }
}