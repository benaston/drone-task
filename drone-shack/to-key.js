// Converts a resource ID into a key for use in Redis.
export default (version, resource, id) => `/${version}/${resource}/${id}`;
