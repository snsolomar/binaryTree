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
        // If you used queue.length directly in the for loop's condition, like for (let i = 0; i < queue.length; i++), 
        // it would cause a problem. The loop condition would be re-evaluated before each iteration, 
        // so if new nodes were added to the queue during the loop, it would result in extra iterations
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

// At the start, the root node is 3 and the queue consists of [3]. The depth is 0.

// Now, the while loop starts. We set levelSize to 1 because there's only one node in our queue (the root node). The for loop also starts, iterating levelSize (which is 1) times.

// The root node 3 is dequeued from the front of the queue and its children 9 and 20 are added to the queue. The queue now looks like [9, 20].

// The for loop completes because it only iterates levelSize (which was 1) times. Then, depth is incremented by 1. At this point, depth is 1 and the queue is [9, 20].

// The while loop continues because the queue is not empty. Now, levelSize is 2 because there are two nodes in the queue (9 and 20).

// We dequeue 9 from the queue and find that it has no children. Then we dequeue 20 and enqueue its children 15 and 7 into the queue. Now, the queue looks like [15, 7].

// The for loop completes because it only iterates levelSize (which was 2) times. Then, depth is incremented by 1. At this point, depth is 2 and the queue is [15, 7].

// The while loop continues. Now, levelSize is 2 because there are two nodes in the queue (15 and 7). Both nodes are dequeued and since they don't have any children, no new nodes are added to the queue.

// The for loop completes because it only iterates levelSize (which was 2) times. Then, depth is incremented by 1. At this point, depth is 3 and the queue is [].

// The while loop ends because the queue is empty.

// The function returns depth which is 3.