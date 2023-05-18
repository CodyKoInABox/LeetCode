/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
let findSmallestSetOfVertices = function(n, edges) {

    let output = []

    let array = new Array(n).fill(0)

    edges.forEach((edge) =>{
        array[edge[1]]++
    })

    array.forEach((item, index) => {
        if(item == 0){
            output.push(index)
        }
    })


    return output
};