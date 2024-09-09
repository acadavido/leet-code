/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     i=0;
//     while(i !== nums.length){
//         if(nums[i] == nums[i+1]){
//             nums.splice(i,1);
//             i--;
//         }
//         i++;
//     }
//     k = nums.length;
//     return k;
// };

var removeDuplicates = function(nums) {
    let k=0;
    for(let i=1; i<nums.length; i++){
        if(nums[i] !== nums[i-1]){
            k++;
            nums[k]=nums[i]
        }
    }
     k += 1;
    return k;
};

nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums));