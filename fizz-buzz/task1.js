function dscount(string, s1, s2) {
  const str = string.toLowerCase();
  const subStr = (s1 + s2).toLowerCase();
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const target = str.slice(i, i + subStr.length);

    if (target === subStr) {
      count++;
    }
  }

  return count;
}

function test(fn, args, expResult, context) {
  const result = fn.apply(context, args);
  console.assert(result === expResult, `Test failed! Result: ${result}`);
}

test(dscount, ["ab___ab__", "a", "b"], 2);
test(dscount, ["___cd____", "c", "d"], 1);
test(dscount, ["de_______", "d", "e"], 1);
test(dscount, ["12_12__12", "1", "2"], 3);
test(dscount, ["_ba______", "a", "b"], 0);
test(dscount, ["_a__b____", "a", "b"], 0);
test(dscount, ["-ab-аb-ab", "a", "b"], 2);
test(dscount, ["aAa", "a", "a"], 2);
