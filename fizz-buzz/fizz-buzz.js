/**
 * @param {number} n
 * @return {string[]}
 */
let fizzBuzz = function(n) {
    let result = []

    for(let i = 1; i<=n; i++){
        let string = ""

        if(i%3==0){
            string += 'Fizz'
        }
        if(i%5==0){
            string += 'Buzz'
        }
        else if(i%3!=0 && i%5!=0){
            string += i
        }

        result.push(string)
    }

    return result
};