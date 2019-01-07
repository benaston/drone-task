import redisClient from './redis-client';

// Wrap `fn` so that if it fails and `shouldUseCache`, 
// an attempt is made to retrieve the value from Redis.
export default (fn, toKey, shouldUseCache) =>
  (...args) => fn(...args)
    .catch((err) => shouldUseCache(err) ? 
      redisClient.get(toKey(...args)) : Promise.reject(err));