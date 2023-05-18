/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */

 //THIS CODE IS NOT MINE, THIS IS JUST A RUNTIME TEST!
var findSmallestSetOfVertices = function(n, edges) {
    let indegrees = new Array(n).fill(0);
    for (const edge of edges){
        indegrees[edge[1]]++;
    }
    let ans = [];
    for (let i = 0; i< n; i++){
        if (indegrees[i] == 0){
            ans.push(i)
        }
    }
    return ans;
};