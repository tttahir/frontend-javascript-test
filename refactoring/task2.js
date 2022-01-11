const starsMap = {
  1: "★☆☆☆☆",
  2: "★★☆☆☆",
  3: "★★★☆☆",
  4: "★★★★☆",
  5: "★★★★★",
};

function drawRating(vote) {
  if (vote < 0 || vote > 100) throw new Error("Данные некорректны");

  const stars = Math.ceil(vote / 20);
  const pos = stars === 0 ? 1 : stars;

  return starsMap[pos];
}

// Проверка работы результата
console.log(drawRating(0)); // ★☆☆☆☆
console.log(drawRating(1)); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★
