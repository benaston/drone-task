import fetch from "node-fetch";

import cache "/redis/cache-on-success";
import compose from "/utils/compose";
import isFailureCodePresent from "./is-failure-code-present";
import retry from "/utils/retry-on-fail";
import useCacheOnFail from "/redis/use-cache-on-fail";

// Logic:
// 1. It should forward requests sensibly to Bob's Epic Drone Shack.
// 2. If the request is succesful, it should use the response and forward it to the requestor,
// 3. ...before caching the response, using sensible caching technology of your choice.
// 4. If Bob's Epic Drone Shack responds with a failure code, you should fetch the latest cache if it is available,
// 5. ...and retry the request if it is not.

const getResource = (uri, cb) =>
    fetch(uri)
    .then((resp) => resp.json())
    .then((json) => cb(json)) // 2.

// Ask on Stackoverflow: show should I pass the URI along the composition
// "how to implment this logic in a functional way"
// get it running to stp through (heroku seed??)
const get = compose(retry, // 5.
    useCacheOnFail(isFailureCodePresent), // 4.
    cache, // 3.
    getResource); // 1.

export default {
    get,
};