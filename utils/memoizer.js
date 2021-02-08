const memoizer = () => {
  const cache = new Map();

  return (key, memoizer) => {
    return cache.get(key) || (cache.set(key, memoizer), memoizer);
  }
}

export default memoizer;
