function funcOriginal(s, a, b) {
  if (s.match(/^$/)) {
    return -1;
  }

  var i = s.length - 1;
  var aIndex = -1;
  var bIndex = -1;

  while (aIndex == -1 && bIndex == -1 && i > 0) {
    if (s.substring(i, i + 1) == a) {
      aIndex = i;
    }
    if (s.substring(i, i + 1) == b) {
      bIndex = i;
    }
    i = i - 1;
  }

  if (aIndex != -1) {
    if (bIndex == -1) {
      return aIndex;
    } else {
      return Math.max(aIndex, bIndex);
    }
  }

  if (bIndex != -1) {
    return bIndex;
  } else {
    return -1;
  }
}

function funcRefactored(str, strA, strB) {
  return Math.max(str.lastIndexOf(strA), str.lastIndexOf(strB));
}

function test(fnO, fnR, args, context) {
  const resultO = fnO.apply(context, args);
  const resultR = fnR.apply(context, args);
  console.assert(
    resultO === resultR,
    `Test failed! Fns results - original: ${resultO}; refactored: ${resultR}`
  );
}

test(funcOriginal, funcRefactored, ["a b c d f g", "b", "f"]);
test(funcOriginal, funcRefactored, ["asd", "g", "g"]);
test(funcOriginal, funcRefactored, ["asd fgh", "f", "s"]);
