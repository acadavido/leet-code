/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    for(let i=2; i<nums.length; i++){
        if(nums[i] == nums[i-1] && nums[i] == nums[i-2]){
            nums.splice(i,1);
            i--;
        }
    }
    let k = nums.length;
    return k;
};

nums = [1,1,1,2,2,3]
// nums = [0,0,1,1,1,1,2,3,3]

removeDuplicates(nums); 

console.log(nums);
