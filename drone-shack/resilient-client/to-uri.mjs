const AUTHORITY = 'https://www.unreliable-drone-api.com';

// API looks like:
// GET -> /api/v0/drones
// GET -> /api/v0/drone/:id
const toUri = ({ version, resource, id}) => 
	id ? `${AUTHORITY}/api/${version}/${resource}/${id}` : 
		`${AUTHORITY}/api/${version}/${resource}`; 