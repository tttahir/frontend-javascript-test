function removeExtraChars(string) {
  return string.replace(/[^а-яё]/g, "");
}

function sortString(string) {
  return string.split("").sort().join("");
}

function anagram(s1, s2) {
  const sentence1 = removeExtraChars(s1.toLowerCase());
  const sentence2 = removeExtraChars(s2.toLowerCase());

  return sortString(sentence1) === sortString(sentence2);
}

function test(fn, args, expResult, context) {
  const result = fn.apply(context, args);
  console.assert(result === expResult, `Test failed! Result: ${result}`);
}

test(anagram, ["Воз", "зов"], true);
test(anagram, ["пила", "липа"], true);
test(anagram, ["Я в мире — сирота.", "Я Ариост в Риме."], true);
test(
  anagram,
  ["Аз есмь строка, живу я, мерой остр.", "За семь морей ростка я вижу рост"],
  true
);
test(anagram, ["Чертог", "горечь"], false);
