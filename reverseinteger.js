var reverse = function(x) {
    let reverse=0;
    let num;
    while(x!==0){
         num=x%10;
         reverse=reverse*10+num;
         x=(x/10)|0;
    }
    return (reverse>Math.pow(2,31)|| reverse<Math.pow(-2,31)?0:reverse);
};
