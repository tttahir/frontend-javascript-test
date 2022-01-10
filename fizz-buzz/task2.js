const parenthesesPair = {
  ">": "<",
  "]": "[",
  "}": "{",
  ")": "(",
};

function checkSyntax(string) {
  const stack = [];

  for (let i = 0; i < string.length; i++) {
    if (["<", "[", "{", "("].includes(string[i])) {
      stack.push(string[i]);
    } else if (stack[stack.length - 1] === parenthesesPair[string[i]]) {
      stack.pop();
    }
  }

  return stack.length ? 1 : 0;
}

function test(fn, args, expResult, context) {
  const result = fn.apply(context, args);
  console.assert(result === expResult, `Test failed! Result: ${result}`);
}

test(checkSyntax, ["---(++++)----"], 0);
test(checkSyntax, [""], 0);
test(checkSyntax, ["before ( middle []) after "], 0);
test(checkSyntax, [") ("], 1);
test(checkSyntax, ["} {"], 1);
test(checkSyntax, ["<(   >)"], 1);
test(checkSyntax, ["(  [  <>  ()  ]  <>  )"], 0);
test(checkSyntax, ["   (      [)"], 1);
