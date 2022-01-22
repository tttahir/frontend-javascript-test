const banners = [
  { weight: 10, id: 1 },
  { weight: 130, id: 2 },
  { weight: 40, id: 3 },
  { weight: 25, id: 4 },
  { weight: 60, id: 5 },
  { weight: 12, id: 6 },
];

function getRandomBanner(banners) {
  let weights = [];
  let randomSum =
    banners.reduce((acc, { weight }) => {
      acc += weight;
      weights.push(acc);
      return acc;
    }, 0) * Math.random();

  return banners[weights.findIndex((weight) => randomSum <= weight)];
}

console.log(getRandomBanner(banners)); // рандомный баннер из списка
