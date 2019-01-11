import client from '/drone-shack/resilient-client';
import toUri from './to-uri';

const get = (id, cb) => client.get(toUri(id), cb);

export default = {
	get,
};