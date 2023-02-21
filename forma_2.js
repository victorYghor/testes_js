
var nums = [1,2,3,4,14,12,10,8,9,9];
var order = nums.sort((a,b)=>a-b)
var sum = 0;

const tam = nums.length;
sum += Math.min(...nums.slice(tam-2,tam-0))

for (let i = 2; i < nums.length; i= 2+i) {
  sum += Math.min(...nums.slice(tam-(i+2),tam-i))
    
}




