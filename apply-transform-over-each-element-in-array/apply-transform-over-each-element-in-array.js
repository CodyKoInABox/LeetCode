/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {

    let newArr = []
    
    arr.forEach((element) => {
       newArr.push(fn(element, arr.indexOf(element)))
    })

    return newArr

};