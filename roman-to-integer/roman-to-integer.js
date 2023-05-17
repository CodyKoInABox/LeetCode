/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;

    for(let i = 0; i < s.length; i++){
        switch(s[i]){

            case 'I':
                result += 1
            break;

            case 'V':
                if(s[i-1]=='I'){
                    result += 3
                }else{
                    result += 5
                }
            break;

            case 'X':
                if(s[i-1]=='I'){
                    result += 8
                }else{
                    result += 10
                }
            break;

            case 'L':
                if(s[i-1]=='X'){
                    result+=30
                }
                else{
                    result += 50
                    }
            break;

            case 'C':
                if(s[i-1]=='X'){
                    result+=80
                }
                else{
                    result += 100
                    }
            break;

            case 'D':
                if(s[i-1]=='C'){
                    result+=300
                }
                else{
                    result += 500
                    }
            break;

            case 'M':
                if(s[i-1]=='C'){
                    result+=800
                }
                else{
                    result += 1000
                    }
            break;
            
        }
    }

    return result
};