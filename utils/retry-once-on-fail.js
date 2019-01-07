// Wrap `fn` so that if it fails it is retried, once.
export default (fn) => (...args) => fn(...args)
    .catch(() => fn(...args));