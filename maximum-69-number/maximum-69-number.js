/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    
    let stopLoop = false

    let numString = num.toString()
    let newString = ""

    

    for(let i = 0; i<numString.length; i++){
        if(!stopLoop && numString[i] == '6'){
            newString += '9'
            stopLoop = true
        }
        else{
            newString += numString[i]
        }
    }
    
    
    return parseInt(newString)
};