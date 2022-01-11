/**
 * @param {Array} array массив, который нужно обработать
 * @param {number} count число элементов массива, которые будут обрабатываться параллельно
 * @param {() => Promise} handler обработчик, который возвращает промис
 * @return {Promise}
 */
function map(arr, count, handler) {
  const promises = arr.slice(0, count - 1).map((item) => handler(item));
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
