function factorial(n){
    console.log(n);
    if(n > 1){
        n = n * factorial (n-1);
    }
    return n;
}

console.log(factorial(3));