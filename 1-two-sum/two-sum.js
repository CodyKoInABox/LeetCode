/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let ans = []
    
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[i] + nums[j] == target && i != j){
                ans[0] = i
                ans[1] = j
            }
        }
    }

    return ans
};