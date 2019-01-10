import cache from "./client";

const LIFETIME_SECONDS = 300;

// Wrap `fn` so that when it succeeds, the result is cached.
// export default (fn) => (...args) => fn(...args)
//     .then((result) => cache.setx(result.uri, LIFETIME_SECONDS, result));

export default ({ key, value, lifetime = LIFETIME_SECONDS }) => cache.setx(key, lifetime, value);