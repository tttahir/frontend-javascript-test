function treeWalking(node, handler) {
  while (node) {
    // if (node->current <= MAX_CHILD) {
    //   Node prev = node;
    //   if (node->child[node->current]) {
    //     node = node->child[node->current];
    //   }
    //   prev->current++;
    // } else {
    //   // Do your thing with the node.
    //   node->current = 0; // Reset counter for next traversal.
    //   node = node->parent;
    // }
  }
}

let counter = 0;

treeWalking(document.getElementById("root"), (node) => {
  // какая-то логика с данной нодой
  // ...
  counter++;
});

console.asset(counter === 16, `Test failed! Result: ${counter}`);

// <!-- DOM дерево, которое необходимо обойти -->
// <div id="root">
//   <div><span>1</span><span>2</span><span>3</span></div>
//   <div>
//     <ul>
//       <li>1</li>
//       <li>2</li>
//       <li>3</li>
//     </ul>
//   </div>
// </div>
