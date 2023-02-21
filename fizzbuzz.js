var fizzBuzz = function(n) {
    var fizbuz = []
    let div3 = i%3==0 ? true : false; 
    let div5 = i%5==0 ? true : false;
    
    for(let i = 1; i<=n; i++ ){
        if(div3){
            fizbuz[i-1] = ''
            fizbuz[i-1] += 'fizz'
        }
        if(div5){
            fizbuz[i-1] = ''
            fizbuz[i-1] += 'buzz'
        }
        if((div3||div5)){
            fizbuz[i-1] = i

        }
    }
    return fizbuz;
};

console.log(fizzBuzz(15))
