const stars = ["★☆☆☆☆", "★★☆☆☆", "★★★☆☆", "★★★★☆", "★★★★★"];

function drawRating(vote) {
  if (vote < 0 || vote > 100) throw new Error("Данные некорректны");

  const pos = Math.max(Math.ceil(vote / 20) - 1, 0);

  return stars[pos];
}

// Проверка работы результата
console.log(drawRating(0)); // ★☆☆☆☆
console.log(drawRating(1)); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★
