const nums = [1,3,3,3,2,5,6,7,101,5]
const nums_no_rpt = nums.filter((value,index,arr)=>{
    return nums.indexOf(value)===index;
    
})
console.log(nums_no_rpt)

