class Solution {
    
    fibonacciNumbers(N) {
       let ans=[];
       ans[0]=0;
       if(N==1){
           return ans;
       }
       ans[1]=1;
       if(N==2){
           return ans;
       }
       for( let i=2;i<N;i++){
           ans[i]=ans[i-1]+ans[i-2];
       }
       return ans;
    }
}