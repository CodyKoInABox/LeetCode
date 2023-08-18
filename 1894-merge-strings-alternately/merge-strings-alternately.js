/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    
    let largestLenght = Math.max(word1.length, word2.length)
    let output = ''

    for(let i = 0; i < largestLenght; i++){
	    if(word1[i]) output += word1[i]
	    if(word2[i]) output += word2[i]
    }
    
    return output
}