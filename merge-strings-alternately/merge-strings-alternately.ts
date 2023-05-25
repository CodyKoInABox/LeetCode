function mergeAlternately(word1: string, word2: string): string {
    let largestLength : number = Math.max(word1.length, word2.length);
    let output : string = '';

    for(let i : number = 0; i<largestLength; i++){
        if(word1[i]) output += word1[i];
	    if(word2[i]) output += word2[i];
    }

    return output;
};