class Solution {
    findSum(n) {
        let res=0
       if (n==0){
           return 0;
       } 
       if(n>=1){
           res=n*(n+1)/2;
       }
        return res; 
        
    }
}