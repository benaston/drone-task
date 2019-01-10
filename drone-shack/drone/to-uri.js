// move to config
const AUTHORITY = "https://www.unreliable-drone-api.com";
const API_VERSION = "1";
const RESOURCE_SINGULAR = "drone";
const RESOURCE_PLURAL = "drones";

// Proxy for API that looks like:
// GET -> /api/v0/drones
// GET -> /api/v0/drone/:id
const toUri = ({ version, resource, id}) => 
	id ? `${AUTHORITY}/api/${API_VERSION}/${RESOURCE_SINGULAR}/${id}` : 
		`${AUTHORITY}/api/${API_VERSION}/${RESOURCE_PLURAL}`;