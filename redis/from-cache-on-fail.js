import cache from './client';

// Wrap `fn` so that if it fails and `shouldUseCache`, 
// an attempt is made to retrieve the value from the cache.
export default (fn, toKey, shouldUseCache) => (...args) => fn(...args)
    .catch((err) => shouldUseCache(err) ?
        cache.get(toKey(...args)) : Promise.reject(err));