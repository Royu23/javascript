class Solution {
    inSequence(a, b, c) {
       
        if((b-a)%c==0){
            return true;
        }
        return false;
    }
}
