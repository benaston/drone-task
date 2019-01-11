import fetch from "node-fetch";

export default ({ uri, cb }) => fetch(uri)
    .then((resp) => resp.json())
    .then((json) => (cb(json), { uri, json })) // 2