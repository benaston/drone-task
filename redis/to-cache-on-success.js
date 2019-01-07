import cache from "./client";

const LIFETIME_SECONDS = 300;

// Wrap `fn` so that when it succeeds, the result 
// is cached.
export default (fn, toKey) => (...args) => fn(...args)
    .then((result) => cache.setx(toKey(...args), LIFETIME_SECONDS, result), result);