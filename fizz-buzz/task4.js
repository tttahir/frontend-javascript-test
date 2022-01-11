function init() {
  if (document.getElementById("root")) return;

  const rootEl = document.createElement("div");
  rootEl.id = "root";
  rootEl.innerHTML = `
      <div><span>1</span><span>2</span><span>3</span></div>
      <div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    `;
  document.body.append(rootEl);
}

function treeWalking(node, handler) {
  let nextNode = node;
  handler(node);

  while (nextNode) {
    const newNode = nextNode.firstChild || nextNode.nextSibling;

    if (newNode) {
      nextNode = newNode;
    } else {
      while ((nextNode = nextNode.parentNode) && !nextNode.nextSibling);

      if (nextNode === node) {
        return null;
      }

      nextNode = nextNode ? nextNode.nextSibling : null;
    }

    handler(nextNode);
  }
}

init();

let counter = 0;

treeWalking(document.getElementById("root"), (node) => {
  // какая-то логика с данной нодой
  // ...
  console.log(node);
  counter++;
});

console.assert(counter === 16, `Test failed! Result: ${counter}`);
