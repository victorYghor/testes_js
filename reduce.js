const nums = [[1,4,5,8,9,10],[1,20,1,3],[8,4,5,2]];
var Ric = []

for (const i in nums) {
  Ric.push( nums[i].reduce((n1,n2)=>{
   return n1+n2;
 }))
}
console.log(Ric)
console.log(Math.max(...Ric)) 