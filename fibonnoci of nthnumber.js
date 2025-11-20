class Solution {
    nthFibonacci(n) {
        if(n==0){
            return 0;
        }
        // your code here
        let first=0;
        let second=1;
        for(let i=2;i<=n;i++)  {
            let next=first + second;
            first=second;
            second=next;
            
        }
       
        return second;
    }
}