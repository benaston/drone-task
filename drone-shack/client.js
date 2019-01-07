import fetch from "node-fetch";
import compose from "/utils/compose";
import useCacheOnFail from "/redis/use-cache-on-fail";
import is3rdPartyError from "./is-3rd-party-error";
import retryOnFail from "/utils/retry-on-fail";
import cacheOnSuccess "/redis/cache-on-success";
import toKey from "./to-key";

// move to config
const AUTHORITY = "https://www.unreliable-drone-api.com";

// Proxy for API that looks like:
// GET -> /api/v0/drones
// GET -> /api/v0/drone/:id
const getResource = (version, resource, id) =>
    fetch(`${AUTHORITY}/api/${version}/${resource}/${id}`)
    .then(res => res.json());

const get = compose(retryOnFail,
                    useCacheOnFail(toKey, is3rdPartyError),
                    cacheOnSuccess(toKey),
                    getResource);

export default {
    get,
};
