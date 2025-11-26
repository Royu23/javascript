class Solution {
    armstrongNumber(n) {
        let num=n.toString();
        let ans=0;
        let numbers=num.length;
        for (let i of num) {
        ans += Math.pow(parseInt(i), numbers);
        }
         if(ans==n){
            return true;
        }
        return false;
    }
}
