const banners = [
  { weight: 10, id: 1 },
  { weight: 130, id: 2 },
  { weight: 40, id: 3 },
  { weight: 25, id: 4 },
  { weight: 60, id: 5 },
  { weight: 12, id: 6 },
];

function getRandomBanner(banners) {
  const nums = banners.map(({ weight }) => Math.floor(Math.random() * weight));
  const maxNum = Math.max.apply(null, nums);
  const index = nums.indexOf(maxNum);

  return banners[index];
}

console.log(getRandomBanner(banners)); // рандомный баннер из списка
