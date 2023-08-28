/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if(x < 0){
        return false
    }

    let string = x + ''

    for(let i = 0; i < string.length; i++){
        if(string[i] != string[string.length-i-1]){
            return false;
        }
    }
    
    return true
};