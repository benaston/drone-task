import client from "./client";

// Wrap `fn` so that when it succeeds, the result 
// is cached in Redis.
export default (fn, toKey) => 
  (...args) => 
    fn(...args)
      .then((result) => client.set(toKey(...args), result), result);