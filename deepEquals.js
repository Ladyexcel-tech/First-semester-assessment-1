//task1
function deepEqual(objA, objB) {
  if (objA === objB) return true;

  if (typeof objA !== "object" || objA === null ||
      typeof objB !== "object" || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  // Recursive check
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}