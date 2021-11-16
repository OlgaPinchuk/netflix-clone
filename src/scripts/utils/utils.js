export function isEmptyObject(obj) {
  return (
    obj &&
    Object.keys(obj).length === 0 &&
    Object.getPrototypeOf(obj) === Object.prototype
  );
}

export function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function getTitlesByCategory(categoryId, hook) {
  const path = `categories/${categoryId.id}/items`;
  const { data } = hook(path);
  return data;
}
