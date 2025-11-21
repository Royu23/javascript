
  function  isPerfect(n) {
       
        
        let sum=1;
        for(let i=2;i*i<=n;i++){
            
            if(n%i==0){
                if(i*i!==n){
                        sum= sum+i+n/i;
                    }
                    else{
                        sum=sum+i;
                    }
                }
                
            }
           if(n==sum&&n!==1) {
               return true;
           }
           else{
               return false;
           }
        }
      console.log(isPerfect(10));
     
       