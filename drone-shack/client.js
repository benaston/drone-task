import fetch = from "node-fetch";
import retryOnceOnFail = from "/utils/retry-once-on-fail";
import fromCacheOnFail = from "/redis/from-cache-on-fail";
import toCacheOnSuccess = "/redis/to-cache-on-success";
import toKey = from "./to-key";
import is3rdPartyError = from "./is-3rd-party-error";

const AUTHORITY = "https://www.unreliable-drone-api.com";

// Proxy for API that looks like:
// GET -> /api/v0/drones
// GET -> /api/v0/drone/:id
const get = (version, resource, id) =>
    fetch(`${AUTHORITY}/api/${version}/${resource}/${id}`)
    .then(res => res.json());

export default {
    get: retryOnceOnFail(fromCacheOnFail(toCacheOnSuccess(get, toKey), toKey, is3rdPartyError))
};