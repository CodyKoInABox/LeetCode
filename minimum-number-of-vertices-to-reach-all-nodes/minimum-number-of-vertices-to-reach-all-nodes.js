/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
let findSmallestSetOfVertices = function(n, edges) {

    let nodes = []

    for(let i = 0; i<n; i++){
        nodes.push(i)
    }
    
    edges.forEach(element => {
        if( nodes.includes(element[1]) ){
            let index = nodes.indexOf(element[1])
            nodes.splice(index, 1)
        }
    })

    return nodes
};