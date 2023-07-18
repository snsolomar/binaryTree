// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Recursion
var maxDepthR = function(root) {
    if (root == null){
        return 0;
    }

    let leftDepth = maxDepthR(root.left);
    let rightDepth = maxDepthR(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
};

// Iterative 
var maxDepthI = function(root) {

};

// Breadth-First Search 
var maxDepthBFS = function(root) {
    if (root == null){
        return 0;
    }

    let queue = [];
    queue.push(root);

    let depth = 0;

    while (queue.length !== 0){
        let levelSize = queue.length // Get the current level size
        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift(); // Pop the front node of the queue
            if (currentNode.left !== null){
                queue.push(currentNode.left); // Add left child to the end of the queue\
            }
            if (currentNode.right !== null){
                queue.push(currentNode.right); // Add right child to the end of the queue\
            }
        }
        depth++;
    }
    return depth;
};