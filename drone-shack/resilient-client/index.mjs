import cache "/redis/cache";
import compose from "/utils/compose";
import retry from "./retry";
import useCacheOnFail from "./use-cache-on-fail";

const createUri = ({ resource, cb, uri = toUri(resource) }) => ({ uri, cb });

const get = retry(compose(useCacheOnFail,
    cache,
    getResource,
    createUri));

export default {
    get,
};