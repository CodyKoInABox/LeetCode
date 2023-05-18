/**
 * @param {number[]} piles
 * @return {boolean}
 */
let stoneGame = function(piles) {
    let alice = 0;
    let bob = 0;

    let turn = true;
    for(let i = 0; i < piles.length; i++){
        if(piles[i] >= piles[piles.length-(i+1)]){
            if(turn){
                alice = alice + piles[i]
            }
            else{
                bob = bob + piles[i]
            }
        }
        else{
            if(turn){
                alice = alice + piles[piles.length-(i+1)]
            }
            else{
                bob = bob + piles[piles.length-(i+1)]
            }
        }

    }

    return alice>bob
};