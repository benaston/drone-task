// Converts a resource name, version and ID into a key for use in Redis.
export default (version, resource, id) => `/${version}/${resource}/${id}`;
