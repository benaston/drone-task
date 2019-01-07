// Converts a drone ID into a key for use in Redis.
export default (id) => `/drone/${id}`;