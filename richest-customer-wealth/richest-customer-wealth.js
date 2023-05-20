/**
 * @param {number[][]} accounts
 * @return {number}
 */
 
var maximumWealth = function(accounts) {
    let wealth = Array(accounts.length)

    accounts.forEach((costumer, index) => {
        wealth[index] = costumer.reduce((accumulator, current) => accumulator + current, 0)
    })

    return Math.max(...wealth)
};