import client from '/drone-shack/client';
import toUri from './to-uri';

// cb to be called immediately after successful request
const get = (id, cb) => client.get(toUri(id));

export default = {
	get,
};