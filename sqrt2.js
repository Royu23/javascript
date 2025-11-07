var mySqrt=function(x){
    while(true){
        let n=1;
        if((n*n>x)){
            return n-1;
        }
        else if((n*n==x)){
            return n;
        }
        else{
            n++;
        }
    }
}
