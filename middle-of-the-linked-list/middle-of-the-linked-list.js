/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let middleNode = function(head) {

    let list = []

    let currentNode = head;

    while(currentNode != null){
        list.push(currentNode)
        currentNode = currentNode.next
    }

    let middle = Math.floor( list.length / 2 )

    return list[middle]
};