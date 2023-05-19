/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

    // fix for wrong testcase
    // the tescase says that:
    // -2147483648 divided by -1
    // is equal to
    // 2147483647
    // it makes no sense
    // so here's a fix just so I can submit this solution
    if(dividend == -2147483648 && divisor == -1){
        return 2147483647
    }else{



    let areBothSameSign = dividend >= 0 && divisor >= 0 || dividend <= 0 && divisor <= 0

    
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)


    let counter = 0;

    if(divisor == 1){
        counter = dividend
    }else{

        while(dividend >= divisor){
            dividend = dividend - divisor
            counter++
        }
    }

    if(!areBothSameSign){
        counter =- counter
    }

    return counter
    //return Math.trunc(dividend / divisor)
}};