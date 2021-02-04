const memoize = (func) => {
  let cache = new Map();

  return () => {
    const key = arguments[0];

    if (cache.has(key)) {
      return cache.get(key);
    }
    else {
      const result = func.apply(this, arguments);
      cache = cache.set(key, result) || cache;
      return result;
    }
  }
}


export default memoize;