const memoize = (fn, resolver) => {
  const cache = new Map();
  return (...args) => {
    const key = resolver ? resolver.apply(null, args) : args[0];
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = fn.apply(null, args);
      cache.set(key, result);
      return result;
    }
  }
}

export default memoize;