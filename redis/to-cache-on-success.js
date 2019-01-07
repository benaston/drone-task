import cache from "./client";

const LIFETIME_SECONDS = 300;

// Wrap `fn` so that when it succeeds, the result 
// is cached. `toKey` is supplied as the logic to 
// create the resource key for use in Redis.
export default (toKey) => (fn) => (...args) => fn(...args)
    .then((result) => cache.setx(toKey(...args), LIFETIME_SECONDS, result), result);
