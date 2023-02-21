nums = [-1,1,2,0]
    let  min=[], sum = 0;
    for(let i = 0; i < nums.length; i++  ){
        for(let j =0; j< nums.length && j != i; j++){
            min.push(Math.min(nums[i],nums[j]));
 
        }
    }
    min.sort();
    let n = (Math.floor(nums.length)/2);
    while(n >=1 ){
        sum+=min.pop()
        n--;
    }
console.log(sum);


