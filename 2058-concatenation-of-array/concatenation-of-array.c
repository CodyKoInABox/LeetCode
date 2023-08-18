/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* getConcatenation(int* nums, int numsSize, int* returnSize){

    *returnSize = 2 * numsSize;

    int *answer;

    answer = (int*) malloc(*returnSize * sizeof(int));

    for(int i = 0; i < numsSize; i++){
        answer[i] = nums[i];
        answer[i + numsSize] = nums[i];
    }

    return answer;
}