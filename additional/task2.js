/**
 * @param {Array} array массив, который нужно обработать
 * @param {number} count число элементов массива, которые будут обрабатываться параллельно
 * @param {() => Promise} handler обработчик, который возвращает промис
 * @return {Promise}
 */
function map(array, count, handler) {
  const promises = [];
  const iterator = array.values();
  const wrap = (item) =>
    item && handler(item).then(() => wrap(iterator.next().value));

  for (let i = 0; i < count; i++) {
    promises.push(wrap(iterator.next().value));
  }

  return Promise.all(promises);
}

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// вызов функции, каждый четный элемент будет обрабатываться дольше
map(
  Array(random(80, 100))
    .fill()
    .map(() => random(0, 100)),
  4,
  (item) =>
    new Promise((resolve) => {
      setTimeout(resolve, item % 2 === 0 ? 200 : 100);
    })
);
