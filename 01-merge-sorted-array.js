/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//Solution 1
var merge = function(nums1, m, nums2, n) {
    nums1.splice(-n,n);
    nums2.forEach(n => nums1.push(n))
    for(let i=0; i<nums1.length; i++){
        for(let j=0; j<nums1.length; j++){
            if(nums1[i]<nums1[j]){
                let temp = nums1[j];
                nums1[j] = nums1[i]
                nums1[i] = temp
            }
        }
    }
};

//Solution 2
// var merge = function(nums1, m, nums2, n) {
//     nums1.splice(-n,n);
//     nums2.forEach(n => nums1.push(n))
//     nums1.sort((a,b)=>a-b)
// };

nums1 = [1,2,3,0,0,0]
m = 3
nums2 = [2,5,6]
n = 3

merge(nums1, m, nums2, n)
