 var a =getsecondlargest(arr){
    arr=arr.sort((a,b)=>(a-b));
    let i=arr.length-1;
    for(;i>0;){
        if(arr[i]==arr[i-1]){
            i--;
        }
        else{
            break;
        }
    }
    if(i-1<0){
        return -1;
    }
    else{
        return arr[i-1];
    }

}
