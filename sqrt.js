var x;
var sqrt=function(x){
    let l=2;
    r=Math.floor(x/2);
    while(l<=r){
        let m=Math.floor(l+r/2);
        if(x===m**2){
            return m;
        }
        else if(x<m**2){
            r=m-1;
        }
        else{
            l=m+1;
        }
      
        }
        return r;
    }

console.log(sqrt(10));