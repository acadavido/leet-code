/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k=0;
    let i=0;
    while(i!=nums.length){
       if(nums[i]!== val){
        nums[k]=nums[i];
        k++;
       }
       i++;
    }
    let remove = i-k;
    nums.splice(-remove, remove)
};

nums = [0,1,2,2,3,0,4,2]
val = 2

removeElement(nums, val)

console.log(nums); 
